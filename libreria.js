"use strict";
(function (window, document){
    var inicio = function(){
        var elemento = null,
        marco = null,
        rutas = {},
        controladores = {},
        controlador,
        libreria = {
            getID: function(id){
                elemento = document.getElementById(id);
                return this;
            },
            noSubmit: function(){
                elemento.addEventListener("submit", function(e){
                    e.preventDefault();
                }, false);
                return this;
            },
            enrutar: function(){
                marco = elemento;
                return this;
            },
            ruta: function(ruta, plantilla, controlador, carga){
                rutas[ruta] = {
                    "plantilla": plantilla,
                    "controlador": controlador,
                    "carga": carga
                };
                return this;
            },
            manejadorRutas: function(){
                var hash = window.location.hash.substring(1) || '/',
                destino = rutas[hash],
                xhr = new XMLHttpRequest();
                if(destino && destino.plantilla){
                    xhr.addEventListener("load", function (){
                        marco.innerHTML = this.responseText;
                    }, false);
                    xhr.open("get", destino.plantilla, true);
                    xhr.send(null);
                }else{
                    window.location.hash = "#/";
                }
            }
        };
        return libreria;
    };
    if(typeof window.libreria === "undefined"){
        window.libreria = window._ = inicio();
        window.addEventListener("load", libreria.manejadorRutas, false);
        window.addEventListener("hashchange", libreria.manejadorRutas, false);
    }
    else{
        console.log("Se Esta llamando la libreria nuevamente");
    }
})(window, document);