let map = null;

const chartres = {
  lat: 48.44709,
  lng: 1.503631
};

const couvertIcon = L.icon({
  iconUrl: './icon-map/couvert.png',
  iconSize: [28, 25] // size of the icon
});

const monumentIcon = L.icon({
  iconUrl: './icon-map/monument.png',
  iconSize: [28, 25] // size of the icon
});

const loisirIcon = L.icon({
  iconUrl: './icon-map/info.png',
  iconSize: [28, 25] // size of the icon
});

const zoomLevel = 13.54;

const mainLayer = L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    attribution: 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 13,
    maxZoom: 15,
    accessToken:
      'pk.eyJ1IjoibWF4aW1lLXFubCIsImEiOiJja2Zxb2UybjcwNWg3MnJudzd2aHRhaWN4In0.ibT-YRCuQGrdfJTus0xxsA'
  }
);

const mapMonument = () => {
  if (map != undefined || map != null) {
    map.remove();
  }
  map = L.map('mapid', { scrollWheelZoom: false }).setView(
    [chartres.lat, chartres.lng],
    zoomLevel
  );
  const marker = L.marker([48.448, 1.488], { icon: monumentIcon });
  marker
    .bindPopup(
      `<img style="width: 200px; height: 100px;" src="./images/marker-cathedrale.jpg" /><br>Cathédrale de Chartres`
    )
    .openPopup();
  map.addLayer(mainLayer);
  map.addLayer(marker);
};

const mapGastronomie = () => {
  if (map != undefined || map != null) {
    map.remove();
  }

  map = L.map('mapid', { scrollWheelZoom: false }).setView(
    [chartres.lat, chartres.lng],
    zoomLevel
  );
  const markerLaChocolaterie = L.marker([48.445198, 1.487398], {
    icon: couvertIcon
  });
  const markerGrandMonarque = L.marker([48.444414, 1.483132], {
    icon: couvertIcon
  });
  const markerLeMoliere = L.marker([48.446945, 1.485551], {
    icon: couvertIcon
  });
  const markerEstocade = L.marker([48.447416, 1.492191], {
    icon: couvertIcon
  });
  const markerBoeufCouronne = L.marker([48.446761, 1.483264], {
    icon: couvertIcon
  });
  const markerFeuillantines = L.marker([48.447273, 1.49071], {
    icon: couvertIcon
  });
  const markerLaTableDeJulie = L.marker([48.443116, 1.48968], {
    icon: couvertIcon
  });
  markerLaChocolaterie
    .bindPopup(
      `<img style="width: 200px; height: 100px;" src="https://lh5.googleusercontent.com/p/AF1QipPdDfMlalKALXawsxc14zHI86mko6hE1l7QlYb8=w408-h306-k-no" /><br>La chocolaterie de Chartres`
    )
    .openPopup();
  markerGrandMonarque
    .bindPopup(
      `<img style="width: 200px; height: 100px;" src="https://lh5.googleusercontent.com/p/AF1QipNTA2eBWuM5Rck8y3kW0rZNZD30Rmoho23j5DCy=w408-h272-k-no" /><br>Grand Monarque Hotel & Spa`
    )
    .openPopup();
  markerLeMoliere
    .bindPopup(
      `<img style="width: 200px; height: 100px;" src="https://lh5.googleusercontent.com/p/AF1QipObBLZ3C1cS30RhTW9EkdtgA7_ILWtXnHBjatKV=w408-h306-k-no" /><br>Le Molière Restaurant`
    )
    .openPopup();
  markerEstocade
    .bindPopup(
      `<img style="width: 200px; height: 100px;" src="https://lh5.googleusercontent.com/p/AF1QipNXwVPKj7PG1iXUukbg6nG2m926IuPSACCVcszo=w426-h240-k-no" /><br>L'estocade Restaurant`
    )
    .openPopup();
  markerBoeufCouronne
    .bindPopup(
      `<img style="width: 200px; height: 100px;" src="https://lh5.googleusercontent.com/p/AF1QipPN4qVm1dpa82D87704JRMj3QqgVJE3qA2pt5yK=w408-h306-k-no" /><br>Restaurant - Hôtel Le Bœuf Couronné`
    )
    .openPopup();
  markerFeuillantines
    .bindPopup(
      `<img style="width: 200px; height: 100px;" src="https://lh5.googleusercontent.com/p/AF1QipOMgu0heyVVwHyyR8z817XMR7qhQSq-BjoAAqGi=w408-h306-k-no" /><br>Les Feuillantines Restaurant`
    )
    .openPopup();
  markerLaTableDeJulie
    .bindPopup(
      `<img style="
      width: 200px; height: 100px;" src="https://lh5.googleusercontent.com/p/AF1QipM4dBX-eKlOziGpA8mrkWF4kOWKmFtx4VdOqlfv=w426-h240-k-no" /><br>La Table De Julie Restaurant`
    )
    .openPopup();
  map.addLayer(mainLayer);
  map.addLayer(markerLaChocolaterie);
  map.addLayer(markerGrandMonarque);
  map.addLayer(markerLeMoliere);
  map.addLayer(markerEstocade);
  map.addLayer(markerBoeufCouronne);
  map.addLayer(markerFeuillantines);
  map.addLayer(markerLaTableDeJulie);
};

const mapLoisirs = () => {
  if (map != undefined || map != null) {
    map.remove();
  }
  map = L.map('mapid', { scrollWheelZoom: false }).setView(
    [chartres.lat, chartres.lng],
    zoomLevel
  );
  const markerOdyssée = L.marker([48.454585, 1.510267], { icon: loisirIcon });
  const markerPetiteVenise = L.marker([48.443853, 1.496525], {
    icon: loisirIcon
  });
  const markerVitrail = L.marker([48.448476, 1.486679], { icon: loisirIcon });
  markerOdyssée
    .bindPopup(
      `<img style="width: 200px; height: 100px;" src="https://lh5.googleusercontent.com/p/AF1QipM4Cryl7BEs72rjjcrqfT_Nrei7oz_9ilMIE3fo=w426-h240-k-no" /><br>L'Odyssée de Chartres`
    )
    .openPopup();
  markerPetiteVenise
    .bindPopup(
      `<img style="width: 200px; height: 100px;" src="https://lh5.googleusercontent.com/p/AF1QipN-vu8Ii2mv6qJuRlI037EDVxfxPNHeaekTKpo8=w426-h240-k-no" /><br>La Petite Venise Chartres`
    )
    .openPopup();
  markerVitrail
    .bindPopup(
      `<img style="width: 200px; height: 100px;" src="https://lh5.googleusercontent.com/p/AF1QipM5hDlLKttLayBkQaSVbesDHmlHHxel_nAe9O_u=w408-h544-k-no" /><br>Centre du Vitrail de Chartres`
    )
    .openPopup();
  map.addLayer(mainLayer);
  map.addLayer(markerOdyssée);
  map.addLayer(markerPetiteVenise);
  map.addLayer(markerVitrail);
};

const mapMonumentLink = document.getElementById('monument-item');
const mapGastronomieLink = document.getElementById('gastronomie-item');
const mapLoisirsLink = document.getElementById('loisir-item');
const mapNone = document.querySelector('.map-none');

mapMonumentLink.addEventListener('click', () => {
  mapNone.style.display = 'none';
  mapid.style.display = 'block';
  mapMonument();
});

mapGastronomieLink.addEventListener('click', () => {
  mapNone.style.display = 'none';
  mapid.style.display = 'block';
  mapGastronomie();
});

mapLoisirsLink.addEventListener('click', () => {
  mapNone.style.display = 'none';
  mapid.style.display = 'block';
  mapLoisirs();
});
