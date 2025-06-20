import {
  Box,
  Text,
  Badge,
  Flex,
  CircularProgress,
  CircularProgressLabel,
  HStack,
  VStack,
} from "@chakra-ui/react";

export default function BessWidgets() {
  return (
    <Box
      bg="gray.800"
      p={4}
      borderRadius="md"
      boxShadow="md"
      width="100%"
      height="100%"
    >
      <Flex gap={4} height="100%">
        <VStack spacing={4} align="stretch" width="50%">
          <Box bg="gray.900" p={4} borderRadius="md" height="190px">
            <Text fontSize="sm" color="gray.400" mb={1}>State of Charge</Text>
            <Flex align="center" justify="center" mt={4}>
              <CircularProgress value={75} size="90px" thickness="10px" color="blue.400">
                <CircularProgressLabel>
                  <Text fontWeight="bold" fontSize="lg">75%</Text>
                </CircularProgressLabel>
              </CircularProgress>
            </Flex>
            <Text fontSize="md" fontWeight="bold" mt={3} textAlign="center">0 kW</Text>
          </Box>

          <Box bg="gray.900" p={2} borderRadius="md" height="130px">
            <Text fontSize="sm" color="gray.400" mb={1}>Battery Voltage</Text>
            <Text fontSize="2xl" fontWeight="bold">720 <small style={{ fontSize: "14px" }}>V</small></Text>
            <Text fontSize="xs" color="gray.500">A A</Text>
            <Box mt={1}>
              <svg width="100%" height="30">
                <polyline fill="none" stroke="#4FD1C5" strokeWidth="2"
                  points="0,20 10,15 20,18 30,14 40,17 50,13 60,16 70,12 80,15 90,11 100,14"
                />
              </svg>
            </Box>
          </Box>
        </VStack>

        <VStack spacing={4} align="stretch" width="50%">
          <Box bg="gray.900" p={2} borderRadius="md" height="70px">
            <Text fontSize="sm" color="gray.400" mb={1}>State of Health</Text>
            <Text fontSize="2xl" fontWeight="bold">95%</Text>
          </Box>

          <Box bg="gray.900" p={2} borderRadius="md" height="90px">
            <Text fontSize="sm" color="gray.400" mb={1}>Charge/Discharge Power</Text>
            <Text fontSize="xl" fontWeight="bold">0 kW</Text>
          </Box>

          <Box bg="gray.900" p={4} borderRadius="md" flex="1">
            <Text fontSize="sm" color="gray.400" mb={1}>Inverter Current</Text>
            <HStack spacing={2}>
              <Text fontSize="2xl" fontWeight="bold">0 A</Text>
              <Badge colorScheme="green" variant="solid" fontSize="xs">ON</Badge>
            </HStack>
            <Box mt={1}>
              <svg width="100%" height="30">
                <polyline fill="none" stroke="#63B3ED" strokeWidth="2"
                  points="0,20 10,19 20,17 30,20 40,16 50,18 60,15 70,17 80,14 90,16 100,13"
                />
              </svg>
            </Box>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
}
