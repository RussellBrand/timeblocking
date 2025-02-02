// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from '../App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).t
import {
  countOverlapsFromPrevious,
  Activity,
  createActivity,
  // initialActivities,
} from "../models/activities_model";

const SAMPLES: Activity[] = [
  createActivity("Activity 1-10", 1, 10 - 1),
  createActivity("Activity 2-8", 2, 8 - 2),
  createActivity("Activity 15-18", 15, 18 - 15),
];
import { describe, it, expect } from "vitest";

describe("countOverlapsFromPrevious", () => {
  it("empty array should always be zero", () => {
    const overlapCount = countOverlapsFromPrevious(SAMPLES[0], []);
    expect(overlapCount).toBe(0);
  });
  it("array with just me should always be zero", () => {
    const overlapCount = countOverlapsFromPrevious(
      SAMPLES[0],
      SAMPLES.slice(0, 1)
    );
    expect(overlapCount).toBe(0);
  });
  it("first element should always be zero", () => {
    const overlapCount = countOverlapsFromPrevious(SAMPLES[0], SAMPLES);
    // console.log(SAMPLES)
    expect(overlapCount).toBe(0);
  });
});
