/*eslint-disable*/

const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1Ijoic3dpa3JpdCIsImEiOiJja2VybWU4ZWoweDQwMnFwNjZ5cmNlamN5In0.IkQ2vRYm6SqvD98tof3m-Q';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/swikrit/ckermuwz37ath19ocrm2livic',
  //scrollZoom: false
  // center: [-118.113491, 34.111745],
  // zoom: 10,
  // interactive: false
});
