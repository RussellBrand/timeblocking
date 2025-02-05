import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (event: MouseEvent) => {
      const newY = event.clientY - dragOffsetY;
      const newStart = startTime + newY / scalingFactor;
      setActivityStart(newStart as TIME);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      activity.start = activityStart;
      updateActivity(activity);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [
    isDragging,
    dragOffsetY,
    scalingFactor,
    startTime,
    activity,
    activityStart,
    updateActivity,
  ]);

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    setDragOffsetY(event.clientY - (activityStart - startTime) * scalingFactor);
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
    >
      ** {activityStart.toFixed(1)}-
      {(activityStart + activity.duration).toFixed(1)}: {activity.title}
    </li>
  );
}
