#!/usr/bin/env node
'use strict';


var npm = require('npm');
var path = require('path');

function NOOP(){};


// Make a constructor,
// waiting for the day npm support multi registeries.
// Maybe the day will never come. Counting on you @isaacs
function npmw(options) {
    if(this instanceof npmw){
        this.options = options;
    
    // for those stubborn guys who hate `new` keywords like poison
    }else{
        return new npmw(options);
    }
};


var npmw_proto = npmw.prototype;


// So, we can use `npmw().<command>(...)`  instead of `npm.commands.<command>(...)`
Object.keys(npm.commands).forEach(function(command, method) {
     npmw_proto[command] = function() {
        var args = arguments;

        // load 
        npm.load(this.options, function(error) {
            npm.commands[command].apply(this, args);
        });
     }
});


var command_list = [
    'exists',
];


command_list.forEach(function(command) {
    npmw_proto[command] = require( path.join(__dirname, command) );
});


// wrap the npm
npmw.__proto__ = npm;


module.exports = npmw;

