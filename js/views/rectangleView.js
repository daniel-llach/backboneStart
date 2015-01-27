/*global define*/
define([
    "backbone",
    "models/rectangle"
], function (Backbone, Rectangle) {
    "use strict";

    var RectangleView = Backbone.View.extend({

        tagName: 'div',

        className: 'rectangle',

        events: {
            'mouseenter': 'move'
        },

        render: function(){
            this.setDimensions();
            this.setPosition();
            this.setColor();
            return this;
        },

        setDimensions: function(){
            this.$el.css({
                width: this.model.get('width') + '%',
                height: this.model.get('height') + 'px'
            });
        },

        setPosition: function(){
            var position = this.model.get('position');
            this.$el.css({
                left: parseInt(position.x) + '%',   // percent
                top: position.y // px
            });
        },

        setColor: function(){
            this.$el.css('background-color',this.model.get('color'));
        },

        move: function(){
            this.$el.css('left', this.$el.position().left + Math.floor( (Math.random()*600) - 300 ));
            $('#canvas').css('transform', 'perspective(2000px) rotateY(' + Math.floor( (Math.random()*90) - 45 ) + 'deg)');
        }

    });


    return RectangleView;

});
