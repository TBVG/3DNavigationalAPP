// navigation.js

// Function to geocode a location to coordinates
async function geocodeLocation(address) {
    const geocoder = new Cesium.BingMapsGeocoderService();
    const results = await geocoder.geocode(address);
    if (results.length > 0) {
      return results[0].destination;
    }
    throw new Error(`Location "${address}" not found.`);
  }
  
  // Function to draw a route between two points
  function drawRoute(viewer, start, end) {
    const startPosition = Cesium.Cartesian3.fromDegrees(start.longitude, start.latitude);
    const endPosition = Cesium.Cartesian3.fromDegrees(end.longitude, end.latitude);
  
    // Add line entity to represent the route
    viewer.entities.add({
      polyline: {
        positions: [startPosition, endPosition],
        width: 5,
        material: Cesium.Color.BLUE,
      },
    });
  
    // Fly to the route
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(
        (start.longitude + end.longitude) / 2,
        (start.latitude + end.latitude) / 2,
        500000
      ),
    });
  }
  
  // Initialize navigation functionality
  function initializeNavigation(viewer) {
    document.getElementById("searchRoute").addEventListener("click", async () => {
      const startLocation = document.getElementById("startLocation").value;
      const destination = document.getElementById("destination").value;
  
      if (!startLocation || !destination) {
        alert("Please enter both a starting location and a destination.");
        return;
      }
  
      try {
        // Geocode both locations
        const startCoords = await geocodeLocation(startLocation);
        const endCoords = await geocodeLocation(destination);
  
        // Draw the route on the map
        drawRoute(viewer, startCoords, endCoords);
      } catch (error) {
        console.error(error);
        alert("Failed to calculate the route. Please check your input.");
      }
    });
  }
  
  export { initializeNavigation };
  