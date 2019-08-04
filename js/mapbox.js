mapboxgl.accessToken = 'pk.eyJ1IjoiZGVuaXp6ZWQiLCJhIjoiY2p5dTQyb2UyMGExNDNocDgxZ3R0YzE0YSJ9.coHuDe_l_8rWRoTBW9u8SQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/denizzed/cjyu2kr5e0rqq1cry6wmo3rhg',
center: [10.0009,53.5476],
zoom: 11.41,
});

const mapLeaflet = L.mapbox.map('map-leaflet')
  .setView([37.8, -96], 4)
  .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/light-v10'));

L.marker([53.557377, 9.997655]).addTo(mapLeaflet);

var hamburgAttractions = [
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [53.557377, 9.997655]
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-122.413682, 37.775408]
    }
  }
];
