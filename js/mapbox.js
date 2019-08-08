mapboxgl.accessToken = 'pk.eyJ1IjoiZGVuaXp6ZWQiLCJhIjoiY2p5dTQyb2UyMGExNDNocDgxZ3R0YzE0YSJ9.coHuDe_l_8rWRoTBW9u8SQ';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/denizzed/cjyu2kr5e0rqq1cry6wmo3rhg',
  center: [9.9432218, 53.5470901],
  zoom: 11.41,
});

// LOCATIONS: LNG / LAT
const lngLatLocation = {
  alster: [
    9.997649,
    53.557344
  ],
  elbphilharmonie: [
    9.984198,
    53.541267
  ],
  rathaus: [
    9.992061,
    53.550252
  ],
  plantenUnBloomen: [
    9.982028,
    53.560427
  ],
  elbstrand: [
    9.904346,
    53.544347
  ],
  jungfernstieg: [
    9.991770,
    53.553800
  ],
  reeperbahn: [
    9.962951,
    53.549684
  ],
  hamburgDungeon: [
    9.989484,
    53.543938
  ],
  hamburgDom: [
    9.968232,
    53.554157
  ],
  landungsbruecken: [
    9.968205,
    53.545781
  ],
  speicherstadt: [
    9.994603,
    53.544438
  ],
  fischmarkt: [
    9.933653,
    53.544833
  ],
}

const geoJson = {
  "type": "FeatureCollection",
  "features": [{
      "type": "Feature",
      "properties": {
        "message": "alster"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          lngLatLocation.alster[0],
          lngLatLocation.alster[1]
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
          lngLatLocation.elbphilharmonie[0],
          lngLatLocation.elbphilharmonie[1]
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
          lngLatLocation.rathaus[0],
          lngLatLocation.rathaus[1]
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
          lngLatLocation.plantenUnBloomen[0],
          lngLatLocation.plantenUnBloomen[1]
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
          lngLatLocation.elbstrand[0],
          lngLatLocation.elbstrand[1]
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
          lngLatLocation.jungfernstieg[0],
          lngLatLocation.jungfernstieg[1]
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
          lngLatLocation.reeperbahn[0],
          lngLatLocation.reeperbahn[1]
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
          lngLatLocation.hamburgDungeon[0],
          lngLatLocation.hamburgDungeon[1]
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
          lngLatLocation.hamburgDom[0],
          lngLatLocation.hamburgDom[1]
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
          lngLatLocation.landungsbruecken[0],
          lngLatLocation.landungsbruecken[1]
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
          lngLatLocation.speicherstadt[0],
          lngLatLocation.speicherstadt[1]
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
          lngLatLocation.fischmarkt[0],
          lngLatLocation.fischmarkt[1]
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

// INFO-BOX FUNCTION
function infoBox(img, text) {

}

// FLY TO LOCATION FUNCTION
function flyToLocation(selector, lng, lat) {
  let el = document.querySelector(selector);
  el.addEventListener('click', () => {
    // ADD .active TO CLICKED SELECTOR


    map.flyTo({
      center: [
        lng,
        lat
      ],
      zoom: 15,
    })
  });
}

// FLY TO EVENTS
flyToLocation('.btn-alster', lngLatLocation.alster[0], lngLatLocation.alster[1]);
flyToLocation('.btn-elbphilharmonie', lngLatLocation.elbphilharmonie[0], lngLatLocation.elbphilharmonie[1]);
flyToLocation('.btn-rathaus', lngLatLocation.rathaus[0], lngLatLocation.rathaus[1]);
flyToLocation('.btn-planten', lngLatLocation.plantenUnBloomen[0], lngLatLocation.plantenUnBloomen[1]);
flyToLocation('.btn-elbstrand', lngLatLocation.elbstrand[0], lngLatLocation.elbstrand[1]);
flyToLocation('.btn-jungfernstieg', lngLatLocation.jungfernstieg[0], lngLatLocation.jungfernstieg[1]);
flyToLocation('.btn-reeperbahn', lngLatLocation.reeperbahn[0], lngLatLocation.reeperbahn[1]);
flyToLocation('.btn-hamburg-dungeon', lngLatLocation.hamburgDungeon[0], lngLatLocation.hamburgDungeon[1]);
flyToLocation('.btn-hamburg-dom', lngLatLocation.hamburgDom[0], lngLatLocation.hamburgDom[1]);
flyToLocation('.btn-landungsbruecken', lngLatLocation.landungsbruecken[0], lngLatLocation.landungsbruecken[1]);
flyToLocation('.btn-speicherstadt', lngLatLocation.speicherstadt[0], lngLatLocation.speicherstadt[1]);
flyToLocation('.btn-fischmarkt', lngLatLocation.fischmarkt[0], lngLatLocation.fischmarkt[1]);







//
