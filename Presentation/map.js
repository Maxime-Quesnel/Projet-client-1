function init() {
  const chartres = {
    lat: 48.44709,
    lng: 1.503631
  };
  const zoomLevel = 13.54;

  const map = L.map('mapid', { scrollWheelZoom: false }).setView(
    [chartres.lat, chartres.lng],
    zoomLevel
  );
  const marker = L.marker([48.448, 1.488]);
  marker.bindPopup('<img src="" /><br>I am a popup.').openPopup();
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
  map.addLayer(mainLayer);
  map.addLayer(marker);
}

init();
