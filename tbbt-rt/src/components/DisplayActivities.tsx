import { Activity } from "../models/activities_model";
import { ActivityItem } from "./ActivityItem";

export function DisplayActivities({ activities }: { activities: Activity[] }) {
  return (
    <div>
      <h2>{activities.length} Activities</h2>
      <ul>
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </ul>
    </div>
  );
}
