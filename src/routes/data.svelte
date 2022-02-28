<script>
	import { browser, dev } from '$app/env';
	import holidaysForYear from '$lib/holidays';
	import { database } from '$lib/stores.js';
	import EventEditor from '$lib/events/EventEditor.svelte';
	import EventTable from '$lib/events/EventTable.svelte';
	import { onMount } from 'svelte';
	import { db } from '$lib/db';

	export const hydrate = dev;
	export const router = browser;

	let usHolidays = holidaysForYear;
	let birthdays = [
		{
			date: '1960-01-02T00:00:00.000Z',
			type: 'Birthday',
			name: 'Dad',
			image: 'https://picsum.photos/100/100',
		},
		{
			date: '1961-03-04T00:00:00.000Z',
			type: 'Birthday',
			name: 'Mom',
			image: 'https://picsum.photos/100/100',
		},
		{
			date: '1962-05-06T00:00:00.000Z',
			type: 'Birthday',
			name: 'Zoey',
			image: 'https://picsum.photos/100/100',
		},
		{
			date: '1963-07-08T00:00:00.000Z',
			type: 'Birthday',
			name: 'Frankie',
			image: 'https://picsum.photos/100/100',
		},
	];
	let anniversaries = [
		{
			date: '1961-09-10T00:00:00.000Z',
			type: 'Anniversary',
			name: 'Mom & Dad',
			image: 'https://picsum.photos/100/100',
		},
		{
			date: '1910-11-12T00:00:00.000Z',
			type: 'Anniversary',
			name: 'Aunt & Uncle',
			image: 'https://picsum.photos/100/100',
		},
	];

	onMount(() => {
		let events = [...usHolidays, ...birthdays, ...anniversaries].map(event => ({
			...event,
			id: window.crypto.randomUUID(),
		}));

		// compare in 2020 which is a leap year
		events.sort((a, b) => {
			const aDate = a.date.replace(/^(\d{4})/, '2020');
			const bDate = b.date.replace(/^(\d{4})/, '2020');
			return new Date(aDate) - new Date(bDate);
		});

		database.set(events);

		// TODO: remove this
		indexedDB.deleteDatabase('myDatabase');
		db.events.bulkPut(events);
	});
</script>

<svelte:head>
	<title>Data</title>
</svelte:head>

<div class="content">
	<h1>Event Editor</h1>
	<EventEditor />

	<h1>Holidays</h1>
	<EventTable entries={$database} />
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
