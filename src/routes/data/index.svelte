<script context="module">
	import { browser } from '$app/env';
	import Dropzone from 'svelte-file-dropzone';
	// import Crud from '$lib/Crud.svelte';
	import Event from '$lib/event/Event.svelte';
	import holidaysForYear from '$lib/holidays';
	import { database } from '$lib/stores.js';

	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = false;

	let files = {
		accepted: [],
		rejected: [],
	};

	function handleFilesSelect(e) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
		let file = files.accepted[0];
		const reader = new FileReader();
		reader.onload = event => {
			database.update(db => {
				db[0].image = event.target.result;
				return db;
			});
		};
		reader.readAsDataURL(file);
	}

	let columns = ['Date', 'Type', 'Name', 'Image'];
	let usHolidays = holidaysForYear;
	let birthdays = [
		{
			date: '1960-01-02 00:00:00',
			type: 'Birthday',
			name: 'Dad',
			image: 'https://picsum.photos/100/100',
		},
		{
			date: '1961-03-04 00:00:00',
			type: 'Birthday',
			name: 'Mom',
			image: 'https://picsum.photos/100/100',
		},
		{
			date: '1962-05-06 00:00:00',
			type: 'Birthday',
			name: 'Zoey',
			image: 'https://picsum.photos/100/100',
		},
		{
			date: '1963-07-08 00:00:00',
			type: 'Birthday',
			name: 'Frankie',
			image: 'https://picsum.photos/100/100',
		},
	];
	let anniversaries = [
		{
			date: '1961-09-10 00:00:00',
			type: 'Anniversary',
			name: 'Mom & Dad',
			image: 'https://picsum.photos/100/100',
		},
		{
			date: '1910-11-12 00:00:00',
			type: 'Anniversary',
			name: 'Aunt & Uncle',
			image: 'https://picsum.photos/100/100',
		},
	];

	let events = [...usHolidays, ...birthdays, ...anniversaries];

	database.set(events);

	// compare in 2022 which is a leap year
	events.sort((a, b) => {
		const aDate = a.date.replace(/^(\d{4})/, '2022');
		const bDate = b.date.replace(/^(\d{4})/, '2022');
		return new Date(aDate) - new Date(bDate);
	});
</script>

<svelte:head>
	<title>Data</title>
</svelte:head>

<div class="content">
	<h1>Data</h1>
	<p>Upload Images</p>

	<button on:click={() => console.log(files)}>Print</button>

	<Dropzone on:drop={handleFilesSelect} />
	<ol>
		{#each files.accepted as item}
			<li>{item.name}</li>
		{/each}
	</ol>

	<h1>Holidays</h1>

	<!-- a table of holidays and birthdays -->
	<table>
		<thead>
			{#each columns as column}
				<th>{column}</th>
			{/each}
		</thead>
		<tbody>
			{#each $database as event}
				<Event {...event} />
			{/each}
		</tbody>
	</table>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}

	table {
		overflow: hidden;
		border-collapse: collapse;
		border-spacing: 0;
		font-size: 1.2rem;
		color: var(--pure-white);
	}
</style>
