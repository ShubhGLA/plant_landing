import { Box, Text, Flex, Progress } from '@chakra-ui/react'

const BatteryHealthCard = () => {
  return (
    <Box p={4} bg="gray.900" borderRadius="xl" shadow="md" color="white" h="200px">
      <Text mb={3} fontWeight="bold" color="gray.400">
        Battery Health
      </Text>

      <Flex direction="column" gap={4}>
        <Flex align="center" justify="space-between">
          <Text fontSize="sm" color="gray.300" minW="90px">Voltage</Text>
          <Progress
            value={100}
            size="sm"
            colorScheme="green"
            bg="gray.600"
            flex="1"
            ml={4}
          />
        </Flex>

        <Flex align="center" justify="space-between">
          <Text fontSize="sm" color="gray.300" minW="90px">Temperature</Text>
          <Progress
            value={65}
            size="sm"
            colorScheme="orange"
            bg="gray.600"
            flex="1"
            ml={4}
          />
        </Flex>

        <Flex align="center" justify="space-between">
          <Text fontSize="sm" color="white" minW="90px">Cycle Count</Text>
          <Progress
            value={75}
            size="sm"
            bg="gray.600"
            flex="1"
            ml={4}
            sx={{
              '& > div': {
                backgroundColor: 'gray.800',
              },
            }}
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default BatteryHealthCard
