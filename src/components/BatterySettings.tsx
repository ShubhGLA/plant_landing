import {
  Box,
  Text,
  Input,
  Select,
  HStack,
  VStack,
  Checkbox,
  Divider,
} from "@chakra-ui/react";

const BatterySettings = () => {
  return (
    <Box
      bg="gray.900"
      borderWidth="1px"
      borderColor="gray.700"
      borderRadius="md"
      boxShadow="md"
      color="white"
      p={4}
      width="100%"
      height="380px" // ✅ fixed height as required
    >
      <VStack align="stretch" spacing={5} height="100%">
        {/* Battery Capacity */}
        <Box>
          <Text fontSize="lg" fontWeight="semibold" mb={1}>
            Total Rated Battery Capacity
          </Text>
          <HStack spacing={2}>
            <Input
              defaultValue=""
              size="sm"
              width="80px"
              color="teal.300"
              border="1px solid"
              borderColor="gray.600"
              bg="gray.800"
              _focus={{ boxShadow: "none", borderColor: "teal.400" }}
            />
            <Text fontSize="md" color="gray.400">
              kWh
            </Text>
          </HStack>
        </Box>

        <Divider borderColor="gray.700" />

        {/* Checkbox */}
        <Box fontSize={"lg"}>
          <Checkbox colorScheme="teal" defaultChecked>
            Take the Self Utilization Credit
          </Checkbox>
        </Box>

        <Divider borderColor="gray.700" />

        {/* Control Strategy */}
        <Box>
          <Text fontSize="md" fontWeight="semibold" mb={1}>
            Control Strategy
          </Text>
          <Select
            size="md"
            bg="gray.800"
            color="teal.300"
            borderColor="gray.700"
            defaultValue="Basic"
            maxW="200px"
            _hover={{ borderColor: "teal.400" }}
            _focus={{ borderColor: "teal.400", boxShadow: "none" }}
            sx={{
              option: {
                backgroundColor: "gray.800",
                color: "white",
              },
            }}
          >
            <option value="Basic">Basic</option>
            <option value="Time-of-Use(TOU)">Time-of-Use (TOU)</option>
            <option value="Peak Shaving">Peak Shaving</option>
          </Select>
        </Box>

        <Box flex="1" />
      </VStack>
    </Box>
  );
};

export default BatterySettings;
