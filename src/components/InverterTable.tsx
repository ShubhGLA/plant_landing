import {
  Box,
  Text,
  Icon,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useRef } from 'react';
import GraphLayout from './GraphLayout'; // Adjust the path if needed

const inverterData = [
  { id: '001', model: 'Sungrow 1000XX', power: 4129.1, pr: 'n/a', cf: 'n/a', kwh: 105087.1, alarms: ['warning'] },
  { id: '002', model: 'Sungrow 1000XX', power: 3048.2, pr: 'n/a', cf: 'n/a', kwh: 105264.2, alarms: ['warning', 'danger'] },
  { id: '003', model: 'Sungrow 1000XX', power: 3570.3, pr: 'n/a', cf: 'n/a', kwh: 105780.3, alarms: ['warning'] },
  { id: '004', model: 'Sungrow 1000XX', power: 4970.6, pr: 'n/a', cf: 'n/a', kwh: 105848.5, alarms: [] },
  { id: '005', model: 'Sungrow 1000XX', power: 3770.7, pr: 'n/a', cf: 'n/a', kwh: 105795.5, alarms: ['danger'] },
  { id: '006', model: 'Sungrow 1000XX', power: 4736.1, pr: 'n/a', cf: 'n/a', kwh: 105178.1, alarms: ['warning'] },
  { id: '007', model: 'Sungrow 1000XX', power: 2931.2, pr: 'n/a', cf: 'n/a', kwh: 105267.2, alarms: ['warning', 'danger'] },
  { id: '008', model: 'Sungrow 1000XX', power: 2341.3, pr: 'n/a', cf: 'n/a', kwh: 105724.3, alarms: ['danger'] },
];

const InverterTable = () => {
  const containerRef = useRef(null);

  return (
    <GraphLayout title="Inverters" containerRef={containerRef}>
      {/* Table Header */}
      <HStack pb={3} fontSize="sm" color="gray.400" fontWeight="semibold">
        <Box w="60px">ID</Box>
        <Box w="130px">Model</Box>
        <Box w="90px">Power (kW)</Box>
        <Box w="60px" pl={2}>PR</Box>
        <Box w="60px">CF</Box>
        <Box w="100px">kWh</Box>
        <Box flex="1" textAlign="right">Warn / Alm</Box>
      </HStack>

      {/* Table Rows */}
      <Box
        flex="1"
        overflowY="auto"
        pr={1}
        sx={{
          '&::-webkit-scrollbar': { width: '6px' },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#718096',
            borderRadius: '4px',
          },
        }}
      >
        <VStack spacing={2} align="stretch">
          {inverterData.map((inv) => (
            <Box key={inv.id} px={4} py={2} borderRadius="md" bg="#2D3748">
              <HStack fontSize="xs" color="white">
                <Box w="60px">{inv.id}</Box>
                <Box w="130px">{inv.model}</Box>
                <Box w="90px">{inv.power}</Box>
                <Box w="60px" ml={-2}>{inv.pr}</Box>
                <Box w="60px" ml={-2}>{inv.cf}</Box>
                <Box w="100px">{inv.kwh}</Box>
                <Box flex="1" textAlign="right">
                  <HStack justify="flex-end" spacing={2}>
                    {inv.alarms.includes('warning') && (
                      <Icon as={FaExclamationTriangle} color="yellow.400" />
                    )}
                    {inv.alarms.includes('danger') && (
                      <Icon as={FaExclamationTriangle} color="red.400" />
                    )}
                  </HStack>
                </Box>
              </HStack>
            </Box>
          ))}
        </VStack>
      </Box>
    </GraphLayout>
  );
};

export default InverterTable;
