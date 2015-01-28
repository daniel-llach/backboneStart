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

        initialize: function(){
            this.listenTo(this.model,'change:position',this.setCurrentPosition);
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
            this.model.move();
            this.rotateCanvas();
        },

        setCurrentPosition: function(){
            var currentPosX = this.model.get('position').x + '%';
            this.$el.css('left', currentPosX); // mueve a nueva posición en X
        },

        rotateCanvas: function(){
            // gira el canvas en ejeY
            $('#canvas').css('transform', 'perspective(2000px) rotateY(' + Math.floor( (Math.random()*90) - 45 ) + 'deg)');
        }

    });

    return RectangleView;

});
