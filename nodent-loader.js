'use strict';

const loaderUtil = require('loader-utils');
const nodent = require('nodent')();

module.exports = function nodentCompile(content, sourceMap) {
	const callback = this.async();
	const params = loaderUtil.parseQuery(this.query);
	try {
		const compiled = nodent.compile(content, this.resourcePath, sourceMap, Object.assign({ sourcemap: !!this._compiler.devtool }, params));
		callback(null, compiled.code, compiled.sourcemap);
	} catch (ex) {
		console.log('exception in nodent-loader');
		callback(ex);
	}
};
