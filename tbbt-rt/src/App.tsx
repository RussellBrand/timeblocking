import { useState } from "react";
import "./App.css";

// Types

enum Status {
  OPEN = "open",
  DONE = "done",
  SKIPPED = "skipped",
}

// DURATION is a positive number representing the number of hours
type DURATION = number & { __type: "DURATION" };

function createDuration(value: number): DURATION {
  if (value <= 0) {
    throw new Error("DURATION must be a positive number");
  }
  return value as DURATION;
}

type ID = number & { __type: "ID" };

function createID(value?: number): ID {
  if (value === undefined) {
    const RANDOM_ID_MAX = 1_000_000;
    value = Math.floor(Math.random() * RANDOM_ID_MAX) + 1; // Generate a random positive integer
  }
  if (value <= 0 || !Number.isInteger(value)) {
    throw new Error("ID must be a positive integer");
  }
  return value as ID;
}

// number of hours since midnight
type TIME = number & { __type: "TIME" };

function createTime(value: number): TIME {
  if (value < 0) {
    throw new Error("TIME must be a non-negative number");
  }
  return value as TIME;
}

const NON_BREAKING_SPACE = "\u00A0";

function formatTime(time: TIME | number): string {
  const hours = Math.floor(time);
  const minutes = Math.round((time - hours) * 60);
  return `${hours.toString().padStart(2, NON_BREAKING_SPACE)}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

type Activity = {
  id: ID;
  title: string;
  status: Status;
  start: TIME;
  duration: DURATION;
};

function createActivity(
  title: string,
  start: TIME | number,
  duration: DURATION | number,
  { id, status }: { id?: ID | number; status?: Status } = {}
): Activity {
  return {
    id: createID((id as number) || undefined),
    title,
    status: status || Status.OPEN,
    start: createTime(start),
    duration: createDuration(duration),
  };
}

function ignore_unused<T>(_: T) {
  return _;
}

function App() {
  const [activities, _setActivities] = useState<Activity[]>([
    createActivity("Divide App.tsx into seperate files", 6.0, 1, { id: 1001 }),
    createActivity("create typedefs", 9.0, 3, {
      id: 1002,
      status: Status.DONE,
    }),
    createActivity("Make form for creating new tasks", 12.0, 1, { id: 1003 }),
    createActivity("Reimplement in COBOL", 14.0, 2, {
      id: 1004,
      status: Status.SKIPPED,
    }),
    createActivity("Make activities editable", 18.0, 1, { id: 1005 }),
    createActivity("Sort activities by time", 2.0, 3),
    createActivity("Display on a timeline", 12.5, 0.5),
    createActivity(
      "make a lint rule for leading underscore without making the STATUS enum generter spurious warnings -- then we can remove the ignore_unused function",
      13.0,
      1
    ),
  ]);
  ignore_unused(_setActivities);
  return (
    <>
      <h1>Time Blocking</h1>
      <h2>React Typescript</h2>
      <div>Form for creating new tasks goes here</div>
      <DisplayActivities activities={activities} />
    </>
  );
}

export default App;

function DisplayActivities({ activities }: { activities: Activity[] }) {
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

function ActivityItem({ activity }: { activity: Activity }) {
  return (
    <li className={`activity ${activity.status.toLowerCase()}`}>
      {formatTime(activity.start)} --{" "}
      {formatTime(activity.start + activity.duration)} -- ({activity.id}){" "}
      {activity.title} -- {activity.status}
    </li>
  );
}
