import { Activity } from "../models/activities_model";
import { TimelineActivityItem } from "./TimelineActivityItem";
import { DURATION, TIME } from "../types";
import { countOverlapsFromPrevious } from "../models/activities_model";

export function DisplayTimeline({
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
