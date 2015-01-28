/*global define*/
define([
    "backbone",
    "text!templates/rectangle.html"
], function (Backbone, rectangleTemplate) {
    "use strict";

    var RectangleView = Backbone.View.extend({

        tagName: 'div',

        className: 'rectangle',

        template: _.template(rectangleTemplate),

        events: {
            'mouseenter': 'move'
        },

        initialize: function(){
            this.listenTo(this.model,'change:position',this.setCurrentPosition);

        },

        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
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
            this.$el.html( this.template(this.model.toJSON()) ); // actualiza información del template
        },

        rotateCanvas: function(){
            // gira el canvas en ejeY
            var randomDeg = Math.floor( (Math.random()*90) - 45 ) + 'deg';
            $('#canvas').css('transform', 'perspective(2000px) rotateY(' + randomDeg + ')');
        }

    });

    return RectangleView;

});
