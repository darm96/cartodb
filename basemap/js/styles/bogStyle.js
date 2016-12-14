function css_poligono_color(name){
	if(name == "Kennedy"){
		return '#FFCC00';
	}else if(name == "Engativá"){
		return '#FF2900';
	}else if(name == "Suba"){
		return '#136400';
	}else if(name == "Usaquén"){
		return '#081B47';
	}else if(name == "Chapinero"){
		return '#229A00';
	}else if(name == "Barrios Unidos"){
		return '#3B007F';
	}else if(name == "Fontibón"){
		return '#FDBF6F';
	}else if(name == "Bosa"){
		return '#FF6600';
	}else if(name == "Puente Aranda"){
		return '#5CA2D1';
	}else if(name == "Sante Fe"){
		return '#012700';
	}else if(name == "Teusaquillo"){
		return '#229A00';
	}else if(name == "Los Mártires"){
		return '#A53ED5';
	}else if(name == "Ciudad Bolívar"){
		return '#FF2900';
	}else if(name == "Antonio Nariño"){
		return '#2E5387';
	}else if(name == "Rafael Uribe Uribe"){
		return '#2E5387';
	}else if(name == "Soacha"){
		return '#FFA300';
	}else if(name == "Tunjuelito"){
		return '#F84F40';
	}else if(name == "San Cristobal"){
		return '#0F3B82';
	}else if(name == "Usme"){
		return '#7B00B4';
	}else if(name == "La Candelaria"){
		return '#081B47';
	}else{
		return '#665e5e';
	}
}

function css_poligono_localidades(feature){
	return{
		fillColor: css_poligono_color(feature.properties.name),
		weigth: 2,
		opacity: 1,
		color: 'white',
		dashArray: 3,
		fillOpacity: 0.7
	}	
}
