import { TIME } from "../types";

export function DisplayGrid({
  startTime,
  endTime,
  height,
}: {
  startTime: TIME | number;
  endTime: TIME | number;
  height: number;
}) {
  const scalingFactor = height / (endTime - startTime);
  return (
    <div>
      <div
        className="grid"
        style={{
          height: `${height}px`,
        }}
      >
        {Array.from({ length: endTime - startTime }, (_, i) => (
          <div
            key={i}
            className="grid_line"
            style={{
              top: `${i * scalingFactor}px`,
            }}
          >
            {startTime + i}
          </div>
        ))}
      </div>
    </div>
  );
}
