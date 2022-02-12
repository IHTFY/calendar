<script>
	import Event from '$lib/events/Event.svelte';

	let columns = ['Date', 'Type', 'Name', 'Image'];

	export let entries;
</script>

<!-- a table of holidays and birthdays -->
<table>
	<thead>
		{#each columns as column}
			<th>{column}</th>
		{/each}
	</thead>
	<tbody>
		{#each entries as event}
			<Event {...event} />
		{/each}
	</tbody>
</table>

<style>
	table {
		overflow: hidden;
		border-collapse: collapse;
		border-spacing: 0;
		font-size: 1.2rem;
		color: var(--pure-white);
	}
</style>
