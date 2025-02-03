import { useState } from "react";
import "./App.css";

import { Activity, initialActivities } from "./models/activities_model";
import { DisplayActivities } from "./components/DisplayActivities";
import { DisplayTimeline } from "./components/DisplayTimeline";
import { DisplayGrid } from "./components/DisplayGrid";
import { formatTime, TIME, VH } from "./types";
// import { TIME } from "./types";

function ignore_unused<T>(_: T) {
  return _;
}

function App() {
  const [activities, _setActivities_raw] =
    useState<Activity[]>(initialActivities);
  ignore_unused(_setActivities_raw);
  const height = 400;
  const vheight: VH = (height / 10) as VH;
  const startTime: TIME = 0.5 as TIME;
  const endTime: TIME = 20 as TIME;
  return (
    <>
      <h1>Time Blocking</h1>
      <h2>React Typescript</h2>
      <div>Form for creating new tasks goes here</div>
      <DisplayActivities activities={activities} />
      <h2>
        Timeline from {formatTime(startTime)} to {formatTime(endTime)} in{" "}
        {height} pixels
      </h2>
      <DisplayGrid
        startTime={startTime}
        endTime={endTime}
        height={height}
        vheight={vheight}
      />
      <DisplayTimeline
        activities={activities}
        startTime={startTime}
        endTime={endTime}
        height={height}
        vheight={vheight}
      />
    </>
  );
}

export default App;
