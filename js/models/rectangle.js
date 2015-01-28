/*global define*/
define([
    "backbone"
], function (Backbone) {
    "use strict";

    var Rectangle = Backbone.Model.extend({

        move: function(){
            var position = this.get('position');  // toma atributo posicion del modelo
            var currentPosX = parseInt(position.x) + Math.floor( (Math.random()*30) - 15 ); // calcula nueva posición y setea en porcentajes
            var currentPosY = parseInt(position.y); // calcula nueva posición en eje y en pixeles

            this.set('position', { x: currentPosX, y: currentPosY } ); // actualiza atributos X e Y en modelo
        }
    });

    return Rectangle;

});
