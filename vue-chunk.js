;(function () {

	"use strict";

	var install = function(Vue, options) {

	    var _ = Vue.util;

		Vue.filter('chunk', function(array, length) {

			var totalChunks = [];
			var chunkLength = parseInt(length, 10);

			if (chunkLength <= 0) {

				("development") !== 'production' && _.warn(
					'The chunk filter requires an argument defining the chunk size.'
				);

				return array;
			}

			// Loop through the data and divide it into chunks
			for (var i = 0; i < array.length; i += chunkLength) {
			    totalChunks.push(array.slice(i, i + chunkLength));
			}

			// Return the chunks of data
			return totalChunks;
		});

	};
	if(typeof exports === "object") module.exports = install;
	else if(typeof define === "function" && define.amd) define([], function() { return install; });
	else if(window.Vue) Vue.use(install);
})();