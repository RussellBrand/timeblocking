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
          position: "absolute",
          height: `${height}px`,
          width: "80%",
          outline: "1px solid black",
        }}
      >
        {Array.from({ length: endTime - startTime }, (_, i) => (
          <div
            key={i}
            style={{
              top: `${i * scalingFactor}px`,
              position: "absolute",
              height: "1px",
              backgroundColor: "orange",
              left: "10px",
              right: "0px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {startTime + i}
          </div>
        ))}
      </div>
    </div>
  );
}
