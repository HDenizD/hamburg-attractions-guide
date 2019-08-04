mapboxgl.accessToken = 'pk.eyJ1IjoiZGVuaXp6ZWQiLCJhIjoiY2p5dTQyb2UyMGExNDNocDgxZ3R0YzE0YSJ9.coHuDe_l_8rWRoTBW9u8SQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/denizzed/cjyu2kr5e0rqq1cry6wmo3rhg',
  center: [10.0009, 53.5476],
  zoom: 11.41,
});

var geojson = {
  "type": "FeatureCollection",
  "features": [{
      "type": "Feature",
      "properties": {
        "message": "Foo",
        "iconSize": [60, 60]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.9946585,
          53.5542614

        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "message": "Bar",
        "iconSize": [50, 50]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.9946585,
          53.5542614
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "message": "Baz",
        "iconSize": [40, 40]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.9946585,
          53.5542614
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "message": "Bar",
        "iconSize": [50, 50]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.9946585,
          53.5542614
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "message": "Bar",
        "iconSize": [50, 50]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.9946585,
          53.5542614
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "message": "Bar",
        "iconSize": [50, 50]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.9946585,
          53.5542614
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "message": "Bar",
        "iconSize": [50, 50]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.9946585,
          53.5542614
        ]
      }
    },
  ]
};

geojson.features.forEach(function(marker) {
  // create a DOM element for the marker
  var el = document.createElement('div');
  el.className = 'marker';
  el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
  el.style.width = marker.properties.iconSize[0] + 'px';
  el.style.height = marker.properties.iconSize[1] + 'px';

  el.addEventListener('click', function() {
    window.alert(marker.properties.message);
  });

  // add marker to map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
});


// type: 'Feature',
//   geometry: {
//     type: 'Point',
//     coordinates: [53.557377, 9.997655]
//   }
