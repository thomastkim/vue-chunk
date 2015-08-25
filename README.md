# vue-chunk

Split an array into chunks using this custom filter for Vue.js.

## Getting Started

If you are using Vue globally, just include vue-chunk.js, and it will automatically install the chunk filter.

## Usage

Meant to be used with v-repeat, this filter splits an array of data into smaller chunks of data. It accepts one argument, which specifies the size of the chunks of data. For those of you with a PHP background, think of this as extremely similar to `array_chunk()`.

```html
<div v-repeat="row: rows | chunk 4">
	<div v-repeat="item: row">
		{{ item }}
	</div>
</div>
```