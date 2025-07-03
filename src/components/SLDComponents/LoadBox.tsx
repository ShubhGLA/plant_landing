import React from "react";
import { Group, Rect, Text } from "react-konva";

interface LoadBoxProps {
  label: string;
}

const LoadBox: React.FC<LoadBoxProps> = ({ label }) => {
  const width = 60;
  const height = 25;

  return (
    <Group>
      <Rect
        width={width}
        height={height}
        stroke="white"
        strokeWidth={1}
        cornerRadius={3}
      />
      <Text
        text={label}
        fill="white"
        fontSize={12}
        align="center"
        width={width}
        height={height}
        verticalAlign="middle"
      />
    </Group>
  );
};

export default LoadBox;
