import "./style.css";
import { setupCounter } from "./counter.js";

var START_HOUR = 6;
var END_HOUR = 22;
var DAY_LENGTH = END_HOUR - START_HOUR;

function calculateHour(hour) {
  return hour % 12 || 12;
}

function createHourBlock(hour, topPosition) {
  const line = document.createElement("div");
  line.className = "hour_block";
  line.style.top = `${topPosition}px`;
  line.textContent = hour;
  return line;
}

document.querySelector("#app").innerHTML = `
  <div>
      <button id="counter" type="button"></button>
      
      <div id="timeline_block"></div>
  </div>
`;
var delta = document.querySelector("#timeline_block").offsetHeight / DAY_LENGTH;
for (let i = 1; i < DAY_LENGTH; i += 1) {
  console.log(i);
  const hour = calculateHour(i + START_HOUR);
  const topPosition = i * delta;
  const hourBlock = createHourBlock(hour, topPosition);
  document.querySelector("#timeline_block").appendChild(hourBlock);
}

setupCounter(document.querySelector("#counter"));
