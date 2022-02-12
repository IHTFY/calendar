<script>
	import { currentEvent } from '$lib/stores.js';

	export let date;
	export let type;
	export let name;
	export let image;
</script>

<tr
	on:click={() =>
		currentEvent.set({
			date: date,
			type: type,
			name: name,
			image: image,
			// message: message, //TODO Add display text
		})}
>
	<td
		>{new Date(date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		})}</td
	>
	<td>{type}</td>
	<td>{name}</td>
	<td><img src={image} alt={name} /></td>
</tr>

<style>
	tr:not(:last-child) {
		border-bottom: 1px solid var(--accent-color);
	}

	td:last-child {
		text-align: center;
	}

	img {
		max-width: 100px;
		max-height: 100px;
	}
</style>
