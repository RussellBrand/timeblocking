import { useState } from "react";
import "./App.css";

import {
  Activity,
  // sortedByStartActivities,
  initialActivities,
  // countOverlapsFromPrevious,
} from "./models/activities_model";
// import { ActivityItem } from "./components/ActivityItem";
import { DisplayActivities } from "./components/DisplayActivities";
// import { TimelineActivityItem } from "./components/TimelineActivityItem";
import { DisplayTimeline } from "./components/DisplayTimeline";
import {
  //DURATION,
  TIME,
} from "./types";

function ignore_unused<T>(_: T) {
  return _;
}

function App() {
  const [activities, _setActivities_raw] =
    useState<Activity[]>(initialActivities);
  ignore_unused(_setActivities_raw);
  const height = 400;
  const startTime = 0.5;
  const endTime = 20;
  return (
    <>
      <h1>Time Blocking</h1>
      <h2>React Typescript</h2>
      <div>Form for creating new tasks goes here</div>
      <DisplayActivities activities={activities} />
      <h2>
        Time Line from {startTime} to {endTime} in {height} pixels
      </h2>
      <DisplayGrid startTime={startTime} endTime={endTime} height={height} />
      <DisplayTimeline
        activities={activities}
        startTime={startTime}
        endTime={endTime}
        height={height}
      />
    </>
  );
}

export default App;

function DisplayGrid({
  startTime,
  endTime,
  height,
}: {
  startTime: TIME | number;
  endTime: TIME | number;
  height: number;
}) {
  const scalingFactor = height / (endTime - startTime);
  return (
    <div>
      <div
        className="grid"
        style={{
          position: "absolute",
          height: `${height}px`,
          width: "80%",
          outline: "1px solid black",
        }}
      >
        {Array.from({ length: endTime - startTime }, (_, i) => (
          <div
            key={i}
            style={{
              top: `${i * scalingFactor}px`,
              position: "absolute",
              height: "1px",
              backgroundColor: "orange",
              left: "10px",
              right: "0px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {startTime + i}
          </div>
        ))}
      </div>
    </div>
  );
}
