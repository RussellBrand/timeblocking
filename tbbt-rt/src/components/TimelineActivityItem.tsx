import { Activity } from "../models/activities_model";

export function TimelineActivityItem({
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
