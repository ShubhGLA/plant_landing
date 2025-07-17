import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { PiSolarPanelFill } from 'react-icons/pi';
import { AiFillThunderbolt } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Stage, Layer, Line, Group } from 'react-konva';

export default function EnergyFlowCardSVG(): React.ReactElement {
  return (
    <Box
      bg="gray.900"
      p={4}
      borderRadius="xl"
      w="500px"
      h="250px"
      color="white"
      position="relative"
    >
      <Text fontSize="md" fontWeight="bold" mb={2}>
        Energy Flow
      </Text>

      {/* Static icons and boxes */}
      <svg width="100%" height="180px" role="img" aria-label="Energy Flow Diagram">
        {/* Solar Panel */}
        <foreignObject x="60" y="10" width="60" height="60">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            color="orange.300"
            height="100%"
            width="100%"
          >
            <IconContext.Provider value={{ size: '40px' }}>
              <PiSolarPanelFill color='white' />
            </IconContext.Provider>
            <Text fontSize="xs" color="gray.300">SOLAR</Text>
          </Box>
        </foreignObject>

        {/* Grid */}
        <foreignObject x="340" y="10" width="60" height="80">
          <Box
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="flex-start"
            height="100%"
          >
            <Box
              bg="gray.800"
              borderRadius="md"
              height="60px"
              width="60px"
              border="2px solid white"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="2xl" fontWeight="bold">-</Text>
            </Box>
            <Text fontSize="xs" color="gray.300" mt={1}>GRID</Text>
          </Box>
        </foreignObject>

        {/* Battery Box */}
        <foreignObject x="180" y="120" width="60" height="80">
          <Box
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="flex-start"
            height="100%"
          >
            {/* Battery box with horizontal line */}
            <Box
              bg="gray.800"
              borderRadius="md"
              height="60px"
              width="60px"
              position="relative"
              border="2px solid white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb={1}
            >
              {/* Full-width horizontal line */}
              <Box
                position="absolute"
                top="10px"
                left="0"
                right="0"
                height="2px"
                bg="white"
              />
              {/* Icon slightly below center */}
              <Box mt={3}>
                <IconContext.Provider value={{ size: '28px' }}>
                  <AiFillThunderbolt />
                </IconContext.Provider>
              </Box>
            </Box>
            {/* Battery label outside the box */}
            <Text fontSize="xs" color="gray.300" mt={1}>BATTERY</Text>
          </Box>
        </foreignObject>
      </svg>

      {/* Konva lines */}
      <Stage width={500} height={250} style={{ position: 'absolute', top: '50px', left: 0 }}>
        <Layer>
          {/* Battery to right - Green arrow */}
          <Group x={267} y={147} draggable={false}>
            <Line points={[0, 0, 80, 0]} stroke="green" strokeWidth={3} />
            <Line points={[80, 0, 75, -5, 75, 5]} fill="green" closed />
          </Group>

          {/* Solar to mid line - Orange */}
          <Group x={134} y={40} draggable={false}>
            <Line points={[0, 0, 80, 0]} stroke="orange" strokeWidth={3} />
          </Group>

          {/* Down to battery - Orange */}
          <Group x={212} y={40} draggable={false}>
            <Line points={[0, 0, 0, 60]} stroke="orange" strokeWidth={3} />
            <Line points={[0, 60, -5, 50, 5, 50]} fill="orange" closed />
          </Group>

          {/* Orange line to GRID */}
          <Group x={248} y={41} draggable={false}>
            <Line points={[0, 0, 80, 0]} stroke="orange" strokeWidth={3} />
            <Line points={[80, 0, 70, -5, 70, 5]} fill="orange" closed />
          </Group>

          {/* Vertical support line */}
          <Group x={248} y={40} draggable={false}>
            <Line points={[0, 0, 0, 68]} stroke="orange" strokeWidth={3} />
          </Group>
        </Layer>
      </Stage>
    </Box>
  );
}