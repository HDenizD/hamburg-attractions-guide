mapboxgl.accessToken = 'pk.eyJ1IjoiZGVuaXp6ZWQiLCJhIjoiY2p5dTQyb2UyMGExNDNocDgxZ3R0YzE0YSJ9.coHuDe_l_8rWRoTBW9u8SQ';
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
  center: [-77.38, 39], // starting position
  zoom: 3 // starting zoom
});
