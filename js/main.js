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
    "backbone",
    "models/rectangle",
    "views/rectangleView"
], function (Backbone, Rectangle, RectangleView) {

    var models = [
            new Rectangle({
                width: 60,
                height: 200,
                position: {
                    x: 13,
                    y: 150
                },
                color: '#ff0000'
            }),
            new Rectangle({
                width: 23,
                height: 500,
                position: {
                    x: 26,
                    y: 75
                },
                color: '#00ff00'
            }),
            new Rectangle({
                width: 10,
                height: 20,
                position: {
                    x: 2,
                    y: 500
                },
                color: '#0000ff'
            }),
            new Rectangle({
                width: 5,
                height: 40,
                position: {
                    x: 8,
                    y: 400
                },
                color: '#ffff00'
            }),
            new Rectangle({
                width: 21,
                height: 20,
                position: {
                    x: 15,
                    y: 100
                },
                color: '#00ffff'
            })

    ];

    _(models).each(function(model){
        $('div#canvas').append(new RectangleView({model: model}).render().el);
    });
});
