import { Box, Text, HStack, VStack } from '@chakra-ui/react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BatteryTempChart = () => {
  const options: Highcharts.Options = {
    chart: {
      backgroundColor: 'transparent',
      height: 200,
    },
    title: { text: '' },
    xAxis: {
      type: 'datetime',
      lineColor: '#666',
      labels: { style: { color: '#aaa' } },
    },
    yAxis: {
      gridLineColor: '#444',
      labels: { style: { color: '#aaa' } },
    },
    legend: {
      enabled: true,
      itemStyle: { color: '#aaa', fontWeight: 'normal' },
    },
    tooltip: {
      shared: true,
      backgroundColor: '#222',
      borderColor: '#888',
      style: { color: '#fff' },
    },
    series: [
      {
        type: 'line',
        name: 'Max Ambient',
        data: [26, 26, 27, 27, 28, 28],
        color: '#e49a3d',
      },
      {
        type: 'line',
        name: 'Min Ambient',
        data: [22, 22, 23, 23, 24, 24],
        color: '#00c2ff',
      },
    ],
    credits: { enabled: false },
  };

  return (
    <Box
      bg="gray.900"
      borderRadius="md"
      p={4}
      minW="240px"
      flex="1"
      boxShadow="md"
    >
      {/* Header Info */}
      <VStack align="start" spacing={1} mb={2}>
        <HStack fontSize="sm" spacing={3}>
          <Text>Battery ambient</Text>
          <Text fontWeight="bold">26/22</Text>
        </HStack>
        <HStack fontSize="sm" spacing={3}>
          <Text>Battery cell</Text>
          <Text fontWeight="bold">21/19</Text>
        </HStack>
        <HStack fontSize="sm" spacing={3}>
          <Text>Battery humidity</Text>
          <Text fontWeight="bold">52%</Text>
        </HStack>
      </VStack>

      {/* Chart */}
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
};

export default BatteryTempChart;
