import { Box, Text, HStack, VStack, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { FaExpandArrowsAlt, FaCompressArrowsAlt, FaEllipsisV } from 'react-icons/fa';

// Load Highcharts modules with dynamic import for compatibility with TypeScript and React
import('highcharts/modules/exporting').then(module => {
  module.default(Highcharts);
});
import('highcharts/modules/export-data').then(module => {
  module.default(Highcharts);
});


const BatteryTempChart = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const chartOptions: Highcharts.Options = {
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
    exporting: {
      enabled: false,
    },
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
      w={isFullscreen ? '100vw' : '100%'}
      h={isFullscreen ? '100vh' : 'auto'}
      position={isFullscreen ? 'fixed' : 'relative'}
      top={isFullscreen ? 0 : 'auto'}
      left={isFullscreen ? 0 : 'auto'}
      zIndex={isFullscreen ? 1000 : 'auto'}
      overflow="auto"
    >
      {/* Header Bar */}
      <HStack justify="space-between" mb={4}>
        <Text fontSize="sm" color="gray.300" fontWeight="semibold">
          Battery Temperature
        </Text>

        <HStack spacing={2}>
          <Menu>
            <MenuButton
              as={IconButton}
              size="sm"
              variant="ghost"
              icon={<FaEllipsisV />}
              aria-label="Options"
              color="gray.400"
              _hover={{ color: 'black' }}
            />
            <MenuList bg="gray.800" borderColor="gray.600">
              <MenuItem
              color="black"
                onClick={() =>
                  Highcharts.charts[0]?.exportChart({}, {})
                }
              >
                Download PNG
              </MenuItem>
              <MenuItem
              color={"black"}
                onClick={() =>
                  Highcharts.charts[0]?.downloadCSV?.()
                }
              >
                Download CSV
              </MenuItem>
            </MenuList>
          </Menu>

          <IconButton
            aria-label="Toggle Fullscreen"
            icon={
              isFullscreen ? (
                <FaCompressArrowsAlt />
              ) : (
                <FaExpandArrowsAlt />
              )
            }
            size="sm"
            variant="ghost"
            color="gray.400"
            onClick={() => setIsFullscreen(!isFullscreen)}
            _hover={{ color: 'white' }}
          />
        </HStack>
      </HStack>

      {/* Info Text */}
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
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </Box>
  );
};

export default BatteryTempChart;
