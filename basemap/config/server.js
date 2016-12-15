/* Instanciar modulos de servidor */
var http = require("http");
var url = require("url");


/* Inicia la petición */
function iniciar(route,handle){
	// Ejecutar la petición
	function onRequest(request,response){
		// Capturar URL 
		var pathname = url.parse(request.url).pathname;
		console.log("Petición para " + pathname + " recibida");

		// Ejecutar manejador de ruta
		route(handle,pathname);

		/* Respuesta HTTP */
		// Tipo de contenido HTTP
		response.writeHead(200,{"Content-Type":"text/html"});
		// Escribir respuesta
		response.write("Welcome");

		// Fin respuesta
		response.end();	
	}

	/* Inicia el servidor */
	http.createServer(onRequest).listen(8888);
	console.log("Servidor Iniciado");
}
exports.iniciar = iniciar;
	
