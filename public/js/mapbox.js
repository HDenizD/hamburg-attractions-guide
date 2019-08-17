// FLY TO LOCATION FUNCTION
function flyToLocation(selector, lng, lat) {
  let el = document.querySelector(selector);
  el.addEventListener('click', () => {
    // REMOVE CLASS .active
    removeActives();
    // ADD CLASS .active
    el.classList.add('active');

    map.flyTo({
      center: [
        lng,
        lat
      ],
      zoom: 15,
    })
  });
}

// REMOVES ACTIVE CLASSES FROM SIDEBAR
function removeActives() {
  for (var i = 0; i < document.querySelectorAll('.active').length; i++) {
    document.querySelector('.active').classList.remove('active');
  }
}

function updateLocationList() {

}

function createListItem(item) {
  let listItem = document.createElement('li');
  listItem.classList.add('list-group-item', `btn-${item.id}`);
  listItem.innerHTML = item.name;
  document.querySelector('.list-group').appendChild(listItem);

  let link = document.createElement('a');
  link.classList.add('info', 'badge', 'badge-warning');
  link.setAttribute('target', '_blank');
  link.innerHTML = '?';
  link.href = item.link;
  document.querySelector(`.btn-${item.id}`).appendChild(link);
}

// CLEAR LOCATION LIST ITEMS
function removeListItems() {
  let listItems = document.querySelector('ul');
  while (listItems.firstChild) {
    listItems.removeChild(listItems.firstChild);
  }
}

// AXIOS LOAD LOCATIONS FROM JSON FUNCTION
function loadLocations() {
  axios.get('/public/js/lngLatLocation.json')
    .then((response) => {
      const lngLatLocation = response.data;
      // LOAD FILTERED LOCATION LIST
      let input = document.querySelector('.location-filter');
      input.addEventListener('keyup', () => {
        const filteredLocations = lngLatLocation.filter(({
          name
        }) => name.toLowerCase().startsWith(input.value
          .toLowerCase()));
        removeListItems();
        filteredLocations.forEach((item) => {
          createListItem(item);
        });
      });
      // DEFAULT LOAD ALL LOCATIONS
      lngLatLocation.forEach((item) => {
        createListItem(item);
      });

      // TODO: MAKE GEOJSON BE REACTIVE LIKE THE LIST
      /*
      1. Filtered = filteredLocations
      2. All = lngLatLocation
      */

      // const geoJson = {};
      // MAYBE A FOR LOOP
      // lngLatLocation.forEach((location) => {
      //   // console.log(location.name);
      //   geoJson.features.geometry.coordinates = [lngLatLocation.coordinates];
      //
      // });

      // console.log(geoJson);
      // console.log(lngLatLocation);
      // MAPBOX GEOJSON


      const geoJson = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                9.992061,
                53.550252
              ]
            }
          },

        ]
      };
      // console.log(geoJson);



      // CREATE AND SET MAP MARKERS
      //   geoJson.features.forEach(function(marker) {
      //     let locationName = marker.properties.message;
      //
      //     // TODO: IF Input != '' remove all items from list and all markers
      //     // fetch by keypressdown
      //     // console.log(marker);
      //
      //     locationInputFilter();
      //
      //     let el = document.createElement('div');
      //     el.className = locationName;
      //     el.style.backgroundImage = 'url("/public/images/map-marker.png")';
      //     el.style.width = '30px';
      //     el.style.height = '30px';
      //     el.style.top = '-13px';
      //
      //     // // EVENT FOR INFO-BOX
      //     // el.addEventListener('click', function() {
      //     //   window.alert(marker.properties.message);
      //     // });
      //
      //     // ADD MARKERS TO MAP
      //     new mapboxgl.Marker(el)
      //       .setLngLat(marker.geometry.coordinates)
      //       .addTo(map);
      //   });
      //
      //   // FLY TO LOCATION EVENTS
      //   flyToLocation('.btn-alster',
      //     lngLatLocation.alster[0],
      //     lngLatLocation.alster[1]);
      //
      //   flyToLocation('.btn-elbphilharmonie',
      //     lngLatLocation.elbphilharmonie[0],
      //     lngLatLocation.elbphilharmonie[1]);
      //
      //   flyToLocation('.btn-rathaus',
      //     lngLatLocation.rathaus[0],
      //     lngLatLocation.rathaus[1]);
      //
      //   flyToLocation('.btn-planten',
      //     lngLatLocation.plantenUnBloomen[0],
      //     lngLatLocation.plantenUnBloomen[1]);
      //
      //   flyToLocation('.btn-elbstrand',
      //     lngLatLocation.elbstrand[0],
      //     lngLatLocation.elbstrand[1]);
      //
      //   flyToLocation('.btn-jungfernstieg',
      //     lngLatLocation.jungfernstieg[0],
      //     lngLatLocation.jungfernstieg[1]);
      //
      //   flyToLocation('.btn-reeperbahn',
      //     lngLatLocation.reeperbahn[0],
      //     lngLatLocation.reeperbahn[1]);
      //
      //   flyToLocation('.btn-hamburg-dungeon',
      //     lngLatLocation.hamburgDungeon[0],
      //     lngLatLocation.hamburgDungeon[1]);
      //
      //   flyToLocation('.btn-hamburg-dom',
      //     lngLatLocation.hamburgDom[0],
      //     lngLatLocation.hamburgDom[1]);
      //
      //   flyToLocation('.btn-landungsbruecken',
      //     lngLatLocation.landungsbruecken[0],
      //     lngLatLocation.landungsbruecken[1]);
      //
      //   flyToLocation('.btn-speicherstadt',
      //     lngLatLocation.speicherstadt[0],
      //     lngLatLocation.speicherstadt[1]);
      //
      //   flyToLocation('.btn-fischmarkt',
      //     lngLatLocation.fischmarkt[0],
      //     lngLatLocation.fischmarkt[1]);
      //
    })
    .catch((error) => {
      console.log(error);
    });
}

// AUTENTIFICATION AND META DATA FOR MAPBOX
mapboxgl.accessToken =
  'pk.eyJ1IjoiZGVuaXp6ZWQiLCJhIjoiY2p5dTQyb2UyMGExNDNocDgxZ3R0YzE0YSJ9.coHuDe_l_8rWRoTBW9u8SQ';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/denizzed/cjyu2kr5e0rqq1cry6wmo3rhg',
  center: [9.9432218, 53.5470901],
  zoom: 11.41,
});

// INIT FUNCTION
loadLocations();





//
