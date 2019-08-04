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
        "message": "Alster",
        "iconSize": [30, 30]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.997649,
          53.557344
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "message": "Elbphilharmonie",
        "iconSize": [30, 30]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.984198,
          53.541267
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "message": "Rathaus/ Townhall",
        "iconSize": [30, 30]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.992061,
          53.550252
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "message": "Planten un Bloomen",
        "iconSize": [30, 30]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.982028,
          53.560427
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "message": "Elbstrand / Elb Beach",
        "iconSize": [30, 30]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.904346,
          53.544347
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "message": "Jungfernstieg",
        "iconSize": [30, 30]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.991770,
          53.553800
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "message": "Reeperbahn",
        "iconSize": [30, 30]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.962951,
          53.549684
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "message": "Hamburg Dungeon",
        "iconSize": [30, 30]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.989483,
          53.543785
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "message": "Hamburger DOM",
        "iconSize": [30, 30]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.968168,
          53.553405
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "message": "Landungsbrücken",
        "iconSize": [30, 30]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.968205,
          53.545781
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "message": "Speicherstadt",
        "iconSize": [30, 30]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.994603,
          53.544438
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "message": "Fischmarkt",
        "iconSize": [30, 30]
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          9.933653,
          53.544833
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
