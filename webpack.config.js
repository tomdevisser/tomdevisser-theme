/**
 * External Dependencies
 */
const path = require("path");

/**
 * WordPress Dependencies
 */
const defaultConfig = require("@wordpress/scripts/config/webpack.config.js");

module.exports = {
	...defaultConfig,
	entry: {
		"toms-styles": path.resolve(__dirname, "/src/scss", "styles.scss"),
		"toms-scripts": path.resolve(__dirname, "/src/js", "scripts.js"),
		"themejson-generator-script": path.resolve(
			__dirname,
			"/blocks/themejson-generator",
			"script.js"
		),
		"themejson-generator": path.resolve(
			__dirname,
			"/blocks/themejson-generator",
			"index.js"
		),
	},
	output: {
		path: path.resolve(__dirname, "build"),
	},
};
