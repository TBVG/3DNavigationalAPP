// app.js

// Initialize the Cesium viewer
const viewer = new Cesium.Viewer("cesiumContainer", {
  terrainProvider: Cesium.createWorldTerrain(),
  baseLayerPicker: true,
  geocoder: true,
  timeline: false,
  animation: false,
  sceneModePicker: true,
});

// Add navigation tools
viewer.extend(Cesium.viewerCesiumNavigationMixin, {
  defaultResetView: Cesium.Rectangle.fromDegrees(-90, -45, 90, 45),
  enableCompass: true,
  enableZoomControls: true,
  enableDistanceLegend: true,
});

// Add basic functionality
viewer.scene.globe.enableLighting = true;
viewer.scene.skyBox.show = true;
viewer.scene.skyAtmosphere.show = true;

export { viewer };