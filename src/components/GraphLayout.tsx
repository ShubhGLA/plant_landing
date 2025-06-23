import React, { useState, useEffect, useRef, type ReactNode } from 'react';
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

interface GraphType {
    children : ReactNode;
}

const GraphLayout : React.FC<GraphType> = ({children}) => {
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

  return (
    <Box
      id="soc-avg-chart-container"
      bg="gray.900"
      borderRadius={isFullscreen ? 'none' : 'md'}
      p={4}
      shadow="md"
      width="100%"
      maxW={isFullscreen ? '100vw' : '100%'}
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

      <Box>
        {children}
      </Box>

    </Box>
  );
};

export default GraphLayout;
