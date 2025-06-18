import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Maximize2, Minimize2, MoreVertical } from 'lucide-react';

const SocAvgChart = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  const handleFullScreenToggle = () => {
    const elem = document.getElementById('soc-avg-chart-container');
    if (!isFullscreen && elem?.requestFullscreen) {
      elem.requestFullscreen();
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleChange = () => {
      const full = !!document.fullscreenElement;
      setIsFullscreen(full);

      // Resize chart
      setTimeout(() => {
        chartRef.current?.chart.reflow();
      }, 300);
    };

    document.addEventListener('fullscreenchange', handleChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleChange);
    };
  }, []);

  const options: Highcharts.Options = {
    chart: {
      type: 'line',
      backgroundColor: 'transparent',
      height: isFullscreen ? '100%' : 200,
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
    exporting: { enabled: false },
  };

  return (
    <Box
      id="soc-avg-chart-container"
      bg="gray.900"
      borderRadius={isFullscreen ? 'none' : 'md'}
      p={4}
      shadow="md"
      width="100%"
      maxW={isFullscreen ? '100vw' : '500px'}
      height={isFullscreen ? '100vh' : '350px'}
      position="relative"
    >
      {/* Fullscreen Toggle Button */}
      <IconButton
        icon={isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        aria-label={isFullscreen ? 'Minimize' : 'Full screen'}
        size="sm"
        variant="ghost"
        color="whiteAlpha.800"
        position="absolute"
        top="8px"
        right="40px"
        zIndex={10}
        onClick={handleFullScreenToggle}
      />

      {/* 3-dot menu with options only */}
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<MoreVertical size={16} />}
          variant="ghost"
          color="whiteAlpha.800"
          position="absolute"
          top="8px"
          right="8px"
          size="sm"
          zIndex={10}
        />
        <MenuList bg="gray.900" color="black">
          <MenuItem onClick={() => console.log('Download PNG clicked')}>
            Download PNG
          </MenuItem>
          <MenuItem onClick={() => console.log('Download CSV clicked')}>
            Download CSV
          </MenuItem>
        </MenuList>
      </Menu>

      <HStack justify="space-between" align="start" mb={2}>
        <VStack align="start" spacing={1}>
          <Text fontSize="xl" fontWeight="bold">
            SOC Avg 56%
          </Text>
          <Text fontSize="sm" opacity={0.7}>
            Max / Min &nbsp; 63% / 49%
          </Text>
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

      <Box mt={8} height={isFullscreen ? 'calc(100% - 80px)' : 'auto'}>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref={chartRef}
          containerProps={{
            style: {
              height: '100%',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default SocAvgChart;
