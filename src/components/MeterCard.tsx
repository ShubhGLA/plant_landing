import { Box, Text, VStack, HStack } from '@chakra-ui/react';
import { AlertTriangle, AlertCircle } from 'lucide-react';
import { useMemo } from 'react';
import { useLatestPOIData } from '../hooks/poi_meter/useLatestPOIData';

const MeterCard = () => {

  const keys = useMemo(() => ['voltage', 'power_kw', 'frequency_hz', 'amps', 'daily_energy_kwh'], []); // you can change this dynamically
      const { data, status, error } = useLatestPOIData(keys);
    
      if (status === 'error') return <div>Error: {error}</div>;
    
      //console.log(data)
    
      const sumVoltage = data ? data.reduce((sum, item) => sum + parseFloat(item.voltage), 0) : 0;
      const sumPower = data ? data.reduce((sum, item) => sum + parseFloat(item.power_kw), 0) : 0;
      const sumTemperature = data ? data.reduce((sum, item) => sum + parseFloat(item.temperature), 0) : 0;
      const sumFrequency = data ? data.reduce((sum, item) => sum + parseFloat(item.frequency_hz), 0) : 0;
      const sumAmps = data ? data.reduce((sum, item) => sum + parseFloat(item.amps), 0) : 0;
      const sumEnergy = data ? data.reduce((sum, item) => sum + parseFloat(item.daily_energy_kwh), 0) : 0;
    
      // Calculate the average
      const avgVoltage = data ? sumVoltage / data.length : 1;
      const avgPower = data ? sumPower / data.length : 1;
      const avgTemperature = data ? sumTemperature / data.length : 1;
      const avgFrequency = data ? sumFrequency / data.length : 1;
      const avgAmps = data ? sumAmps / data.length : 1;
  return (
    <Box
      ml={"-10"}
      bg="gray.900"
      borderRadius="lg"
      p={3}
      color="white"
      w="100%"
      h="250px"
      minW="300px"
      maxW="300px"
      boxShadow="md"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      {/* Title */}
      <Text fontSize="md" fontWeight="bold">
        Meter
      </Text>

      {/* Readings */}
      <VStack align="start" spacing={1} fontSize="xs" mt={1}>
        <HStack justify="space-between" w="100%">
          <Text color="gray.400">Instant Power:</Text>
          <Text fontWeight="semibold">{avgPower} kW</Text>
        </HStack>
        <HStack justify="space-between" w="100%">
          <Text color="gray.400">Daily Energy:</Text>
          <Text fontWeight="semibold">{sumEnergy} kWh</Text>
        </HStack>
        <HStack justify="space-between" w="100%">
          <Text color="gray.400">Frequency:</Text>
          <Text fontWeight="semibold">{avgFrequency} Hz</Text>
        </HStack>
        <HStack justify="space-between" w="100%">
          <Text color="gray.400">Voltage:</Text>
          <Text fontWeight="semibold">{avgVoltage} kV</Text>
        </HStack>
        <HStack justify="space-between" w="100%">
          <Text color="gray.400">Current:</Text>
          <Text fontWeight="semibold">{avgAmps} A</Text>
        </HStack>
      </VStack>

      {/* Warnings & Alarms */}
      <HStack justify="space-around" mt={2}>
        <VStack spacing={0} textAlign="center">
          <AlertTriangle color="yellow" size={20} />
          <Text fontSize="xs">12 WARNINGS</Text>
          <Text fontSize="10px" color="gray.500">ACTIVE</Text>
        </VStack>
        <VStack spacing={0} textAlign="center">
          <AlertCircle color="red" size={20} />
          <Text fontSize="xs">7 ALARMS</Text>
          <Text fontSize="10px" color="gray.500">ACTIVE</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default MeterCard;
