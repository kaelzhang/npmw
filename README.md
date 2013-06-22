# npmw

> A npm wrapper for programming

## Getting Started
You may install this module with this command:

```bash
npm install npmw --save
```

### Overview
`npm` has no support for multi registries yet. `npmw` is a design wrapper for programming, including some frequent utility methods


### Usage

```js
npmw(options).<command>(arguments);
new npmw(options).<command>(arguments);
```

### Options

#### options.registry
Type: `string`

Default: `'http://registry.npmjs.org'`

NPM registry server. Useful if you use your private npm server.

Notice that, `npm` doesn't support connecting multiple servers simultaneously.


### Methods
You can use all `npm.commands` method with `npmw().<command>()`. Besides, there're other useful methods:

#### .exists(name, version, callback);

`callback` has two arguments `error`, `data`

##### data
Type: `Object`

data.exists: `boolean` whether module `<name>@<version>` is exists

data.versions: `Array.<string>` available versions

data.latest: `string` latest version

data.data: `Object` original server data


### Usage Examples

```js
var npmw = require('npmw');
var npm = npmw({
    registry: 'http://registry.yourserver.local'
});

npm.exists('npmw', '~0.0.0', function(error, data){
	if(!error && data.exists){
		console.log('Module npmw@~0.0.0 exists and the latest version is "' + data.latest + '"');
	}
});
```