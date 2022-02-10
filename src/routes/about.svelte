<script context="module">
	import { browser, dev } from '$app/env';

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
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<FilePond
		bind:this={pond}
		name={filename}
		oninit={handleInit}
		onaddfile={handleAddFile}
		allowMultiple={true}
	/>

	<button on:click={() => console.log(pond.getFiles())}>Files</button>

	<h1>About this app</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<!-- TODO lose the @next! -->
	<pre>npm init svelte@next</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/todos">TODOs</a> page illustrates SvelteKit's data loading and form handling. Try using
		it with JavaScript disabled!
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
