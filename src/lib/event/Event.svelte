<script>
	export let date;
	export let type;
	export let name;
	export let image;
</script>

<tr>
	<td
		>{new Date(date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
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

	img {
		max-width: 100px;
		max-height: 100px;
	}
</style>
