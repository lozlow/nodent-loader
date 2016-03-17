# nodent-loader

## Purpose
nodent-loader will transform ES7 async/await statements used in source files loaded by webpack using [nodent](https://github.com/MatAtBread/nodent) to produce code that is suitable for consumption by other loaders (e.g. babel) or for webpack output.

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

## Configuration
A query can be specified which will pass the options to the nodent compiler.

The can be defined by following the format (specified by loader-utils):

````
null                   -> {}
?                      -> {}
?flag                  -> { flag: true }
?+flag                 -> { flag: true }
?-flag                 -> { flag: false }
?xyz=test              -> { xyz: "test" }
?xyz[]=a               -> { xyz: ["a"] }
?flag1&flag2           -> { flag1: true, flag2: true }
?+flag1,-flag2         -> { flag1: true, flag2: false }
?xyz[]=a,xyz[]=b       -> { xyz: ["a", "b"] }
?a%2C%26b=c%2C%26d     -> { "a,&b": "c,&d" }
?{json:5,data:{a:1}}   -> { json: 5, data: { a: 1 } }
````

#### E.g.
````
{
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'nodent-loader?+promises,+wrapAwait',
				exclude: /(node_modules)/,
			}
		]
	}
}
````
or by passing an object to the `query` property
````
{
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'nodent-loader',
				exclude: /(node_modules)/,
				query: {
					promises: true,
					wrapAwait: true
				}
			}
		]
	}
}
````
### Todo
- [ ] Add tests
