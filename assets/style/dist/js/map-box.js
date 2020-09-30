var cities = L.layerGroup();

var myIcon = L.icon({
    iconUrl: 'map-pin.png',
    iconSize: [41, 41],
    iconAnchor: [16, 38],
    popupAnchor: [-1, -30],
    shadowSize: [68, 95],
    shadowAnchor:[-1, -60]
});

L.marker([28.644800,77.216721],{icon: myIcon}).bindPopup('This is Littleton, CO.').addTo(cities)
L.marker([32.110542, 76.536224],{icon: myIcon}).bindPopup('This is Denver, CO.').addTo(cities),
L.marker([26.849684, 75.769188],{icon: myIcon}).bindPopup('This is Aurora, CO.').addTo(cities),
L.marker([9.931233, 76.267303],{icon: myIcon}).bindPopup('This is Golden, CO.').addTo(cities);


var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYW1hbnZvbHNvbCIsImEiOiJjang1b2ZqamswM3RtNGRxdTh0b3k3eTA4In0.JPJwyh9ipPlPN0G018Oh8A';

var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
    streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});

var mapid = L.map('mapid', {
    center: [20.593683, 78.962883],
    zoom: 4,
    layers: [streets, cities],
    styles:'//styles/amanvolsol/cjx5pu8be0bbf1cnmpect2kjc',
});

var baseLayers = {
    "Grayscale": grayscale,
    "Streets": streets
};

var overlays = {
    "Cities": cities
};

L.control.layers(baseLayers, overlays).addTo(mapid);