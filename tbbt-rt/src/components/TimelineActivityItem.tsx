import { aC } from "vitest/dist/chunks/reporters.0x019-V2.js";
import { Activity } from "../models/activities_model";
import { TIME } from "../types";
import { act } from "react";

export function TimelineActivityItem({
  activity,
  scalingFactor,
  overlapCount,
  startTime,
}: {
  activity: Activity;
  scalingFactor: number;
  overlapCount: number;
  startTime: TIME | number;
}) {
  return (
    <li
      className={`timeline_activity ${activity.status.toLowerCase()}`}
      style={{
        top: `${(activity.start - startTime) * scalingFactor}px`,
        height: `${activity.duration * scalingFactor}px`,
        left: `${overlapCount * 40}px`,
      }}
    >
      {activity.start}-{activity.start + activity.duration}: {activity.title}
    </li>
  );
}
