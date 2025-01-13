// settingsMenu.js
import { startLocationTracking, stopLocationTracking } from "./tracking.js";
import { toggleTrafficLayer } from "./layers.js";
import { enterFirstPersonMode, enterThirdPersonMode } from "./cameraModes.js";

// Settings Menu
const settingsMenu = document.createElement("div");
settingsMenu.style.position = "absolute";
settingsMenu.style.top = "10px";
settingsMenu.style.left = "10px";
settingsMenu.style.padding = "10px";
settingsMenu.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
settingsMenu.style.border = "1px solid #ccc";
settingsMenu.style.zIndex = "10";

settingsMenu.innerHTML = `
  <h4>Settings</h4>
  <label><input type="checkbox" id="toggleTracking"> Enable Real-Time Tracking</label><br>
  <label><input type="checkbox" id="toggleTraffic"> Show Traffic Layer</label><br>
  <label><input type="radio" name="cameraMode" value="firstPerson"> First-Person View</label><br>
  <label><input type="radio" name="cameraMode" value="thirdPerson" checked> Third-Person View</label><br>
`;

document.body.appendChild(settingsMenu);

document.getElementById("toggleTracking").addEventListener("change", (event) => {
  event.target.checked ? startLocationTracking() : stopLocationTracking();
});

document.getElementById("toggleTraffic").addEventListener("change", toggleTrafficLayer);

const cameraModeRadios = document.getElementsByName("cameraMode");
cameraModeRadios.forEach((radio) =>
  radio.addEventListener("change", (event) => {
    if (event.target.value === "firstPerson") {
      enterFirstPersonMode();
    } else {
      enterThirdPersonMode();
    }
  })
);
