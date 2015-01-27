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
            var position = this.model.get('position');  // toma atributo posicion del modelo
            var currentPosX = parseInt( parseInt(position.x) + Math.floor( (Math.random()*30) - 15 ) ) + '%' ; // calcula nueva posición y setea en porcentajes
            var currentPosY = parseInt(position.y); // calcula nueva posición en eje y en pixeles
            var currentPosXModel = parseInt(currentPosX); // setea numero para modelo

            this.model.set('position', { x: currentPosXModel, y: currentPosY } ); // actualiza atributos X e Y en modelo
            this.$el.css('left', currentPosX); // mueve a nueva posición en X

            console.log(currentPosX);
            $('#canvas').css('transform', 'perspective(2000px) rotateY(' + Math.floor( (Math.random()*90) - 45 ) + 'deg)');


        }

    });


    return RectangleView;

});
