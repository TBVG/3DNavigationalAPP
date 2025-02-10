// infoWindow.js
import { viewer } from "./app.js";

const infoWindow = document.createElement("div");
infoWindow.style.position = "absolute";
infoWindow.style.display = "none";
infoWindow.style.padding = "10px";
infoWindow.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
infoWindow.style.border = "1px solid #ccc";
infoWindow.style.borderRadius = "5px";
infoWindow.style.zIndex = "20";
document.body.appendChild(infoWindow);

function showInfoWindow(name, description, position) {
  infoWindow.style.display = "block";
  infoWindow.style.left = `${position.x}px`;
  infoWindow.style.top = `${position.y}px`;
  infoWindow.innerHTML = `<h4>${name}</h4><p>${description}</p>`;
}

viewer.screenSpaceEventHandler.setInputAction((click) => {
  const pickedObject = viewer.scene.pick(click.position);
  if (pickedObject && pickedObject.id) {
    const entity = pickedObject.id;
    const windowPosition = Cesium.SceneTransforms.wgs84ToWindowCoordinates(
      viewer.scene,
      entity.position.getValue(Cesium.JulianDate.now())
    );
    showInfoWindow(entity.name, entity.description, windowPosition);
  }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);