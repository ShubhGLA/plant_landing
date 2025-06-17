import { Box, Text, VStack } from '@chakra-ui/react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/progress'

const BatteryStatusCard = () => {
  return (
    <Box
      p={4}
      w="380px"
      h="250px"
      bg="gray.900"
      borderRadius="xl"
      shadow="md"
      textAlign="center"
      color="white"
    >
      <VStack spacing={3}>
        <Text fontSize="md" color="gray.200">
          Battery State of Charge
        </Text>
        <CircularProgress value={82} size="180px" color="green.600" thickness="12px">
  <CircularProgressLabel fontSize="xl" color="white">
    82%
  </CircularProgressLabel>
</CircularProgress>
      </VStack>
    </Box>
  )
}
export default BatteryStatusCard
