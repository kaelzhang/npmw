#!/usr/bin/env node

var semver = require('semver');

module.exports = function(name, version, callback) {
    this.commands.view([ name + "@" + version ], function(error, data) {
        
    });

};
