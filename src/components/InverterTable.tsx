import {
  Box,
  Text,
  Icon,
  HStack,
  VStack,
  IconButton,
} from '@chakra-ui/react';
import {
  FaExclamationTriangle,
  FaExpandArrowsAlt,
  FaCompressArrowsAlt,
} from 'react-icons/fa';
import { useMemo, useState } from 'react';
import { useLatestPCSData } from '../hooks/pcs/useLatestPCSData';





const InverterTable = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const pcsCol = ["ID", "Power kW", "Reactive kVR", "Charge kWh", "Discharge kWh", "Volt", "Amps"];
  
  const keys = useMemo(() => ['active_power_kw', 'reactive_power_kvar', 'charge_energy_kwh', 'discharge_energy_kwh', 'voltage', 'amps'], []); // you can change this dynamically
  const { data, status, error } = useLatestPCSData(keys);
  
  const pcsData = data? data.length > 0 ? data : [] : []
  if (status === 'error') return <div>Error: {error}</div>;

  return (
    <Box
      mt={6}
      w={isFullscreen ? '100vw' : '100%'}
      h={isFullscreen ? '100vh' : '500px'}
      position={isFullscreen ? 'fixed' : 'relative'}
      top={isFullscreen ? '0' : 'auto'}
      left={isFullscreen ? '0' : 'auto'}
      zIndex={isFullscreen ? 999 : 'auto'}
      p={isFullscreen ? 4 : 0}
    >
      {/*Outer Box for everything */}
      <Box
        bg="#1A202C"
        borderRadius="md"
        border="1px solid #4A5568"
        overflow="hidden"
        h="100%"
        display="flex"
        flexDirection="column"
      >
        {/* Header */}
        <HStack
          p={4}
          borderBottom="1px solid #4A5568"
          justifyContent="space-between"
          bg="#1A202C"
        >
          <Text fontSize="sm" color="gray.300" fontWeight="semibold">
            Inverters
          </Text>
          <IconButton
            aria-label="Toggle Fullscreen"
            icon={isFullscreen ? <FaCompressArrowsAlt /> : <FaExpandArrowsAlt />}
            size="sm"
            variant="ghost"
            color="gray.400"
            onClick={() => setIsFullscreen(!isFullscreen)}
            _hover={{ color: 'white' }}
          />
        </HStack>

        {/* Scrollable Area */}
        <Box
          flex="1"
          overflowY="auto"
          px={4}
          py={4}
          sx={{
            '&::-webkit-scrollbar': { width: '6px' },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#718096',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#1A202C',
            },
          }}
        >
          {/* Table Header */}
          <HStack pb={3} fontSize="sm" height={"30px"} color="gray.400" fontWeight="semibold" width={"100%"}>
            <Text textAlign={"center"} textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace={"nowrap"} w={"50px"} title={pcsCol[0]}>{pcsCol[0]}</Text>
            <Text textAlign={"center"} textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace={"nowrap"} w={"100px"} title={pcsCol[1]}>{pcsCol[1]}</Text>
            <Text textAlign={"center"} textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace={"nowrap"} w={"100px"} title={pcsCol[2]}>{pcsCol[2]}</Text>
            <Text textAlign={"center"} textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace={"nowrap"} w={"100px"} title={pcsCol[3]}>{pcsCol[3]}</Text> {/* PR shifted slightly right */}
            <Text textAlign={"center"} textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace={"nowrap"} w={"100px"} title={pcsCol[4]}>{pcsCol[4]}</Text>
            <Text textAlign={"center"} textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace={"nowrap"} w={"100px"} title={pcsCol[5]}>{pcsCol[5]}</Text>
            <Text textAlign={"center"} textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace={"nowrap"} w={"100px"} title={pcsCol[5]}>Amp</Text>
          </HStack>

          {/* Rows */}
          <VStack spacing={2} align="stretch">
            {pcsData.map((elem) => (
              <Box
                key={elem.table_name}
                // px={4}
                py={2}
                borderRadius="md"
                bg="#2D3748"
              >
                <HStack fontSize="xs" width={"100%"} color="white">
                  <Box textAlign={"center"} textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace={"nowrap"} w={"50px"}>{elem.table_name.split("_")[4]}</Box>
                  <Box textAlign={"center"} textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace={"nowrap"} w={"100px"}>{elem[keys[0]]}</Box>
                  <Box textAlign={"center"} textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace={"nowrap"} w={"100px"}>{elem[keys[1]]}</Box>
                  <Box textAlign={"center"} textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace={"nowrap"} w={"100px"}>{elem[keys[2]]}</Box> 
                  <Box textAlign={"center"} textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace={"nowrap"} w={"100px"}>{elem[keys[3]]}</Box>
                  <Box textAlign={"center"} textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace={"nowrap"} w={"100px"}>{elem[keys[4]]}</Box>
                  <Box textAlign={"center"} textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace={"nowrap"} w={"100px"}>{elem[keys[5]]}</Box>
                </HStack>
              </Box>
            ))}
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default InverterTable;
