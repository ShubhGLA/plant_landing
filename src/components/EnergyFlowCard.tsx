import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { FaSolarPanel, FaBatteryFull } from 'react-icons/fa'
import { IconContext } from 'react-icons'

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

      <svg width="100%" height="180px" role="img" aria-label="Energy Flow Diagram">
        {/* Solar Icon */}
        <foreignObject x="10" y="40" width="60" height="60">
          <Box display="flex" alignItems="center" flexDir="column" color="orange.300">
            <IconContext.Provider value={{ size: '24px' }}>
              <FaSolarPanel />
            </IconContext.Provider>
            <Text fontSize="xs" color="gray.300">
              SOLAR
            </Text>
          </Box>
        </foreignObject>

        {/* Grid Box - moved left by 10px */}
        <g transform="translate(270, 40)">
          <rect width="20" height="20" stroke="white" fill="none" rx="4" ry="4" />
          <text x="15" y="40" fill="gray" fontSize="10" textAnchor="middle">
            GRID
          </text>
        </g>

        {/* Battery Icon */}
        <foreignObject x="130" y="130" width="50" height="60">
          <Box display="flex" alignItems="center" flexDir="column" color="teal.300">
            <IconContext.Provider value={{ size: '24px' }}>
              <FaBatteryFull />
            </IconContext.Provider>
            <Text fontSize="xs" color="gray.300">
              BATTERY
            </Text>
          </Box>
        </foreignObject>

        {/* Orange Arrows */}
        <line x1="50" y1="60" x2="150" y2="60" stroke="orange" strokeWidth="2" />
        <line x1="150" y1="60" x2="150" y2="120" stroke="orange" strokeWidth="2" />
        <polygon points="146,120 154,120 150,128" fill="orange" />

        <polygon points="280,56 280,64 288,60" fill="orange" />

        <line x1="180" y1="150" x2="280" y2="150" stroke="teal" strokeWidth="2" />
        <polygon points="280,146 280,154 288,150" fill="teal" />
      </svg>
    </Box>
  )
}
