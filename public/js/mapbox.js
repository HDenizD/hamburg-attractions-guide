// FLY TO LOCATIONS
function flyToLocationEvents(array) {
  array.forEach((item) => {
    let el = document.querySelector(`.btn-${item.id}`);
    el.addEventListener('click', () => {
      // REMOVE ALL CLASS .active
      removeActives();
      // ADD CLASS .active
      el.classList.add('active');
      map.flyTo({
        center: [
          item.coordinates[0],
          item.coordinates[1]
        ],
        zoom: 15,
      })
    });
  });
}

// REMOVES ACTIVE CLASSES FROM SIDEBAR
function removeActives() {
  for (var i = 0; i < document.querySelectorAll('.active').length; i++) {
    document.querySelector('.active').classList.remove('active');
  }
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

// CLEAR SIDEBAR & MARKER ITEMS
function clearSidebarItemsAndMarkers() {
  let mapMarkers = document.querySelectorAll('.mapboxgl-marker');
  mapMarkers.forEach((marker) => {
    marker.remove();
  });

  let listItems = document.querySelectorAll('li');
  listItems.forEach((listItem) => {
    listItem.remove();
  });
}

// AXIOS LOAD LOCATIONS FROM JSON FUNCTION
function loadLocations() {
  axios.get('/public/js/lngLatLocation.json')
    .then((response) => {
      const lngLatLocation = response.data;
      let geoJson = [];

      // ADD DATA TO GEOJSON
      function addLocationToGeoJson(id, lat, lng) {
        const geoItem = {
          type: "feature",
          properties: {
            title: id
          },
          geometry: {
            type: "Point",
            coordinates: [lat, lng]
          }
        }

        geoJson.push({
          ...geoItem
        });
      }

      // LOAD FILTERED LOCATION LIST
      let input = document.querySelector('.location-filter');
      input.addEventListener('keyup', () => {
        const filteredLocations = lngLatLocation.filter(({
          name
        }) => name.toLowerCase().startsWith(input.value
          .toLowerCase()));
        clearSidebarItemsAndMarkers();
        let filteredLocationsArr = [];
        filteredLocations.forEach((item) => {
          createListItem(item);
          addLocationToGeoJson(item.id, item.coordinates[0], item
            .coordinates[1]);
          filteredLocationsArr.push({
            ...item
          });
        });

        filteredLocationsArr.forEach((marker) => {
          let locationName = marker.id;
          let el = document.createElement('div');
          el.className = locationName;
          el.style.backgroundImage =
            'url("/public/images/map-marker.png")';
          el.style.width = '30px';
          el.style.height = '30px';
          el.style.top = '-13px';

          // ADD MARKERS TO MAP
          new mapboxgl.Marker(el)
            .setLngLat(marker.coordinates)
            .addTo(map);

          // FLY TO FILTERED LOCATIONS EVENTS
          flyToLocationEvents(filteredLocations);
        });
      });

      // DEFAULT LOAD ALL LOCATIONS
      lngLatLocation.forEach((item) => {
        createListItem(item);
        addLocationToGeoJson(item.id, item.coordinates[0], item
          .coordinates[1]);

      });

      // // CREATE AND SET MAP MARKERS
      geoJson.forEach((marker) => {
        let locationName = marker.properties.title;

        let el = document.createElement('div');
        el.className = locationName;
        el.style.backgroundImage = 'url("/public/images/map-marker.png")';
        el.style.width = '30px';
        el.style.height = '30px';
        el.style.top = '-13px';

        // ADD MARKERS TO MAP
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);
      });

      // FLY TO LOCATIONS EVENTS
      flyToLocationEvents(lngLatLocation);


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
