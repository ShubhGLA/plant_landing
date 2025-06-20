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

// ✅ Load modules
if (typeof HighchartsExporting === 'function') {
  HighchartsExporting(Highcharts);
}
if (typeof HighchartsExportData === 'function') {
  HighchartsExportData(Highcharts);
}

const BatteryTempChart = () => {
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  const chartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
      backgroundColor: 'transparent',
      height: 200,
    },
    accessibility: {
      enabled: false, // ✅ Removes accessibility warning
    },
    title: { text: '' },
    xAxis: {
      categories: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
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
        marker: { enabled: false }, // ✅ No dots
      },
      {
        type: 'line',
        name: 'Min Ambient',
        data: [22, 22, 23, 23, 24, 24],
        color: '#00c2ff',
        marker: { enabled: false }, // ✅ No dots
      },
    ],
    credits: { enabled: false },
    exporting: { enabled: true }, // ✅ Required for export to PNG
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
      {/* Header Info */}
      <VStack align="start" spacing={1} mb={2} fontSize="sm" color="gray.300">
        <HStack spacing={3}>
          <Text>Battery ambient</Text>
          <Text fontWeight="bold">26 / 22</Text>
        </HStack>
        <HStack spacing={3}>
          <Text>Battery cell</Text>
          <Text fontWeight="bold">21 / 19</Text>
        </HStack>
        <HStack spacing={3}>
          <Text>Battery humidity</Text>
          <Text fontWeight="bold">52%</Text>
        </HStack>
      </VStack>

      {/* Chart */}
      <Box mt={8} height="200px">
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          ref={chartRef}
          containerProps={{ style: { height: '100%' } }}
        />
      </Box>
    </GraphLayout>
  );
};

export default BatteryTempChart;
