import {
  Box,
  Text,
  Badge,
  VStack,
  HStack,
  Circle,
  Flex,
} from "@chakra-ui/react";
import {
  Stage,
  Layer,
  Group,
  Rect,
  Line,
  Circle as KonvaCircle,
  Text as KonvaText,
} from "react-konva";

export default function BessOverview() {
  const ACDCSymbol = () => (
    <Stage width={24} height={24}>
      <Layer>
        <Group>
          <Rect width={24} height={24} stroke="white" strokeWidth={1} />
          <Line points={[0, 24, 24, 0]} stroke="white" strokeWidth={1} />
          <Line
            points={[5, 7, 6.5, 6, 8, 7, 9.5, 6]}
            stroke="white"
            strokeWidth={1}
            tension={0.5}
            bezier
          />
          <Line points={[16, 16, 21, 16]} stroke="white" strokeWidth={1} />
          <Line points={[16, 19, 21, 19]} stroke="white" strokeWidth={1} />
        </Group>
      </Layer>
    </Stage>
  );

  const symbolCount = 8;
  const symbolStartTop = 110;
  const leftOffset = 30;

  const lines = [
    { id: "h0", points: [0, 0, 180, 0], x: 59, y: 121, label: "1/10" },
    { id: "h1", points: [0, 0, 180, 0], x: 56, y: 154, label: "2/10" },
    { id: "h2", points: [0, 0, 180, 0], x: 57, y: 184, label: "3/10" },
    { id: "h3", points: [0, 0, 180, 0], x: 58, y: 219, label: "4/10" },
    { id: "h4", points: [0, 0, 180, 0], x: 59, y: 249, label: "5/10" },
    { id: "h5", points: [0, 0, 180, 0], x: 60, y: 282, label: "6/10" },
    { id: "h6", points: [0, 0, 180, 0], x: 56, y: 312, label: "7/10" },
    { id: "h7", points: [0, 0, 180, 0], x: 61, y: 348, label: "8/10" },
    { id: "short1", points: [0, 0, 60, 0], x: 242, y: 171 },
    { id: "short2", points: [0, 0, 60, 0], x: 242, y: 297 },
    { id: "v1", points: [0, 0, 0, 100], x: 238, y: 121 },
    { id: "v2", points: [0, 0, 0, 100], x: 240, y: 248 },
  ];

  const pois = [
    { id: "POI-1", x: 322, y: 169 },
    { id: "POI-2", x: 322, y: 299 },
  ];

  const statusDots = [
    { x: 32, y: 111, color: "green" },
    { x: 31, y: 143, color: "red" },
    { x: 30, y: 175, color: "gray" },
    { x: 30, y: 206, color: "green" },
    { x: 30, y: 240, color: "red" },
    { x: 31, y: 270, color: "gray" },
    { x: 30, y: 302, color: "green" },
    { x: 30, y: 334, color: "gray" },
  ];

  return (
    <Box
      bg="gray.900"
      color="white"
      borderRadius="md"
      p={6}
      boxShadow="md"
      height="100%"
      width="100%"
      overflow="hidden"
      position="relative"
    >
      {/* Header */}
      <Flex justify="space-between" alignItems="flex-start" mb={4}>
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            System Overview
          </Text>
          <Text fontSize="xs">Timestamp</Text>
          <Text fontSize="xs">4/8/2024, 12:45 PM | Time Sync OK</Text>
        </Box>

        <VStack align="end" spacing={4}>
          <Box textAlign="right">
            <Text>Site 1</Text>
            <Badge colorScheme="blue">IDLE</Badge>
          </Box>
          <Box textAlign="right" mt={2}>
            <Text fontSize="sm" fontWeight="bold" mb={2}>
              Active Alarms
            </Text>
            <VStack align="end" spacing={2}>
              {["Overtemperature", "High SOC Limit", "Isolation Fault"].map(
                (alarm, i) => (
                  <HStack key={i} spacing={2}>
                    <Circle size="6px" bg="red.400" boxShadow="0 0 4px #f56565" />
                    <Text fontSize="xs">{alarm}</Text>
                  </HStack>
                )
              )}
            </VStack>
          </Box>
        </VStack>
      </Flex>

      {/* Bottom-right Legend */}
      <Box position="absolute" bottom="16px" right="24px" zIndex={20}>
        <HStack spacing={6}>
          <HStack spacing={2}>
            <Circle size="8px" bg="green.400" />
            <Text fontSize="xs">Charging</Text>
          </HStack>
          <HStack spacing={2}>
            <Circle size="8px" bg="red" />
            <Text fontSize="xs">Discharging</Text>
          </HStack>
          <HStack spacing={2}>
            <Circle size="8px" bg="gray.400" />
            <Text fontSize="xs">IDLE</Text>
          </HStack>
        </HStack>
      </Box>

      {/* Konva Canvas */}
      <Box position="absolute" top="0" left="0" width="100%" height="100%" zIndex={10}>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            {/* PCS-1 Label */}
            <KonvaText text="PCS-1" fontSize={10} fill="white" x={28} y={97} />

            {/* Fixed Status Dots */}
            {statusDots.map((dot, i) => (
              <KonvaCircle
                key={i}
                x={dot.x}
                y={dot.y}
                radius={3}
                fill={dot.color}
                shadowColor={dot.color}
                shadowBlur={5}
                shadowOpacity={0.7}
              />
            ))}

            {/* Busbars and Labels */}
            {lines.map((bar) => {
              const isHorizontal = bar.id.startsWith("h");
              const lineLength = bar.points[2];
              const centerX = bar.x + (lineLength ?? 0) / 2;
              const centerY = bar.y;

              return (
                <Group key={bar.id}>
                  <Line
                    points={bar.points}
                    stroke="red"
                    strokeWidth={2}
                    x={bar.x}
                    y={bar.y}
                    shadowColor="#ff3c3c"
                    shadowBlur={10}
                    shadowOffset={{ x: 0, y: 0 }}
                    shadowOpacity={0.9}
                  />
                  {bar.label && (
                    <KonvaText
                      text={bar.label}
                      x={bar.x}
                      y={bar.y - 12}
                      fontSize={10}
                      fill="white"
                      shadowColor="black"
                      shadowBlur={4}
                      shadowOffset={{ x: 1, y: 1 }}
                      shadowOpacity={0.6}
                    />
                  )}
                  {isHorizontal && (
                    <KonvaText
                      text="I01TouP"
                      x={centerX - 20}
                      y={centerY - 18}
                      fontSize={10}
                      fill="#00e0ff"
                      shadowColor="black"
                      shadowBlur={5}
                      shadowOffset={{ x: 1, y: 1 }}
                      shadowOpacity={0.6}
                    />
                  )}
                </Group>
              );
            })}

            {/* POIs */}
            {pois.map((poi) => (
              <Group key={poi.id} x={poi.x} y={poi.y}>
                <KonvaCircle
                  radius={24}
                  stroke="white"
                  strokeWidth={2}
                  shadowColor="white"
                  shadowBlur={10}
                  shadowOffset={{ x: 0, y: 0 }}
                  shadowOpacity={0.8}
                />
                <KonvaCircle
                  radius={20}
                  fill="white"
                  shadowColor="black"
                  shadowBlur={6}
                  shadowOffset={{ x: 2, y: 2 }}
                  shadowOpacity={0.5}
                />
                <KonvaText
                  text={poi.id}
                  fill="black"
                  fontSize={12}
                  width={40}
                  align="center"
                  offsetX={20}
                  offsetY={8}
                  shadowColor="gray"
                  shadowBlur={3}
                  shadowOffset={{ x: 1, y: 1 }}
                  shadowOpacity={0.5}
                />
              </Group>
            ))}
          </Layer>
        </Stage>
      </Box>

      {/* ACDC Symbols Column */}
      <Box position="absolute" top={`${symbolStartTop}px`} left={`${leftOffset}px`}>
        <VStack spacing={2}>
          {Array.from({ length: symbolCount }).map((_, i) => (
            <ACDCSymbol key={i} />
          ))}
        </VStack>
      </Box>
    </Box>
  );
}
