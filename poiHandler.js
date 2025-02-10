// poiHandler.js
import { viewer } from "./app.js";

function addPOIMarkers() {
  const poiData = [
    { name: "Golden Gate Bridge", position: [-122.4783, 37.8199], description: "Famous suspension bridge in San Francisco." },
    { name: "Alcatraz Island", position: [-122.4233, 37.8267], description: "Historic island and former prison." },
  ];

  poiData.forEach((poi) => {
    viewer.entities.add({
      name: poi.name,
      position: Cesium.Cartesian3.fromDegrees(...poi.position),
      billboard: {
        image: "https://cdn-icons-png.flaticon.com/512/854/854866.png",
        scale: 0.6,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      },
      description: poi.description,
    });
  });
}

export { addPOIMarkers };