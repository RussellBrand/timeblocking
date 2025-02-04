import { useState } from "react";
import { Activity } from "../models/activities_model";
import { TIME, VH } from "../types";

export function TimelineActivityItem({
  activity,
  scalingFactor,
  v_scalingFactor,
  overlapCount,
  startTime,
  updateActivity,
}: {
  activity: Activity;
  scalingFactor: number;
  v_scalingFactor: VH;
  overlapCount: number;
  startTime: TIME;
  updateActivity: (activity: Activity) => void;
}) {
  const [activityStart, setActivityStart] = useState<TIME>(activity.start);
  const [isDragging, setIsDragging] = useState(false);
  // const [dragStartY, setDragStartY] = useState(0);
  const [dragOffsetY, setDragOffsetY] = useState(0);

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    // setDragStartY(event.clientY);
    setDragOffsetY(event.clientY - (activityStart - startTime) * scalingFactor);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging) {
      return;
    }
    if (event.button !== 0) {
      handleMouseUp();
      return;
    }
    const newY = event.clientY - dragOffsetY;
    const newStart = startTime + newY / scalingFactor;
    setActivityStart(newStart as TIME);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    activity.start = activityStart;
    updateActivity(activity);
  };

  return (
    <li
      className={`timeline_activity ${activity.status.toLowerCase()}`}
      style={{
        top: `${((activityStart - startTime) * scalingFactor).toFixed(1)}px`,
        height: `${(activity.duration * scalingFactor).toFixed(1)}px`,
        left: `${(overlapCount * 40).toFixed(1)}px`,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      ** {activityStart.toFixed(1)}-
      {(activityStart + activity.duration).toFixed(1)}: {activity.title}
    </li>
  );
}
