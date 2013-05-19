
var mod = require('./mod');

mod.flag = 1;
console.log(mod.flag, mod.getFlag());


var vm = require('vm');
var fs = require('fs');

var code = fs.readFileSync('./sample.js').toString();

console.log('code', code);

var a = 3;

// var script = vm.createScript('a = 1;');
var script = vm.createScript(code);
var sandbox = vm.createContext({});

var mod_1 = script.runInNewContext( {require: require} );

// console.log(a, mod_1.flag, )

mod_1.flag = 10;
mod.flag = 12;

console.log(mod_1.flag);
