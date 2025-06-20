import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Maximize2, Minimize2, MoreVertical } from 'lucide-react';

const BessPowerChart = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const chartRef = useRef<HighchartsReact.RefObject>(null);

  const handleFullScreenToggle = () => {
    const elem = document.getElementById('bess-power-chart-container');
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
      type: 'area',
      backgroundColor: 'transparent',
      height: isFullscreen ? '100%' : 300,
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
    exporting: {
      enabled: false,
    }
  };

  return (
    <Box
      id="bess-power-chart-container"
      maxW={isFullscreen ? '100vw' : '1220px'}
      height={isFullscreen ? '100vh' : 'auto'}
      mx="auto"
      mt={6}
      p={isFullscreen ? 4 : 6}
      bg="gray.900"
      borderRadius={isFullscreen ? 'none' : 'lg'}
      boxShadow="lg"
      position="relative"
    >
      {/* Fullscreen Toggle */}
      <IconButton
        icon={isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        aria-label="Toggle Fullscreen"
        size="sm"
        variant="ghost"
        color="whiteAlpha.800"
        position="absolute"
        top="8px"
        right="40px"
        zIndex={10}
        onClick={handleFullScreenToggle}
      />

      {/* Menu Icon */}
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<MoreVertical size={16} />}
          variant="ghost"
          color="whiteAlpha.800"
          size="sm"
          position="absolute"
          top="8px"
          right="8px"
          zIndex={10}
        />
        <MenuList bg="gray.700" color="black">
          <MenuItem onClick={() => console.log('Download PNG clicked')}>Download PNG</MenuItem>
          <MenuItem onClick={() => console.log('Download CSV clicked')}>Download CSV</MenuItem>
        </MenuList>
      </Menu>

      {/* Chart */}
      <Box height={isFullscreen ? 'calc(100% - 40px)' : 'auto'}>
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

export default BessPowerChart;
