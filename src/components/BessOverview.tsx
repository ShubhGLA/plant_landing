import { Box, Text, Badge, VStack, HStack, Circle, Flex } from "@chakra-ui/react";
import ACDCSymbol from "./SLDComponents/ACDCSymbol"; // ✅ THIS IS CORRECT

export default function BessOverview() {
  return (
    <Box
      bg="gray.900"
      color="white"
      borderRadius="md"
      p={6}
      boxShadow="md"
      height="100%"
      width="100%"
      overflow="hidden"
    >
      <Flex justify="space-between" align="center" mb={4}>
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            System Overview
          </Text>
          <Text fontSize="sm">Tisrenastap</Text>
          <Text fontSize="xs">4/8/2024, 12:45 PM | Time Sync OK</Text>
        </Box>
        <Box textAlign="right">
          <Text>Site 1</Text>
          <Badge colorScheme="blue">Idle</Badge>
        </Box>
      </Flex>

      <Flex mt={2} align="flex-start">
        <Box position="relative" w="40px" mr={2}>
          <Box
            position="absolute"
            top="0"
            left="50%"
            w="2px"
            h="100%"
            bg="gray.600"
            transform="translateX(-50%)"
          />
          <Box
            position="absolute"
            top="0"
            left="50%"
            h="2px"
            w="30px"
            bg="gray.600"
          />
        </Box>

        <Flex direction="row" gap={6} flex="1">
          <Box flex="1" position="relative">
            <ACDCSymbol />
          </Box>

          <Box minW="160px" ml="auto" textAlign="right">
            <Text fontSize="sm" fontWeight="bold" mb={2}>
              Active Alarms
            </Text>
            <VStack align="end" spacing={2}>
              {["Overtemperature", "High SOC Limit", "Isolation Fault"].map(
                (alarm, index) => (
                  <HStack key={index} spacing={2}>
                    <Circle
                      size="8px"
                      bg="blue.400"
                      boxShadow="0 0 4px #63b3ed"
                    />
                    <Text fontSize="xs">{alarm}</Text>
                  </HStack>
                )
              )}
            </VStack>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
