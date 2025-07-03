import React, { useState } from "react";
import {
  Box,
  Heading,
  Select,
  Input,
  Button,
  VStack,
  Text,
  Flex,
} from "@chakra-ui/react";

const defaultFormData = {
  fromDate: "",
  toDate: "",
  resolution: "",
  fileDownloadSetTableColumnsV2: [
    {
      blockCode: "",
      deviceType: "",
      deviceId: "",
      columnsName: [],
    },
  ],
};

export default function ReportDashboard() {
  const [formData, setFormData] = useState(defaultFormData);
  const [selectedParameters, setSelectedParameters] = useState<string[]>([]);

  const handleParamChange = (newValues: string[]) => {
    setSelectedParameters(newValues);
  };

  return (
    <Box p={6} bg="gray.900" minH="100vh" color="white">
      <Heading mb={6} size="lg" color="white">
        📄 Report Management
      </Heading>

      {/* Container for both input boxes */}
      <Flex direction="column" align="center" gap={6}>
        {/* Date-Time Section (Red Box) */}
        <Flex
          bg="gray.700"
          p={6}
          rounded="xl"
          gap={6}
          wrap="wrap"
          justify="center"
          w="80%"
        >
          <VStack align="start" minW="220px">
            <Text fontWeight="semibold" color="white">
              From Date
            </Text>
            <Input
              placeholder="dd-----yyyy  --:--  --"
              type="datetime-local"
              color="white"
            />
          </VStack>

          <VStack align="start" minW="220px">
            <Text fontWeight="semibold" color="white">
              To Date
            </Text>
            <Input
              placeholder="dd-----yyyy  --:--  --"
              type="datetime-local"
              color="white"
            />
          </VStack>

          <VStack align="start" minW="220px">
            <Text fontWeight="semibold" color="white">
              Time
            </Text>
            <Select placeholder="Select Time" color="white">
              <option style={{ color: "black" }}>1 Hour</option>
              <option style={{ color: "black" }}>15 Minutes</option>
            </Select>
          </VStack>
        </Flex>

        {/* Device Selection Section (Yellow Box) */}
        <Flex
          bg="gray.700"
          p={6}
          rounded="xl"
          gap={6}
          wrap="wrap"
          justify="center"
          w="80%" 
        >
          <VStack align="start" minW="220px">
            <Text fontWeight="semibold" color="white">
              Block
            </Text>
            <Select placeholder="Select Block" color="white">
              <option style={{ color: "black" }}>Block 1</option>
              <option style={{ color: "black" }}>Block 2</option>
            </Select>
          </VStack>

          <VStack align="start" minW="220px">
            <Text fontWeight="semibold" color="white">
              Device Type
            </Text>
            <Select placeholder="Select Device" color="white">
              <option style={{ color: "black" }}>Inverter</option>
              <option style={{ color: "black" }}>Battery</option>
            </Select>
          </VStack>

          <VStack align="start" minW="220px">
            <Text fontWeight="semibold" color="white">
              Device ID
            </Text>
            <Select placeholder="Select Device ID" color="white">
              <option style={{ color: "black" }}>Device 001</option>
              <option style={{ color: "black" }}>Device 002</option>
            </Select>
          </VStack>

          <VStack align="start" minW="220px">
            <Text fontWeight="semibold" color="white">
              Parameters
            </Text>
            <Select
              placeholder="Select Parameter"
              value={selectedParameters[0] || ""}
              onChange={(e) => handleParamChange([e.target.value])}
              color="white"
            >
              <option value="voltage" style={{ color: "black" }}>
                Voltage
              </option>
              <option value="current" style={{ color: "black" }}>
                Current
              </option>
              <option value="power" style={{ color: "black" }}>
                Power
              </option>
            </Select>
          </VStack>
        </Flex>

        {/* Button Section - Right aligned under yellow box */}
        <Flex justify="flex-end" w="80%">
          <Button colorScheme="blue" mr={3}>
            Generate Report
          </Button>
          <Button colorScheme="blue" variant="solid">
            Reset
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
