// navigation.js
import { viewer } from "./app.js";

async function geocodeLocation(address) {
  const geocoder = new Cesium.BingMapsGeocoderService();
  const results = await geocoder.geocode(address);
  if (results.length > 0) {
    return results[0].destination;
  }
  throw new Error(`Location "${address}" not found.`);
}

function drawRoute(viewer, start, end) {
  const startPosition = Cesium.Cartesian3.fromDegrees(start.longitude, start.latitude);
  const endPosition = Cesium.Cartesian3.fromDegrees(end.longitude, end.latitude);

  viewer.entities.add({
    polyline: {
      positions: [startPosition, endPosition],
      width: 5,
      material: Cesium.Color.BLUE,
    },
  });

  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(
      (start.longitude + end.longitude) / 2,
      (start.latitude + end.latitude) / 2,
      500000
    ),
  });
}

function initializeNavigation(viewer) {
  document.getElementById("searchRoute").addEventListener("click", async () => {
    const startLocation = document.getElementById("startLocation").value;
    const destination = document.getElementById("destination").value;

    if (!startLocation || !destination) {
      alert("Please enter both a starting location and a destination.");
      return;
    }

    try {
      const startCoords = await geocodeLocation(startLocation);
      const endCoords = await geocodeLocation(destination);
      drawRoute(viewer, startCoords, endCoords);
    } catch (error) {
      console.error(error);
      alert("Failed to calculate the route. Please check your input.");
    }
  });
}

export { initializeNavigation };