import {
  ID,
  createID,
  TIME,
  createTime,
  DURATION,
  createDuration,
  Status,
} from "../types";

export type Activity = {
  id: ID;
  title: string;
  status: Status;
  start: TIME;
  duration: DURATION;
};

export function createActivity(
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

export function sortedByStartActivities(activities: Activity[]): Activity[] {
  const answer = activities.slice().sort((a, b) => a.start - b.start);
  //   console.log("sortedByStartActivities", answer);
  return answer;
}

export function countOverlapsFromPrevious(
  activity: Activity,
  activities_sort_by_starttimes: Activity[]
): number {
  let count = 0;
  const bob = 100 + 20 * 3;
  count = 0 * bob;

  for (const act of activities_sort_by_starttimes) {
    if (act /*? $.id */.id === activity.id) {
      //? count
      break;
    }
    if (act.start + act.duration > activity.start) {
      count++;
    }
  }
  return count;
}

export function OLDcountOverlapsFromPrevious(
  activity: Activity,
  activities_sort_by_starttimes: Activity[]
): number {
  let count = 0;
  let skipping = false;
  activities_sort_by_starttimes.forEach((act) => {
    console.log(act.id, activity.id);
    if (act.id === activity.id) {
      skipping = true;
      return count;
    }
    if (act.start + act.duration > activity.start) {
      if (!skipping) {
        count++;
      }
    }
  });
  return count;
}

export const initialActivities: Activity[] = sortedByStartActivities([
  createActivity("Divide App.tsx into seperate files", 6.0, 1, {
    id: 1001,
  }),
  createActivity("create typedefs", 9.0, 13, {
    id: 1002,
    status: Status.DONE,
  }),
  createActivity("Make form for creating new tasks", 12.0, 1, { id: 1003 }),
  createActivity("Reimplement in COBOL", 13.5, 2, {
    id: 1004,
    status: Status.SKIPPED,
  }),
  createActivity("Make activities editable", 1.0, 1, { id: 1005 }),
  createActivity("Sort activities by time", 2.0, 3, {
    status: Status.DONE,
  }),
  createActivity("Display on a timeline", 12.5, 0.5),
  createActivity(
    "make a lint rule for leading underscore without making the STATUS enum generter spurious warnings -- then we can remove the ignore_unused function",
    13.0,
    1
  ),
]);
