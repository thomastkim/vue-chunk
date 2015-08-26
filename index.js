exports.install = function(Vue) {

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

		for (var i = 0; i < array.length; i += chunkLength) {
		    totalChunks.push(array.slice(i, i + chunkLength));
		}

		return totalChunks;
	});

};