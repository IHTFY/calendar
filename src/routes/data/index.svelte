<script context="module">
	import { browser, dev } from '$app/env';
	import Crud from '$lib/Crud.svelte';
	import Event from '$lib/event/Event.svelte';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

	// filepond

	import FilePond, { registerPlugin, supported } from 'svelte-filepond';

	// Import the Image EXIF Orientation and Image Preview plugins
	// Note: These need to be installed separately
	// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
	import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
	import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
	import Counter from '$lib/Counter.svelte';
	import Header from '$lib/header/Header.svelte';
	import Index from '../index.svelte';
	import Layout from '../__layout.svelte';

	// Register the plugins
	registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

	// a reference to the component, used to call FilePond methods
	let pond;

	// the name to use for the internal file input
	let filename = 'filepond';

	// handle filepond events
	function handleInit() {
		console.log('FilePond has initialised');
	}

	function handleAddFile(err, fileItem) {
		console.log('A file has been added', fileItem);
	}

	let columns = ['Date', 'Type', 'Name', 'Image'];

	const usHolidays = [
		{
			date: '2022-01-01 00:00:00',
			type: 'US Holiday',
			name: "New Year's Day",
			image: 'https://picsum.photos/100/100'
		},
		{
			date: '2022-02-14 00:00:00',
			type: 'US Holiday',
			name: "Valentine's Day",
			image: 'https://picsum.photos/100/100'
		},
		{
			date: '2022-04-21 00:00:00',
			type: 'US Holiday',
			name: 'Easter',
			image: 'https://picsum.photos/100/100'
		},
		{
			date: '2022-05-25 00:00:00',
			type: 'US Holiday',
			name: 'Memorial Day',
			image: 'https://picsum.photos/100/100'
		},
		{
			date: '2022-07-04 00:00:00',
			type: 'US Holiday',
			name: 'Independence Day',
			image: 'https://picsum.photos/100/100'
		},
		{
			date: '2022-09-07 00:00:00',
			type: 'US Holiday',
			name: 'Labor Day',
			image: 'https://picsum.photos/100/100'
		},
		{
			date: '2022-11-26 00:00:00',
			type: 'US Holiday',
			name: 'Thanksgiving',
			image: 'https://picsum.photos/100/100'
		},
		{
			date: '2022-12-25 00:00:00',
			type: 'US Holiday',
			name: 'Christmas',
			image: 'https://picsum.photos/100/100'
		}
	];

	let birthdays = [
		{
			date: '1960-01-02 00:00:00',
			type: 'Birthday',
			name: 'Dad',
			image: 'https://picsum.photos/100/100'
		},
		{
			date: '1961-03-04 00:00:00',
			type: 'Birthday',
			name: 'Mom',
			image: 'https://picsum.photos/100/100'
		},
		{
			date: '1962-05-06 00:00:00',
			type: 'Birthday',
			name: 'Zoey',
			image: 'https://picsum.photos/100/100'
		},
		{
			date: '1963-07-08 00:00:00',
			type: 'Birthday',
			name: 'Frankie',
			image: 'https://picsum.photos/100/100'
		}
	];

	const anniversaries = [
		{
			date: '1961-09-10 00:00:00',
			type: 'Anniversary',
			name: 'Mom & Dad',
			image: 'https://picsum.photos/100/100'
		},
		{
			date: '1910-11-12 00:00:00',
			type: 'Anniversary',
			name: 'Aunt & Uncle',
			image: 'https://picsum.photos/100/100'
		}
	];

	let events = [...usHolidays, ...birthdays, ...anniversaries];

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

	<FilePond
		bind:this={pond}
		name={filename}
		oninit={handleInit}
		onaddfile={handleAddFile}
		allowMultiple={true}
	/>

	<button on:click={() => console.log(pond.getFiles())}>Files</button>

	<h1>Holidays</h1>

	<!-- a table of holidays and birthdays -->
	<table>
		<thead>
			{#each columns as column}
				<th>{column}</th>
			{/each}
		</thead>
		<tbody>
			{#each events as event}
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
