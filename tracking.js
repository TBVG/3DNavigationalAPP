// tracking.js
import { viewer } from "./app.js";

let userLocationEntity = null;
let trackingInterval = null;

function startLocationTracking() {
  if (!userLocationEntity) {
    userLocationEntity = viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(-122.4194, 37.7749),
      billboard: {
        image: "https://cdn-icons-png.flaticon.com/512/854/854866.png",
        scale: 0.6,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      },
    });
  }

  let longitude = -122.4194;
  let latitude = 37.7749;
  trackingInterval = setInterval(() => {
    longitude += (Math.random() - 0.5) * 0.001;
    latitude += (Math.random() - 0.5) * 0.001;

    userLocationEntity.position = Cesium.Cartesian3.fromDegrees(longitude, latitude);
  }, 2000);
}

function stopLocationTracking() {
  if (trackingInterval) {
    clearInterval(trackingInterval);
  }
}

export { startLocationTracking, stopLocationTracking };