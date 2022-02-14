<script context="module">
	import { browser, dev } from '$app/env';
	import holidaysForYear from '$lib/holidays';
	import { database } from '$lib/stores.js';
	import EventEditor from '$lib/events/EventEditor.svelte';
	import EventTable from '$lib/events/EventTable.svelte';

	export const hydrate = dev;
	export const router = browser;

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

	let events = [...usHolidays, ...birthdays, ...anniversaries].map(event => ({
		...event,
		id: window.crypto.randomUUID(),
	}));

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
