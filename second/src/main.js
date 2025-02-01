import "./style.css";
import { setupCounter } from "./counter.js";

var START_HOUR = 9;
var END_HOUR = 22;
var DAY_LENGTH = END_HOUR - START_HOUR;

document.querySelector("#app").innerHTML = `
  <div>
      <button id="counter" type="button"></button>
      <div id="timeline_block"></div>
  </div>
`;
var delta = document.querySelector("#timeline_block").offsetHeight / DAY_LENGTH;
for (let i = 1; i < DAY_LENGTH; i += 1) {
  console.log(i);
  const line = document.createElement("div");
  line.className = "hour_block";

  line.style.display = "flex";
  line.style.alignItems = "center";
  // line.style.justifyContent = "center";
  line.style.textIndent = "-100%";
  // line.style.color = "black";
  line.style.fontSize = "12px";
  line.style.position = "absolute";
  line.style.left = "10%";
  line.style.width = "90%";
  line.style.height = "2px";
  line.style.backgroundColor = "orange";
  line.style.position = "absolute";
  line.style.top = `${i * delta}px`;
  line.textContent = (i + START_HOUR) % 12 || 12;
  document.querySelector("#timeline_block").appendChild(line);
}

setupCounter(document.querySelector("#counter"));
