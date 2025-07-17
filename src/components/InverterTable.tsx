import {
  Box,
  Text,
  HStack,
  VStack,
  IconButton,
} from '@chakra-ui/react';
import {
  FaExpandArrowsAlt,
  FaCompressArrowsAlt,
} from 'react-icons/fa';
import { useMemo, useState } from 'react';
import { useLatestPCSData } from '../hooks/pcs/useLatestPCSData';
// import { useLatestPCSData } from '../hooks/pcs/useLatestPCSData';

type PCSData = {
  table_name: string;
  active_power_kw: number;
  reactive_power_kvar: number;
  charge_energy_kwh: number;
  discharge_energy_kwh: number;
  voltage: number;
  amps: number;
};

const InverterTable = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const pcsCol = ["ID", "Power kW", "Reactive kVR", "Charge kWh", "Discharge kWh", "Volt", "Amps"];

  const keys = useMemo(() => [
    'active_power_kw',
    'reactive_power_kvar',
    'charge_energy_kwh',
    'discharge_energy_kwh',
    'voltage',
    'amps'
  ], []);

  const { data, status, error } = useLatestPCSData(keys);

  const pcsData = data? data.length > 0 ? data : [] : []
  if (status === 'error') return <div>Error: {error}</div>;

  // const pcsData: PCSData[] = [
  //   {
  //     table_name: "plant_1_pcs_inverter_1",
  //     active_power_kw: 120.5,
  //     reactive_power_kvar: 15.2,
  //     charge_energy_kwh: 80.0,
  //     discharge_energy_kwh: 20.5,
  //     voltage: 480,
  //     amps: 200,
  //   },
  //   {
  //     table_name: "plant_1_pcs_inverter_2",
  //     active_power_kw: 130.2,
  //     reactive_power_kvar: 18.0,
  //     charge_energy_kwh: 90.5,
  //     discharge_energy_kwh: 30.2,
  //     voltage: 485,
  //     amps: 210,
  //   },
  //   {
  //     table_name: "plant_1_pcs_inverter_3",
  //     active_power_kw: 110.8,
  //     reactive_power_kvar: 14.5,
  //     charge_energy_kwh: 70.2,
  //     discharge_energy_kwh: 25.1,
  //     voltage: 475,
  //     amps: 190,
  //   },
  // ];

  return (
    <Box
      bg="#2D3748"
      borderRadius="lg"
      boxShadow="lg"
      p={4}
      mt={0}
      w="100%"
    >
      <Box
        w={isFullscreen ? '100vw' : '100%'}
        h={isFullscreen ? '100vh' : '485px'}
        position={isFullscreen ? 'fixed' : 'relative'}
        top={isFullscreen ? '0' : 'auto'}
        left={isFullscreen ? '0' : 'auto'}
        zIndex={isFullscreen ? 999 : 'auto'}
        p={isFullscreen ? 4 : 0}
        bg="gray.900"
      >
        <Box
          bg="gray.900"
          borderRadius="md"
          border="1px solid #4A5568"
          overflow="hidden"
          h="100%"
          display="flex"
          flexDirection="column"
        >
          <HStack
            p={4}
            borderBottom="1px solid #4A5568"
            justifyContent="space-between"
            bg="gray.900"
          >
            <Text fontSize="lg" color="gray.300" fontWeight="semibold">
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
                backgroundColor: 'gray.900',
              },
            }}
          >
            {/* Table Header */}
            <HStack pb={3} fontSize="sm" height="30px" color="gray.400" fontWeight="semibold" width="100%">
              {pcsCol.map((col, i) => (
                <Text key={i} textAlign="center" flex="1">
                  {col}
                </Text>
              ))}
            </HStack>

            {/* Table Rows */}
            <VStack spacing={2} align="stretch">
              {pcsData.map((elem, index) => (
                <Box
                  key={index}
                  py={2}
                  borderRadius="md"
                  bg="gray.800"
                >
                  <HStack fontSize="xs" width="100%" color="white">
                    <Box textAlign="center" flex="1">{index + 1}</Box>
                    <Box textAlign="center" flex="1">{elem['active_power_kw']}</Box>
                    <Box textAlign="center" flex="1">{elem['reactive_power_kvar']}</Box>
                    <Box textAlign="center" flex="1">{elem['charge_energy_kwh']}</Box>
                    <Box textAlign="center" flex="1">{elem['discharge_energy_kwh']}</Box>
                    <Box textAlign="center" flex="1">{elem['voltage']}</Box>
                    <Box textAlign="center" flex="1">{elem['amps']}</Box>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InverterTable;