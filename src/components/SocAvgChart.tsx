// src/components/SocAvgChart.tsx

import { Box, Text, VStack, HStack } from '@chakra-ui/react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const SocAvgChart = () => {
  const options: Highcharts.Options = {
    chart: {
      type: 'line',
      backgroundColor: '#2D3748',
      height: 200,
    },
    title: { text: '' },
    xAxis: {
      categories: ['20:20', '20:30', '20:40', '20:50'],
      labels: { style: { color: '#ffffffb3' } },
      lineWidth: 1,
      lineColor: '#ffffff66',
      gridLineWidth: 0,
      tickLength: 0,
    },
    yAxis: {
      title: { text: null },
      labels: { style: { color: '#ffffffb3' } },
      tickPositions: [50, 60, 70],
      min: 49,
      max: 71,
      gridLineWidth: 0,
      lineWidth: 1,
      lineColor: '#ffffff66',
      tickLength: 0,
    },
    series: [
      {
        name: 'Max SOC',
        data: [66, 70, 68, 63],
        type: 'line',
        color: '#FFA500',
        marker: { enabled: false },
      },
      {
        name: 'Min SOC',
        data: [58, 60, 57, 56],
        type: 'line',
        color: '#00BFFF',
        marker: { enabled: false },
      },
    ],
    legend: { enabled: false },
    credits: { enabled: false },
    tooltip: { enabled: false },
  };

  return (
    <Box
      bg="gray.900"
      borderRadius="md"
      p={4}
      shadow="md"
      width="100%"
      maxW="500px"
    >
      <HStack justify="space-between" align="start" mb={2}>
        <VStack align="start" spacing={1}>
          <Text fontSize="xl" fontWeight="bold">
            SOC Avg 56%
          </Text>
          <Text fontSize="sm" opacity={0.7}>
            Max / Min &nbsp; 63% / 49%
          </Text>
        </VStack>

        <HStack spacing={4} align="end">
          {['5M', '15M', '30M', '1H'].map((label) => (
            <Box key={label} textAlign="center">
              <Text
                fontSize="sm"
                fontWeight="bold"
                color={label === '15M' ? 'yellow.400' : 'whiteAlpha.700'}
              >
                {label}
              </Text>
              {label === '15M' && (
                <Box height="2px" bg="yellow.400" mt="2px" borderRadius="full" />
              )}
            </Box>
          ))}
        </HStack>
      </HStack>

      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
};

export default SocAvgChart;
