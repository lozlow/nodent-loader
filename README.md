# nodent-loader

## Purpose
nodent-loader will transform ES7 async/await statements used in source files loaded by webpack using [nodent](https://github.com/MatAtBread/nodent) to produce code that is suitable for consumption by other loaders (e.g. babel) or for webpack output.

Currently it is not configurable via query params.

## Typical usage
In your webpack.config.js:
````
{
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'nodent-loader',
				exclude: /(node_modules)/
			}
		]
	}
}
````
