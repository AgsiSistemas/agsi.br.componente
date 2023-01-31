module.exports = {
  stories: ['../src/**/*.stories.js','../src/**/*.stories.jsx'],
	addons: [
		'@storybook/addon-actions',
	],
	features: {
		babelModeV7: true,
		emotionAlias: false,
	},
	webpackFinal: async ( config ) => {
		config.module.rules.push( {
			test: /\.mjs$/,
			include: /node_modules/,
			type: 'javascript/auto',
		} );
		return config;
	},
};