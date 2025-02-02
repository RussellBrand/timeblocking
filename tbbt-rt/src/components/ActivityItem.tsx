import { Activity } from "../models/activities_model";
import { formatTime } from "../types";

export function ActivityItem({ activity }: { activity: Activity }) {
  return (
    <li className={`activity ${activity.status.toLowerCase()}`}>
      {formatTime(activity.start)} --{" "}
      {formatTime(activity.start + activity.duration)} -- ({activity.id}){" "}
      {activity.title} -- {activity.status}
    </li>
  );
}
