import { Box, Table, Thead, Tbody, Tr, Th, Td, Text, Icon } from '@chakra-ui/react';
import { FaExclamationTriangle } from 'react-icons/fa';

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
  return (
    <Box bg="gray.900" borderRadius="lg" p={4} w="full" h="450px" overflowY="auto">
      <Text fontSize="md" fontWeight="bold" mb={3}>
        Inverters
      </Text>

      {/* Table Header */}
      <Table variant="unstyled" size="sm" mb={2}>
        <Thead>
          <Tr>
            <Th color="gray.400">ID</Th>
            <Th color="gray.400">Model</Th>
            <Th color="gray.400">Power (kW)</Th>
            <Th color="gray.400">PR</Th>
            <Th color="gray.400">CF</Th>
            <Th color="gray.400">kWh</Th>
            <Th color="gray.400">Warn / Alm</Th>
          </Tr>
        </Thead>
      </Table>

      {/* Each Row in a Box */}
      <Box>
        {inverterData.map(inv => (
          <Box key={inv.id} bg="gray.800" borderRadius="md" p={2} mb={2}>
            <Table variant="unstyled" size="sm">
              <Tbody>
                <Tr>
                  <Td>{inv.id}</Td>
                  <Td>{inv.model}</Td>
                  <Td>{inv.power}</Td>
                  <Td>{inv.pr}</Td>
                  <Td>{inv.cf}</Td>
                  <Td>{inv.kwh}</Td>
                  <Td>
                    <Box display="flex" gap={2}>
                      {inv.alarms.includes('warning') && (
                        <Icon as={FaExclamationTriangle} color="yellow.400" />
                      )}
                      {inv.alarms.includes('danger') && (
                        <Icon as={FaExclamationTriangle} color="red.400" />
                      )}
                    </Box>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default InverterTable;
