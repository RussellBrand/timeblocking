import { TIME, VH } from "../types";

export function DisplayGrid({
  startTime,
  endTime,
  height,
  vheight
}: {
  startTime: TIME | number;
  endTime: TIME | number;
  height: number;
  vheight: VH;
}) {
  const scalingFactor = height / (endTime - startTime);
  const v_scalingFactor : VH = vheight / (endTime - startTime) as VH;
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
