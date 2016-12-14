function mapBog(layer){
	if(layer =="poligono_localidades"){
		poligono = L.geoJson(bog_localidades_poligonos,{style:css_poligono_localidades}).addTo(map);	
	}
}

// Captura solo el layer
// map.fitBounds(poligono_localidades.getBound());