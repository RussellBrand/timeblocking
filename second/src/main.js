import "./style.css";
// import { setupCounter } from "./counter.js";

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

function createActivity(taskStart, taskDuration, taskName) {
  // alert(
  //   `Task Name: ${taskName}\nStart Time: ${taskStart}\nDuration: ${taskDuration} hours`
  // );

  const activity = document.createElement("div");
  activity.className = "activity";
  const startHour = parseTime(taskStart);
  const topPosition = (startHour - START_HOUR) * delta;
  const height = (taskDuration / 60) * delta;
  activity.style.top = `${topPosition}px`;
  activity.style.height = `${height}px`;
  activity.textContent = taskName;
  document.querySelector("#timeline_block").appendChild(activity);
}

function parseTime(timeStr) {
  const [hours, minutes] = timeStr.split(":").map(Number);
  return hours + minutes / 60;
}

document.querySelector("#app").innerHTML = `
  <div>
      <div id="timeline_block"></div>
      <form id="taskForm">
        <label for="task_start">Task Start (hh:mm):</label>
        <input type="text" id="task_start" name="task_start" pattern="\\d{1,2}:\\d{2}" value="${String(
          START_HOUR
        ).padStart(2, "0")}:00" required>
        
        <label for="task_duration">Duration (minutes):</label>
        <input type="number" id="task_duration" name="task_duration" min="1" max="${
          DAY_LENGTH * 60
        }" value="30" required>
        
        <label for="task_name">Task Name:</label>
        <input type="text" id="task_name" name="task_name" required>
        
        <button type="submit">Add Task</button>
      </form>
  </div>
`;

document
  .querySelector("#taskForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const taskStartStr = document.querySelector("#task_start").value;
    const taskStart = parseTime(taskStartStr);
    const taskDuration = document.querySelector("#task_duration").value;
    const taskName = document.querySelector("#task_name").value;
    createActivity(taskStartStr, taskDuration, taskName);
    document.querySelector("#taskForm").reset();
  });

var delta = document.querySelector("#timeline_block").offsetHeight / DAY_LENGTH;
for (let i = 1; i < DAY_LENGTH; i += 1) {
  console.log(i);
  const hour = calculateHour(i + START_HOUR);
  const topPosition = i * delta;
  const hourBlock = createHourBlock(hour, topPosition);
  document.querySelector("#timeline_block").appendChild(hourBlock);
}

// setupCounter(document.querySelector("#counter"));
