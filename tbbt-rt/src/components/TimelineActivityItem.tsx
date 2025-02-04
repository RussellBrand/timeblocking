import { useState } from "react";
import { Activity } from "../models/activities_model";
import { TIME, VH } from "../types";

export function TimelineActivityItem({
  activity,
  scalingFactor,
  v_scalingFactor,
  overlapCount,
  startTime,
}: {
  activity: Activity;
  scalingFactor: number;
  v_scalingFactor: VH;
  overlapCount: number;
  startTime: TIME | number;
}) {
  const [activityStart, setActivityStart] = useState(activity.start);

  const handleClick = () => {
    setActivityStart((prevStart) => prevStart + 1);
  };

  return (
    <li
      className={`timeline_activity ${activity.status.toLowerCase()}`}
      style={{
        top: `${(activityStart - startTime) * scalingFactor}px`,
        height: `${activity.duration * scalingFactor}px`,
        left: `${overlapCount * 40}px`,
      }}
      onClick={handleClick}
    >
      {activityStart}-{activityStart + activity.duration}: {activity.title}
    </li>
  );
}
