#!/usr/bin/env node
'use strict';


var semver = require('semver');

module.exports = function(name, version, callback) {
    this.commands.view([ name + "@" + version ], function(error, data) {
        var info = {};

        // if 'E404' module is not exists
        if(error && error.code === 'E404'){
            error = null;
            data = {};
        }

        if(error){
            callback(error);
        }else{

            var versions = Object.keys(data).sort(semver.compare);

            callback(error, {
                exists: !!versions.length,
                latest: versions[versions.length - 1],
                data: data
            });
        }

    });

};
