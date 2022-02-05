import adapter from '@sveltejs/adapter-static'; // was adapter-auto

const dev = process.env.NODE_ENV === 'development';

const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		})
	}
};

export default config;
