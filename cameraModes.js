// cameraModes.js
import { viewer } from "./app.js";

function enterFirstPersonMode() {
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(-122.4194, 37.7749, 50),
    orientation: {
      heading: Cesium.Math.toRadians(0.0),
      pitch: Cesium.Math.toRadians(0.0),
    },
  });
}

function enterThirdPersonMode() {
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(-122.4194, 37.7749, 2000),
    orientation: {
      heading: Cesium.Math.toRadians(0.0),
      pitch: Cesium.Math.toRadians(-30.0),
    },
  });
}

export { enterFirstPersonMode, enterThirdPersonMode };
