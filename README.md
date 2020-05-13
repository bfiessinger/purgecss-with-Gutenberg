# Purgecss with Gutenberg

purgecss whitelist for the WordPress Gutenberg editor.

## Getting started

**Installation**
First install [purgecss](https://github.com/FullHuman/purgecss).

`npm i --save-dev purgecss-with-gutenberg`

## Usage
```javascript
import Purgecss from 'purgecss';
import purgecssGutenberg from 'purgecss-with-gutenberg';

const purgeCss = new Purgecss({
	whitelist: purgecssGutenberg.whitelist,
	whitelistPatterns: purgecssGutenberg.whitelistPatterns
});

const res = purgeCss.purge();
```

if you have additional classes for `whitelist` or `whitelistPattners`, you can use the spread operator:

```javascript
whitelist: [
	...purgecssGutenberg.whitelist,
	...thirdparty.whitelist,
	'my-class'
],
whitelistPatterns: [
	...purgecssGutenberg.whitelistPatterns,
	...thirdparty.whitelistPatterns,
	/^my-(class|id)$/
]
```
