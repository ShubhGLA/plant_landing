// src/components/GraphLayout.tsx
import { useState, useEffect, useRef, type ReactNode } from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { Maximize2, Minimize2, MoreVertical } from 'lucide-react';

interface GraphLayoutProps {
  onDownloadPNG?: () => void;
  onDownloadCSV?: () => void;
  height?: string | number; // ✅ New prop
  children: ReactNode;
}

const GraphLayout = ({
  onDownloadPNG,
  onDownloadCSV,
  height,
  children,
}: GraphLayoutProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFullScreenToggle = () => {
    const elem = containerRef.current;
    if (!isFullscreen && elem?.requestFullscreen) {
      elem.requestFullscreen();
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleChange);
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      bg="gray.900"
      borderRadius={isFullscreen ? 'none' : 'md'}
      p={4}
      shadow="md"
      w="100%"
      maxW={isFullscreen ? '100vw' : '100%'}
      h={isFullscreen ? '100vh' : height || 'auto'} // ✅ Conditional height
      position="relative"
    >
      {/* Fullscreen Button */}
      <IconButton
        icon={isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        size="sm"
        variant="ghost"
        color="whiteAlpha.800"
        position="absolute"
        top="8px"
        right="40px"
        zIndex={10}
        onClick={handleFullScreenToggle}
      />

      {/* Menu Button */}
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
        <MenuList bg="gray.900" color="white">
          {onDownloadPNG && (
            <MenuItem onClick={onDownloadPNG}>Download PNG</MenuItem>
          )}
          {onDownloadCSV && (
            <MenuItem onClick={onDownloadCSV}>Download CSV</MenuItem>
          )}
        </MenuList>
      </Menu>

      {/* Content */}
      <Box
        mt={isFullscreen ? 12 : 8}
        h={isFullscreen ? 'calc(100% - 80px)' : 'auto'}
      >
        {children}
      </Box>
    </Box>
  );
};

export default GraphLayout;
