import React, { useEffect, useState } from "react";
import { Stage, Layer, Group } from "react-konva";
import BatteryBusLayout1 from "../SLD/BatteryBusLayout1";
import BatteryBusLayout2 from "../SLD/BatteryBusLayout2";
import LoadsBranch from "../SLD/LoadsBranch";
import ACDCSymbol from "../components/SLDComponents/ACDCSymbol";
import ACDCSymbolWave from "../components/SLDComponents/ACDCSymbolWave";
import VerticalBreakerLine from "../components/SLDComponents/VerticalBreakerLine";

const SLDDashboard = () => {
  const [stageWidth, setStageWidth] = useState(window.innerWidth);
  const [stageHeight, setStageHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setStageWidth(window.innerWidth);
      setStageHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Total diagram width and height you expect
  const diagramWidth = 1400;
  const diagramHeight = 800; 

  // Calculate scale to fit in screen
  const scaleX = stageWidth / diagramWidth;
  const scaleY = (stageHeight - 80) / diagramHeight; 
  const scale = Math.min(scaleX, scaleY); 

  // Center diagram
  const offsetX = (stageWidth - diagramWidth * scale) / 2;
  const offsetY = (stageHeight - diagramHeight * scale) / 2 + 40;

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#111",
        overflow: "hidden",
      }}
    >
      <Stage width={stageWidth} height={stageHeight}>
        <Layer>
          <Group x={offsetX} y={offsetY} scaleX={scale} scaleY={scale}>
            <BatteryBusLayout1 id="battery-bus-1" x={0} y={0} />
            <BatteryBusLayout2 id="battery-bus-2" x={300} y={0} />
            <LoadsBranch x={600} y={0} />
            <ACDCSymbol x={200} y={150} />
            <ACDCSymbolWave x={202} y={-56} isDraggable={false} />
            <VerticalBreakerLine />
          </Group>
        </Layer>
      </Stage>
    </div>
  );
};

export default SLDDashboard;
