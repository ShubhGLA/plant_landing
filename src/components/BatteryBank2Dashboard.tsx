import {
  Box,
  Text,
  HStack,
  VStack,
  CircularProgress,
  CircularProgressLabel,
  Grid,
  GridItem
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BatteryBank2Dashboard = () => {
  const navigate = useNavigate();

  const chartOptions: Highcharts.Options = {
    chart: {
      backgroundColor: '#2D3748',
      height: 190,
    },
    title: undefined,
    xAxis: {
      categories: ['-00:20:00', '-00:15:00', '-00:10:00', '-00:05:00', '00:00:00'],
      labels: { style: { color: '#FFFFFF' } },
    },
    yAxis: [
      {
        title: { text: '[°C]', style: { color: '#FFFFFF' } },
        labels: {
          style: { color: '#FFFFFF' },
          formatter: function () {
            return this.value + '°C';
          },
        },
        tickPositions: [10, 20, 30, 40, 50],
        gridLineWidth: 0,
        lineWidth: 2,
        lineColor: '#FFFFFF',
      },
      {
        title: { text: '[V]', style: { color: '#00FFFF' } },
        labels: {
          style: { color: '#00FFFF' },
          formatter: function () {
            return this.value + ' V';
          },
        },
        tickPositions: [100, 200, 300, 400, 500, 600, 700, 800],
        opposite: true,
        gridLineWidth: 0,
        lineWidth: 2,
        lineColor: '#00FFFF',
      },
      {
        title: { text: '[A]', style: { color: '#FF00FF' } },
        labels: {
          style: { color: '#FF00FF' },
          formatter: function () {
            return this.value + ' A';
          },
        },
        opposite: true,
        visible: false,
      },
    ],
    legend: { enabled: false, itemStyle: { color: '#FFFFFF', fontSize: '12px' } },
    series: [
      { name: 'Max Module Temp', type: 'line', data: [45, 44, 43, 44, 45], color: '#F7C948', yAxis: 0 },
      { name: 'Min Module Temp', type: 'line', data: [30, 31, 30, 29, 30], color: '#1CABE2', yAxis: 0 },
      { name: 'Max String Voltage', type: 'line', data: [600, 610, 620, 615, 618], color: '#00FFFF', yAxis: 1 },
      { name: 'Max String Current', type: 'line', data: [-100, -80, 0, 80, 100], color: '#FF00FF', yAxis: 2 },
    ],
    credits: { enabled: false },
  };

  return (
    <Box bg="#1A202C" color="white" minH="100vh" p={6}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Battery Bank 1 - Full Dashboard</Text>

      <Grid templateColumns="300px 360px auto" gap={10} alignItems="start">
        {/* Left Column */}
        <GridItem>
          <Box bg="#2D3748" borderRadius="md" p={4} w="220px" h="auto">
      {/* Strings Connected */}
      <Text fontSize="sm" mb={2} color="gray.300">
        Strings Connected
      </Text>
      <HStack align="start" spacing={3}>
        <CircularProgress value={100} size="80px" color="green.400" thickness="8px">
          <CircularProgressLabel fontWeight="bold" fontSize="sm">10</CircularProgressLabel>
        </CircularProgress>
        <VStack align="start" spacing={2}>
          <VStack spacing={0} align="start">
            <Text fontSize="sm" color="gray.300">CONNECTED</Text>
            <Text fontSize="md" fontWeight="bold" color="green.300">10</Text>
          </VStack>
          <VStack spacing={0} align="start">
            <Text fontSize="sm" color="gray.300">DISABLED</Text>
            <Text fontSize="md" fontWeight="bold" color="red.300">0</Text>
          </VStack>
        </VStack>
      </HStack>

      {/* Cell Balancing */}
      <Box mt={6}>
        <Text fontSize="sm" mb={2} color="gray.300">
          Cell Balancing
        </Text>
        <HStack align="start" spacing={3}>
          <CircularProgress value={100} size="80px" color="gray.400" thickness="8px">
            <CircularProgressLabel fontWeight="bold" fontSize="sm">1400</CircularProgressLabel>
          </CircularProgress>
          <VStack align="start" spacing={2}>
            <VStack spacing={0} align="start">
              <Text fontSize="sm" color="gray.300">ACTIVE</Text>
              <Text fontSize="md" fontWeight="bold" color="blue.200">0</Text>
            </VStack>
            <VStack spacing={0} align="start">
              <Text fontSize="sm" color="gray.300">BALANCED</Text>
              <Text fontSize="md" fontWeight="bold" color="orange.300">1400</Text>
            </VStack>
          </VStack>
        </HStack>
      </Box>
          </Box>

          {/* Strings Status */}
          <Box
  mt={6}
  bg="#2D3748"
  borderRadius="md"
  w="690px"
  h="510px"
  overflowY="auto"
  sx={{
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'gray.600',
      borderRadius: '4px',
    },
  }}
>
  {/* Fixed Title */}
  <Box
    position="sticky"
    top="0"
    zIndex={1}
    bg="#2D3748"
    p={4}
    borderBottom="1px solid #4A5568"
  >
    <Text fontSize="sm" color="gray.300" fontWeight="semibold">Strings</Text>
  </Box>

  {/* String Rows */}
  <VStack spacing={0} align="stretch">
    {[...Array(12)].map((_, i) => {
      const id = `BK1.S${(i + 1).toString().padStart(2, '0')}`;
      return (
        <HStack
          key={i}
          fontSize="xs"
          px={4}
          py={2}
          bg="#1A202C"
          _even={{ bg: '#2D3748' }}
          borderBottom="1px solid #4A5568"
        >
          <Box w="80px" fontWeight="bold" color="white">{id}</Box>

          <HStack w="90px">
            <Box boxSize="8px" bg="green.400" borderRadius="full" />
            <Text color="green.200" fontWeight="semibold">ENABLED</Text>
          </HStack>

          <HStack w="90px">
            <Box boxSize="8px" bg="green.400" borderRadius="full" />
            <Text color="green.200" fontWeight="semibold">CONNECTED</Text>
          </HStack>

          <Box w="100px" color="pink.300" fontWeight="semibold">25.97% SoC</Box>
          <Box w="100px" color="white">74.03% <Text as="span" color="teal.300">DoD</Text></Box>
          <Box w="100px" color="cyan.300">100.00% <Text as="span" color="cyan.400">% SoH</Text></Box>
          <Box flex="1" textAlign="right" color="gray.500" fontWeight="bold">⋯</Box>
        </HStack>
      );
    })}
  </VStack>
</Box>


        </GridItem>

        {/* Middle Column */}
       <Box bg="#2D3748" p={6} borderRadius="md" color="white" w="450px" h="310px" ml={"-100px"}>
  <Text fontWeight="bold" fontSize="lg" mb={4}>
    String Connected Layout
  </Text>

  <Grid templateColumns="repeat(5, 1fr)" gap={3}>
    {[...Array(10)].map((_, i) => {
      const id = `BK1.S${(i + 1).toString().padStart(2, '0')}`;
      return (
        <Box
          key={i}
          bg="#4A5568"
          p={2}
          borderRadius="md"
          textAlign="center"
          cursor="pointer"
          _hover={{ bg: '#2C5282' }}
          onClick={() => navigate(`/battery-bank-1/string/${id}`)}
        >
          <Text fontSize="xs" fontWeight="bold">{id}</Text>
          <Text fontSize="2xs" color="green.200">CONNECTED</Text>
          <Box mt={2} h="30px" bg="gray.700" borderRadius="md"></Box>
        </Box>
      );
    })}
  </Grid>
</Box>


        {/* Right Column */}
        <VStack align="stretch" spacing={6} ml={14}>
          {/* Real Time Monitoring */}
          <Box bg="#2D3748" borderRadius="md" p={14} maxW="600px" h="320px" ml={"-90px"} position="relative">
            <Text fontSize="md" fontWeight="bold" color="white" position="absolute" top="4" left="6" zIndex="1">
              Real Time Monitoring
            </Text>
            <Box mt={16}>
              <HighchartsReact highcharts={Highcharts} options={chartOptions} />
            </Box>
            <Box position="absolute" top={4} right={6} textAlign="right">
              {[
                ['#F7C948', 'Max Module Temp'],
                ['#1CABE2', 'Min Module Temp'],
                ['#00FFFF', 'Max String Voltage'],
                ['#FF00FF', 'Max String Current'],
              ].map(([color, label], i) => (
                <HStack key={i} spacing={2} mb={1} justify="flex-end">
                  <Box boxSize="10px" bg={color} borderRadius="sm" />
                  <Text fontSize="xs" color="white">{label}</Text>
                </HStack>
              ))}
            </Box>
          </Box>

          {/* Temperatures and Device */}
           <Box w="100%">
      <Grid templateColumns="repeat(2, 290px)" gap={4} ml={"-90px"}>
        {/* Temperatures Box */}
        <GridItem bg="#2D3748" borderRadius="md" p={4}>
          <Text fontSize="lg" mb={3} color="white">Temperatures</Text>

          <HStack justify="space-between">
            <Text fontSize="sm" color="gray.300">Max. Module temp</Text>
            <Text fontSize="sm" fontWeight="bold" color="red.300" mr="48px">35.61°C</Text>
          </HStack>

          <HStack spacing={2} mb={3} align="flex-start">
            <Box as="svg" viewBox="0 0 44 24" boxSize={5} fill="none" ml="32px">
              <path d="M16 4 V16" stroke="white" strokeWidth="4" strokeLinecap="round" />
              <path d="M16 16 H50" stroke="white" strokeWidth="4" strokeLinecap="round" />
              <path d="M33 13 L50 16 L33 19" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </Box>
            <Box ml={7}>
              <HStack spacing={7}>
                <Text fontSize="xs" color="gray.300">String ID <b>6</b></Text>
                <Text fontSize="xs" color="gray.300">Module <b>5</b></Text>
              </HStack>
            </Box>
          </HStack>

          <HStack justify="space-between">
            <Text fontSize="sm" color="gray.300">Min. Module temp</Text>
            <Text fontSize="sm" fontWeight="bold" color="blue.300" mr="48px">32.86°C</Text>
          </HStack>

          <HStack spacing={2} mb={2} align="flex-start">
            <Box as="svg" viewBox="0 0 44 24" boxSize={5} fill="none" ml="32px">
              <path d="M16 4 V16" stroke="white" strokeWidth="4" strokeLinecap="round" />
              <path d="M16 16 H50" stroke="white" strokeWidth="4" strokeLinecap="round" />
              <path d="M33 13 L50 16 L33 19" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </Box>
            <Box ml={7}>
              <HStack spacing={7}>
                <Text fontSize="xs" color="gray.300">String ID <b>7</b></Text>
                <Text fontSize="xs" color="gray.300">Module <b>2</b></Text>
              </HStack>
            </Box>
          </HStack>

          <HStack justify="space-between" mt={3}>
            <Text fontSize="sm" color="gray.300">Average Module temp</Text>
            <Text fontSize="sm" fontWeight="bold" color="gray.100" mr="48px">34.20°C</Text>
          </HStack>
        </GridItem>

        {/* Device Info Box */}
        <GridItem bg="#2D3748" borderRadius="md" p={4}>
          <Text fontSize="lg" mb={4} color="white">Device</Text>
          <Grid templateColumns="1fr auto" rowGap={2}>
            <Text color="gray.300">Manufacturer</Text>
            <Text fontWeight="bold" color="white">CD</Text>
            <Text color="gray.300">Model</Text>
            <Text fontWeight="bold" color="white">zenon</Text>
            <Text color="gray.300">Version</Text>
            <Text fontWeight="bold" color="white">10.0</Text>
            <Text color="gray.300">Options</Text>
            <Text fontWeight="bold" color="white">Demo</Text>
            <Text color="gray.300">Serial No.</Text>
            <Text fontWeight="bold" color="white">00</Text>
            <Text color="gray.300">Device address</Text>
            <Text fontWeight="bold" color="white">0</Text>
          </Grid>
        </GridItem>
      </Grid>
    </Box>

          {/* Analogs */}
          <Box bg="#2D3748" borderRadius="md" p={4} color="white" w="600px" h="220px" ml={"-90px"}>
  <Text fontSize="lg" fontWeight="bold" mb={4}>Analogs</Text>
  <HStack spacing={20} align="start" justify="space-between">
    {/* Left Column */}
    <VStack align="start" spacing={4}>
      {/* Max String Voltage */}
      <HStack spacing={2}>
        <Text>Max. String voltage</Text>
        <Text color="green.300" fontWeight="semibold">606.40 V</Text>
        <HStack spacing={1}>
          <Box as="svg" viewBox="0 0 24 24" boxSize="4">
            <path d="M5 12h14M13 18l6-6-6-6" stroke="white" strokeWidth="2" fill="none" />
          </Box>
          <Text>String ID <Text as="span" fontWeight="bold">1</Text></Text>
        </HStack>
      </HStack>

      {/* Min String Voltage */}
      <HStack spacing={2}>
        <Text>Min. String voltage</Text>
        <Text color="green.300" fontWeight="semibold">606.40 V</Text>
        <HStack spacing={1}>
          <Box as="svg" viewBox="0 0 24 24" boxSize="4">
            <path d="M5 12h14M13 18l6-6-6-6" stroke="white" strokeWidth="2" fill="none" />
          </Box>
          <Text>String ID <Text as="span" fontWeight="bold">1</Text></Text>
        </HStack>
      </HStack>

      {/* Avg Voltage */}
      <HStack spacing={2}>
        <Text>Average String voltage</Text>
        <Text color="green.300" fontWeight="semibold">606.40 V</Text>
      </HStack>
    </VStack>

    {/* Right Column */}
    <VStack align="start" spacing={4}>
      {/* Max String Current */}
      <HStack spacing={2}>
        <Text>Max. String current</Text>
        <Text color="pink.400" fontWeight="semibold">0.00 A</Text>
        <HStack spacing={1}>
          <Box as="svg" viewBox="0 0 24 24" boxSize="4">
            <path d="M5 12h14M13 18l6-6-6-6" stroke="white" strokeWidth="2" fill="none" />
          </Box>
          <Text>String ID <Text as="span" fontWeight="bold">1</Text></Text>
        </HStack>
      </HStack>

      {/* Min String Current */}
      <HStack spacing={2}>
        <Text>Min. String current</Text>
        <Text color="pink.400" fontWeight="semibold">0.00 A</Text>
        <HStack spacing={1}>
          <Box as="svg" viewBox="0 0 24 24" boxSize="4">
            <path d="M5 12h14M13 18l6-6-6-6" stroke="white" strokeWidth="2" fill="none" />
          </Box>
          <Text>String ID <Text as="span" fontWeight="bold">1</Text></Text>
        </HStack>
      </HStack>

      {/* Avg Current */}
      <HStack spacing={2}>
        <Text>Average String current</Text>
        <Text color="pink.400" fontWeight="semibold">10.00 A</Text>
      </HStack>
    </VStack>
  </HStack>
</Box>

        </VStack>
      </Grid>

      {/* Back to Main Dashboard */}
      <Box mt={6}>
        <HStack
          cursor="pointer"
          onClick={() => navigate('/')}
          _hover={{ textDecoration: 'underline' }}
          spacing={2}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="#63B3ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <Text fontWeight="semibold" color="blue.300">Back to Main Dashboard</Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default BatteryBank2Dashboard;
