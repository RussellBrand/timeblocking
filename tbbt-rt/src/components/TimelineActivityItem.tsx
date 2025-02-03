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
