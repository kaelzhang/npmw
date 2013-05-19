#!/usr/bin/env node


#!/usr/bin/env node

var npm = require('npm');

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


// npmw_proto.load = function(options, callback) {
    // if (arguments.length === 1 && typeof options === "function"){
    //     callback = options; 
    //     options = {};
    // }

    // callback = callback || function() {};
    // options = options || {};

    // var key;
    // var setting_key;

    // // Overrides the default config with CORTEX_NPM_CONFIG
    // for(key in ENUM_SETTING_MAP) {
    //     setting_key = ENUM_SETTING_MAP[key];

    //     if( setting_key in npmw.SETTINGS ){
    //         options[key] = npmw.SETTINGS[setting_key];
    //     }
    // }

    // npm.load.call(this, options, callback);
// };

Object.keys(npm.commands, function(command, method) {
     npmw_proto[command] = function(args, callback) {
        callback = callback || NOOP;

        // load 
        this.load(this.options, function(error) {
            npm.commands[commands](args, callback);
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

