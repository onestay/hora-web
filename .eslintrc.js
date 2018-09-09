module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
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
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
};
