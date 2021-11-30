# Libreria-SPA-CIOM
Libreria creada en JavaScript para crear pagina Single Page Application o mejor conocias como SPA


Ejemplo:

Crear un archivo llamado Rutas.js con la siguiente estructura
(function(window, document){
    libreria.getID("id_contenedor").enrutar()
    .ruta("ruta_carga", "ruta_archivo", null)
})(window, document);

Ejemplo mas claro:

(function(window, document){
    libreria.getID("vistas").enrutar()
    .ruta("/", "vistas/inicio.html", null)
})(window, document);