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
// import { DURATION, TIME } from "./types";

function ignore_unused<T>(_: T) {
  return _;
}

function App() {
  const [activities, _setActivities_raw] =
    useState<Activity[]>(initialActivities);
  ignore_unused(_setActivities_raw);
  return (
    <>
      <h1>Time Blocking</h1>
      <h2>React Typescript</h2>
      <div>Form for creating new tasks goes here</div>
      <DisplayActivities activities={activities} />
      <DisplayTimeline
        activities={activities}
        startTime={0}
        endTime={24}
        height={600}
      />
    </>
  );
}

export default App;
