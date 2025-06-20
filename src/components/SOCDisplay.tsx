import { Box, Text } from "@chakra-ui/react";

export default function SOCDisplay() {
  return (
    <Box bg="gray.800" borderRadius="md" p={4} textAlign="center">
      <Text fontSize="md" fontWeight="bold" mb={2}>
        SOC
      </Text>
      <Text fontSize="2xl" color="white">
        57<span style={{ fontSize: "sm" }}>%</span>
      </Text>
    </Box>
  );
}
