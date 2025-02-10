// layers.js
import { viewer } from "./app.js";

let trafficLayer = null;

function toggleTrafficLayer() {
  if (trafficLayer) {
    viewer.imageryLayers.remove(trafficLayer);
    trafficLayer = null;
  } else {
    trafficLayer = viewer.imageryLayers.addImageryProvider(
      new Cesium.UrlTemplateImageryProvider({
        url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        maximumLevel: 18,
      })
    );
  }
}

export { toggleTrafficLayer };