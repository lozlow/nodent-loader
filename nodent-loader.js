'use strict';

const nodent = require('nodent')();

module.exports = function nodentCompile(content, sourceMap) {
	const callback = this.async();
	const compiled = nodent.compile(content, this.resourcePath, sourceMap, { sourcemap: !!this._compiler.devtool });
	callback(null, compiled.code, compiled.sourcemap);
};
