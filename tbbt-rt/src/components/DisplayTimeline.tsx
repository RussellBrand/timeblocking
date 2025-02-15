import { Activity } from "../models/activities_model";
import { TimelineActivityItem } from "./TimelineActivityItem";
import {
  // DURATION,
  TIME,
  VH,
} from "../types";
import { countOverlapsFromPrevious } from "../models/activities_model";

export function DisplayTimeline({
  activities,
  startTime,
  endTime,
  height,
  vheight,
  updateActivity,
}: {
  activities: Activity[];
  startTime: TIME;
  endTime: TIME;
  height: number;
  vheight: VH;
  updateActivity: (activity: Activity) => void;
}) {
  const scalingFactor = height / (endTime - startTime);
  const v_scalingFactor: VH = (vheight / (endTime - startTime)) as VH;

  return (
    <div>
      <ul
        className="timeline"
        style={{ height: `${height}px`, fontSize: `${scalingFactor / 2}px` }}
      >
        {activities.map((activity) => (
          <TimelineActivityItem
            key={activity.id}
            startTime={startTime}
            activity={activity}
            scalingFactor={scalingFactor}
            v_scalingFactor={v_scalingFactor}
            overlapCount={countOverlapsFromPrevious(activity, activities)}
            updateActivity={updateActivity}
          />
        ))}
      </ul>
    </div>
  );
}
