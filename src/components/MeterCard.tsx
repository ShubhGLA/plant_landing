import { Box, Text, VStack, HStack } from '@chakra-ui/react';
import { AlertTriangle, AlertCircle } from 'lucide-react';

const MeterCard = () => {
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
          <Text fontWeight="semibold">400932 kW</Text>
        </HStack>
        <HStack justify="space-between" w="100%">
          <Text color="gray.400">Reactive:</Text>
          <Text fontWeight="semibold">123 kVar</Text>
        </HStack>
        <HStack justify="space-between" w="100%">
          <Text color="gray.400">Frequency:</Text>
          <Text fontWeight="semibold">41 Hz</Text>
        </HStack>
        <HStack justify="space-between" w="100%">
          <Text color="gray.400">Voltage:</Text>
          <Text fontWeight="semibold">123 kV</Text>
        </HStack>
        <HStack justify="space-between" w="100%">
          <Text color="gray.400">Current:</Text>
          <Text fontWeight="semibold">123 A</Text>
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
