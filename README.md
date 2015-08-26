# vue-chunk

Split an array into chunks using this custom filter for Vue.js.

## Getting Started

Available through npm and bower.

```bash
$ npm install vue-chunk --save
```

```bash
$ bower install vue-chunk --save
```

### Direct include

If you are using Vue globally, just include vue-chunk.js, and it will automatically install the chunk filter.

### CommonJS

```js
Vue.use(require('vue-chunk')); // Filter is now available globally
```

## Usage

Meant to be used with v-repeat, this filter splits the array of data into smaller chunks of data. It accepts one argument, which specifies the size of the chunks of data. For example...

```html
<div v-repeat="row: rows | chunk 4">
	<div v-repeat="item: row">
		{{ item }}
	</div>
</div>
```

If you are confused, take a look at the example for a better understanding.