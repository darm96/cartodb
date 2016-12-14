/*  - Mapa positron
	- Open source by CartoDB	
	*/
function positron(){
	var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
		attribution: '&copy; <a target="_black" href="https://www.civico.com">CÍVICO</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>'
	});
	var map = L.map('map', {
		scrollWheelZoom: false,
		center: [25.8888782,-28.322754],
		zoom: 3
	});
	map.addLayer(layer);
}


/* Cargar mapa por defecto*/
positron();

/* Cargar Layers */

	/* Bogotá */
function mapBogota(layer){	
		poligono = L.geoJson(layer,{style:css_poligono_localidades}).addTo(map);	
}
	/* Ciudad de méxico */
function mapMexicoDF(layer){

}
	/* Santiago de chile */
function mapSantiagoDC(layer){
	
}

	/* Seleccionar layer para  */
function positronLayers(city,src){
	switch(city){
		case "Bogotá":
			mapBogota(src);
			break;
		case "DF":
			break;
		case "Santiago DC":
			break;
	}
}


// Captura solo el layer
// map.fitBounds(poligono_localidades.getBound());