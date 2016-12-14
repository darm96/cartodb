var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
attribution: '&copy; <a target="_black" href="https://www.civico.com">CÍVICO</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>'
});

var map = L.map('map', {
scrollWheelZoom: false,
center: [4.636649, -74.1318507],
zoom: 11
});
mapBog("poligono_localidades");
map.addLayer(layer);