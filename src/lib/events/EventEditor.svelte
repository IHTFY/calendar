<script>
	import Dropzone from 'svelte-file-dropzone';
	import { database } from '$lib/stores.js';
	import { currentEvent } from '$lib/stores.js';
	import { onMount } from 'svelte';

	$: currentImage = $currentEvent.image;

	function handleFilesSelect(e) {
		const file = e.detail.acceptedFiles[0];
		const reader = new FileReader();
		reader.onload = e => {
			currentImage = e.target.result;
		};
		reader.readAsDataURL(file);
	}

	let createNewEvent;
	onMount(() => {
	createNewEvent = () => {
			currentEvent.set({
				id: window.crypto.randomUUID(),
				date: new Date().toISOString(),
				type: '',
				name: '',
				image: 'https://picsum.photos/100/100',
			});
		};
	});

	const saveEventChanges = () => {
		currentEvent.set({
			id: $currentEvent.id,
			date: document.getElementById('event-date').value + ' 00:00:00',
			type: document.getElementById('event-type').value,
			name: document.getElementById('event-name').value,
			image: currentImage,
		});

		const index = $database.findIndex(db => db.id === $currentEvent.id);

		database.update(db => {
			index > -1 ? (db[index] = $currentEvent) : db.push($currentEvent);
			db.sort((a, b) => {
				const aDate = a.date.replace(/^(\d{4})/, '2022');
				const bDate = b.date.replace(/^(\d{4})/, '2022');
				return new Date(aDate) - new Date(bDate);
			});
			return db;
		});
	};
</script>

<div>
	<form>
		<div class="text-input">
			<!-- TODO handle dates better -->
			<button type="button" on:click={createNewEvent}>New Event</button>
			<input
				id="event-date"
				type="date"
				name="date"
				value={$currentEvent.date?.slice(0, 10) ?? 'YYYY-MM-DD'}
			/>
			<input id="event-type" type="text" list="types" value={$currentEvent.type ?? ''} />
			<input
				id="event-name"
				type="text"
				name="name"
				placeholder="Name"
				value={$currentEvent.name}
			/>
			<datalist id="types">
				<option value="">Type</option>
				<option value="Holiday">Holiday</option>
				<option value="Birthday">Birthday</option>
				<option value="Anniversary">Anniversary</option>
			</datalist>
			<button type="button" on:click={saveEventChanges}>Save</button>
		</div>
		<div class="image-input" style="background-image: url({currentImage});">
			<Dropzone
				accept="image/*"
				multiple={false}
				containerStyles={`;
        padding: 0;
        height: 196px;
        width: 196px;
        background-color:var(--background-color);
        `}
				on:drop={handleFilesSelect}
			/>
		</div>
	</form>
</div>

<style>
	form {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}

	/* put .text-input into a vertical list */
	.text-input {
		display: flex;
		flex-direction: column;
	}

	/* form elemenst that aren't images are 1rem height*/
	.text-input input {
		height: 2rem;
	}

	/* set .image-input backgound image to currentEvent.image */
	.image-input {
		background-size: cover;
		background-position: center;
		height: 200px;
		width: 200px;
	}
</style>
