const points = {
  type: 'geojson',
  tolerance: 0,
  data: {
    type: 'FeatureCollection',
    previousFeatureId: 112,
    features: [
      {
        // feature for point A
        id: 111,
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [
            24.9454,
            60.1655,
          ],
        },
        properties: {
          title: 'Point A',
        },
      },
      {
        // feature for point B
        id: 112,
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [
            24.9554,
            60.1755,
          ],
        },
        properties: {
          title: 'Point B',
        },
      },
    ],
  },
};

module.exports = points;
