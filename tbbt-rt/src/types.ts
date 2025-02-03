// Types

export enum Status {
  OPEN = "open",
  DONE = "done",
  SKIPPED = "skipped",
}

export function isStatus(value: string): value is Status {
  return Object.values(Status).includes(value as Status);
}

export function GuardExample(value: string): Status {
  //     return value ;
  //     simply return value would get a type error

  if (!isStatus(value)) {
    throw new Error("Invalid status");
  }
  return value;
}

// DURATION is a positive number representing the number of hours
export type DURATION = number & { __type: "DURATION" };

export function createDuration(value: number): DURATION {
  if (value <= 0) {
    throw new Error("DURATION must be a positive number");
  }
  return value as DURATION;
}

export type ID = number & { __type: "ID" };

export function createID(value?: number): ID {
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
export type TIME = number & { __type: "TIME" };

export function createTime(value: number): TIME {
  if (value < 0) {
    throw new Error("TIME must be a non-negative number");
  }
  return value as TIME;
}

export const NON_BREAKING_SPACE = "\u00A0";

export function formatTime(time: TIME | number): string {
  const hours = Math.floor(time);
  const minutes = Math.round((time - hours) * 60);
  return `${hours.toString().padStart(2, NON_BREAKING_SPACE)}:${minutes
    .toString()
    .padStart(2, "0")}`;
}
// CSS_DIMENSION is a string that can be used as a CSS dimension value

export type PX = number & { __type: "PX" };
export type VW = number & { __type: "VW" };
export type VH = number & { __type: "VH" };
export type CSS_DIMENSION = string & { __type: "CSS_DIMENSION" };

export function px_to_css_dimension(px: PX): CSS_DIMENSION {
  return `${px}px` as CSS_DIMENSION;
}

export function vw_to_css_dimension(vw: VW): CSS_DIMENSION {
  return `${vw}vw` as CSS_DIMENSION;
}

export function vh_to_css_dimension(vh: VH): CSS_DIMENSION {
  return `${vh}vh` as CSS_DIMENSION;
}
