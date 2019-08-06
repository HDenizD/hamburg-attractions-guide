mapboxgl.accessToken = 'pk.eyJ1IjoiZGVuaXp6ZWQiLCJhIjoiY2p5dTQyb2UyMGExNDNocDgxZ3R0YzE0YSJ9.coHuDe_l_8rWRoTBW9u8SQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/denizzed/cjyu2kr5e0rqq1cry6wmo3rhg',
  center: [9.9432218, 53.5470901],
  zoom: 11.41,
});

var geoJson = {
  "type": "FeatureCollection",
  "features": [{
      "type": "Feature",
      "properties": {
        "message": "alster",
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
        "message": "elbphilharmonie",
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
        "message": "rathaus",
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
        "message": "planten-un-bloomen",
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
        "message": "elbstrand",
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
        "message": "jungfernstieg",
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
        "message": "reeperbahn",
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
        "message": "hamburg-dungeon",
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
        "message": "hamburger-dom",
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
        "message": "landungsbrücken",
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
        "message": "speicherstadt",
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
        "message": "fischmarkt",
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


geoJson.features.forEach(function(marker) {
  let locationName = marker.properties.message;
  // create a DOM element for the marker
  var el = document.createElement('div');
  el.className = 'marker';
  el.className = locationName;
  // el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
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
