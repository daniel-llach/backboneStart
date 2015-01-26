/*global require*/
"use strict";

// Require.js allows us to configure shortcut alias
require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: [
                "underscore",
                "jquery"
            ],
            exports: "Backbone"
        }
    },
    paths: {
        jquery: "../bower_components/jquery/jquery",
        underscore: "../bower_components/underscore/underscore",
        backbone: "../bower_components/backbone/backbone",
        text: "../bower_components/requirejs-text/text"
    }
});

require([
    "views/appview"
], function (AppView) {

    //var app = new AppView();

});
