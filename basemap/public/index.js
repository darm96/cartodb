/* Instanciar Modulos */	
var server = require("../config/server");
var router = require("../config/router");
var requestHandlers = require("../config/requestHandlers");

	// Manipulador de peticiones
var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

/* Ejecutar */
	// Iniciar el servidor
server.iniciar(router.route,handle);