function selectCity(city){
	switch(city){
		case "Bogotá":
			src = "../../data/colombia/bogota/localidades/poligonos.geojson"
			break;
		case "DF":		
			src = "../../data/mexico/df/delegaciones/poligonos.geojson"
			break;
		case "Santiago DC":
			src = ""
			break;
		default: 
		messageError('selectCity');	
	}	
	positronLayers(city,src);
}