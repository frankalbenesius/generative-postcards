import React from "react";
import range from "lodash/range";
import { fidgetOvalPath } from "../fidget";
import Peepers from "../components/Peepers";
import Gob from "../components/Gob";

export default function({ x, y, width, height }) {
  const n = 9;
  const rectangle = `
    M ${x} ${y}
    L ${x + width} ${y}
    L ${x + width} ${y + height}
    L ${x} ${y + height}
    L ${x} ${y}
  `;
  const holes = range(n)
    .map(i =>
      range(n)
        .map(j => {
          const nogginWidth = width / n;
          const nogginHeight = height / n;
          const cx = x + (width / n) * i + width / n / 2;
          const cy = y + (height / n) * j + height / n / 2;
          return fidgetOvalPath(
            cx,
            cy,
            nogginWidth * 0.47,
            nogginHeight * 0.47,
            0.115
          );
        })
        .join(" ")
    )
    .join(" ");
  return (
    <>
      <path d={rectangle + " " + holes} stroke={"black"} fill="none" />

      {range(n).map(i =>
        range(n).map(j => {
          const nogginWidth = width / n;
          const nogginHeight = height / n;
          const cx = x + (width / n) * i + width / n / 2;
          const cy = y + (height / n) * j + height / n / 2;
          return (
            <>
              {/* <path
                d={fidgetOvalPath(
                  cx,
                  cy,
                  nogginWidth * 0.47,
                  nogginHeight * 0.47,
                  0.115
                )}
                stroke="black"
                fill="none"
              /> */}
              <Peepers
                cx={cx}
                cy={cy - nogginHeight * 0.1}
                r={nogginHeight * 0.071}
                xOffset={nogginWidth * 0.22}
              />
              <Gob
                cx={cx}
                cy={cy + nogginHeight * 0.15}
                width={nogginWidth * 0.6}
              />
            </>
          );
        })
      )}
    </>
  );
}
