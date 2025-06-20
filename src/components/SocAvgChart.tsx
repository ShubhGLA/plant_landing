import React, { useRef } from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsExportData from 'highcharts/modules/export-data';
import GraphLayout from '../components/GraphLayout'; 

// Initialize exporting modules once
if (typeof HighchartsExporting === 'function') {
  HighchartsExporting(Highcharts);
}
if (typeof HighchartsExportData === 'function') {
  HighchartsExportData(Highcharts);
}

const SocAvgChart = () => {
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  const options: Highcharts.Options = {
    chart: {
      type: 'line',
      backgroundColor: 'transparent',
      height: 200,
    },
    accessibility: {
      enabled: false,
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
    exporting: { enabled: true }, 
  };

  const handleDownloadPNG = () => {
    chartRef.current?.chart.exportChart({ type: 'image/png' }, {});
  };

  const handleDownloadCSV = () => {
    (chartRef.current?.chart as any)?.downloadCSV?.();
  };

  return (
    <GraphLayout
      onDownloadPNG={handleDownloadPNG}
      onDownloadCSV={handleDownloadCSV}
    >
      <HStack justify="space-between" align="start" mb={2}>
        <VStack align="start" spacing={1}>
          <Text fontSize="xl" fontWeight="bold">SOC Avg 56%</Text>
          <Text fontSize="sm" opacity={0.7}>Max / Min &nbsp; 63% / 49%</Text>
        </VStack>

        <HStack spacing={4} align="end" mt={4}>
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
                <Box height="2px" bg="yellow.400" mt="4px" borderRadius="full" />
              )}
            </Box>
          ))}
        </HStack>
      </HStack>

      <Box mt={8} height="200px">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref={chartRef}
          containerProps={{ style: { height: '100%' } }}
        />
      </Box>
    </GraphLayout>
  );
};

export default SocAvgChart;
