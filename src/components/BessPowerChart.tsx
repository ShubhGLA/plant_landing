import { Box } from '@chakra-ui/react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options: Highcharts.Options = {
  chart: {
    type: 'area',
    backgroundColor: '#2D3748',
    height: 300,
    style: { fontFamily: 'Segoe UI, sans-serif' },
  },
  title: { text: '' },
  xAxis: {
    categories: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
    gridLineColor: '#4A5568',
    lineColor: '#A0AEC0',
    labels: { style: { color: '#E2E8F0' } },
  },
  yAxis: {
    title: {
      text: 'Power (kW)',
      style: { color: '#E2E8F0' },
    },
    gridLineColor: '#4A5568',
    labels: { style: { color: '#E2E8F0' } },
  },
  tooltip: {
    shared: true,
    backgroundColor: '#1A202C',
    borderColor: '#38B2AC',
    style: { color: '#E2E8F0' },
  },
  legend: { enabled: false },
  series: [
    {
      name: 'Power',
      data: [10, 30, 60, 80, 70, 50, 40, 20],
      type: 'area',
      color: '#38B2AC',
      fillColor: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, '#38B2AC'],
          [1, 'rgba(56,178,172,0.1)'],
        ],
      },
    },
  ],
  credits: { enabled: false },
};

export default function BessPowerChart() {
  return (
    <Box
      maxW="1220px"
      mx="auto"
      mt={6}
      p={6}
      bg="gray.900"
      borderRadius="lg"
      boxShadow="lg"
    >
      
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
  );
}
