// src/components/VerticalBreakerLine.tsx
import React, { useState } from "react";
import { Group, Line, Rect, Circle, Text } from "react-konva";

const VerticalBreakerLine: React.FC = () => {
  // Breaker 1 (draggable)
  const [position1, setPosition1] = useState({ x: 231, y: 201 });
  const lineHeight1 = 240;
  const rectWidth = 14;
  const rectHeight = 30;
  const rectY1 = lineHeight1 - rectHeight - 40;
  const dotY1 = 70;

  // Breaker 2 (fixed)
  const fixedX2 = 923;
  const fixedY2 = 334;
  const lineHeight2 = 100;
  const rectHeight2 = 28;
  const rectY2 = lineHeight2 / 2 - rectHeight2 / 2;

  // Breaker 3 (fixed)
  const fixedX3 = 233;
  const fixedY3 = 40;
  const lineHeight3 = 120;
  const crossY = 50;
  const dotY3 = 80;

  // Breaker 4 — Fixed at x=234, y=-81
  const fixedX4 = 234;
  const fixedY4 = -81;

  return (
    <>
      {/* Breaker 1 — Draggable */}
      <Group
        x={position1.x}
        y={position1.y}
        draggable
        onDragEnd={(e) => {
          const newX = Math.round(e.target.x());
          const newY = Math.round(e.target.y());
          setPosition1({ x: newX, y: newY });
          console.log("Breaker 1 dragged to:", { x: newX, y: newY });
        }}
      >
        <Line points={[0, 0, 0, lineHeight1]} stroke="red" strokeWidth={1.5} />
        <Line points={[-8, 15, 8, 30]} stroke="red" strokeWidth={2} />
        <Line points={[8, 15, -8, 30]} stroke="red" strokeWidth={2} />
        <Circle x={0} y={dotY1} radius={4} fill="red" />
        <Rect
          x={-rectWidth / 2}
          y={rectY1}
          width={rectWidth}
          height={rectHeight}
          stroke="red"
          strokeWidth={2}
        />
        <Text x={10} y={dotY1 - 8} text="QA1" fontSize={14} fill="white" />
        <Text x={-100} y={dotY1 - 20} text="200.00A" fontSize={14} fill="orange" />
        <Text x={-100} y={dotY1} text="645.10V" fontSize={14} fill="orange" />
        <Text x={-100} y={dotY1 + 20} text="1.3MV" fontSize={14} fill="orange" />
      </Group>

      {/* Breaker 2 — Fixed */}
      <Group x={fixedX2} y={fixedY2}>
        <Line points={[0, 0, 0, lineHeight2]} stroke="red" strokeWidth={1.5} />
        <Rect
          x={-rectWidth / 2}
          y={rectY2}
          width={rectWidth}
          height={rectHeight2}
          stroke="red"
          strokeWidth={2}
        />
        <Text
          x={rectWidth / 2 + 5}
          y={rectY2 + rectHeight2 / 2 - 8}
          text="F02"
          fontSize={14}
          fill="white"
        />
      </Group>

       <Group x={fixedX3} y={fixedY3}>
        <Line points={[0, -50, 0, lineHeight3]} stroke="red" strokeWidth={1.5} />
        <Line points={[-6, crossY, 6, crossY + 12]} stroke="red" strokeWidth={2} />
        <Line points={[6, crossY, -6, crossY + 12]} stroke="red" strokeWidth={2} />
        <Circle x={0} y={dotY3} radius={4} fill="red" />
        <Text x={10} y={dotY3 - 10} text="QA1" fontSize={14} fill="white" />
        <Text x={-100} y={dotY3 - 30} text="1.83 A" fontSize={14} fill="orange" />
        <Text x={-100} y={dotY3 - 10} text="417.50KV" fontSize={14} fill="orange" />
        <Text x={-100} y={dotY3 + 10} text="1.2MV" fontSize={14} fill="orange" />
        <Text x={-100} y={dotY3 + 30} text="0.4 MVAr" fontSize={14} fill="orange" />

        <Text x={10} y={-30} text="TRA01" fontSize={14} fill="white" />
      </Group>

      {/* Breaker 4 — Fixed green vertical line with top arrow + right labels */}
      <Group x={fixedX4} y={fixedY4}>
        <Line points={[0, 0, 0, 40]} stroke="green" strokeWidth={2} />
        <Line
          points={[
            0, -10,
            -6, 0,
            6, 0,
            0, -10
          ]}
          closed
          fill="green"
        />
        <Text x={70} y={0} text="5745.1 kW" fontSize={14} fill="red" />
        <Text x={70} y={20} text="5661.2 kW" fontSize={14} fill="green" />
      </Group>
    </>
  );
};

export default VerticalBreakerLine;
