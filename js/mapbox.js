mapboxgl.accessToken = 'pk.eyJ1IjoiZGVuaXp6ZWQiLCJhIjoiY2p5dTQyb2UyMGExNDNocDgxZ3R0YzE0YSJ9.coHuDe_l_8rWRoTBW9u8SQ';
const map = new mapboxgl.Map({
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
        "message": "alster"
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
        "message": "elbphilharmonie"
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
        "message": "rathaus"
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
        "message": "planten-un-bloomen"
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
        "message": "elbstrand"
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
        "message": "jungfernstieg"
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
        "message": "reeperbahn"
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
        "message": "hamburg-dungeon"
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
        "message": "hamburger-dom"
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
        "message": "landungsbrücken"
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
        "message": "speicherstadt"
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
        "message": "fischmarkt"
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

// CREATE AND SET MAP MARKERS
geoJson.features.forEach(function(marker) {
  let locationName = marker.properties.message;
  let el = document.createElement('div');
  el.className = 'marker';
  el.className = locationName;
  el.style.backgroundImage = 'url("../../assets/map-marker.png")';
  el.style.width = '30px';
  el.style.height = '30px';
  el.style.top = '-13px';

  // EVENT FOR INFO-BOX
  el.addEventListener('click', function() {
    window.alert(marker.properties.message);
  });

  // ADD MARKERS TO MAP
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
});

// FLY TO LOCATION FUNCTION
function flyToLocation(selector, lng, lat) {
  document.querySelector(selector).addEventListener('click', () => {
    map.flyTo({
      center: [
        lng,
        lat
      ],
      zoom: 15,
    })
  });
}

console.log(geoJson);
flyToLocation('.btn-alster', geoJson.features[0].geometry.coordinates[0], geoJson.features[0].geometry.coordinates[1]);
