import { useState } from "react";
import "./App.css";

import {
  Activity,
  // sortedByStartActivities,
  initialActivities,
  countOverlapsFromPrevious,
} from "./models/activities_model";
// import { ActivityItem } from "./components/ActivityItem";
import { DisplayActivities } from "./components/DisplayActivities";
import { DURATION, TIME } from "./types";

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

function DisplayTimeline({
  activities,
  startTime,
  endTime,
  height,
}: {
  activities: Activity[];
  startTime: TIME | number;
  endTime: DURATION | number;
  height: number;
}) {
  const scalingFactor = height / (endTime - startTime);

  return (
    <div>
      <h2>
        Time Line from {startTime} to {endTime} in {height} pixels
      </h2>
      <ul
        className="timeline"
        style={{ height: `${height}px`, fontSize: `${scalingFactor / 2}px` }}
      >
        {activities.map((activity) => (
          <TimelineActivityItem
            key={activity.id}
            activity={activity}
            scalingFactor={scalingFactor}
            overlapCount={countOverlapsFromPrevious(activity, activities)}
          />
        ))}
      </ul>
    </div>
  );
}

function TimelineActivityItem({
  activity,
  scalingFactor,
  overlapCount,
}: {
  activity: Activity;
  scalingFactor: number;
  overlapCount: number;
}) {
  return (
    <li
      className={`timeline_activity ${activity.status.toLowerCase()}`}
      style={{
        top: `${activity.start * scalingFactor}px`,
        height: `${activity.duration * scalingFactor}px`,
        left: `${overlapCount * 40}px`,
      }}
    >
      {activity.start}: {activity.title}
    </li>
  );
}
