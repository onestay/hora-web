module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/strongly-recommended',
		'@vue/airbnb',
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': 'off',
		'indent': ['error', 'tab'],
		'no-plusplus':'off',
		'class-methods-use-this': 'off',
		'no-param-reassign': 'off',
		'vue/html-indent': ['error', 'tab'],
		'vue/max-attributes-per-line': 'off',
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
};
