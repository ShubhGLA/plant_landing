import {
  Box,
  Text,
  Flex,
  VStack,
  HStack,
  Input,
  Select,
  Badge,
  Radio,
  RadioGroup,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

const statusColorMap: Record<string, string> = {
  Scheduled: "teal",
  Waiting: "yellow",
  Skipped: "red",
  Executing: "blue",
};

export default function ScheduledCommandPanel() {
  const [priority, setPriority] = useState("Med");

  const [scheduleList, setScheduleList] = useState([
    { time: "08:00 - 09:00", command: "Charge", power: "500", duration: "SOC < 80%", status: "Scheduled" },
    { time: "12:00 - 14:00", command: "Discharge", power: "600", duration: "Price > ₹6/kWh", status: "Waiting" },
    { time: "17:00 - 18:30", command: "Idle", power: "Idle", duration: "Grid Congestion", status: "Skipped" },
    { time: "20:00 - 22:00", command: "Grid Support (FCAS)", power: "Auto", duration: "AGC Enabled", status: "Executing" },
  ]);

  const [form, setForm] = useState({
    from: "",
    to: "",
    command: "Charge",
    power: "",
    duration: "",
    socMin: "",
    socMax: "",
    remarks: "",
  });

  const handleAddSchedule = () => {
    if (!form.from || !form.to || !form.command) return;

    const time = `${form.from} - ${form.to}`;
    const duration = form.duration || `SOC ${form.socMin}/${form.socMax}`;
    const newSchedule = {
      time,
      command: form.command,
      power: form.power || "Auto",
      duration,
      status: "Scheduled",
    };

    setScheduleList([...scheduleList, newSchedule]);

    setForm({
      from: "",
      to: "",
      command: "Charge",
      power: "",
      duration: "",
      socMin: "",
      socMax: "",
      remarks: "",
    });
  };

  return (
    <Box
      w="100%"
      height="100%"
      bg="gray.900"
      borderRadius="md"
      p={4}
      boxShadow="md"
      overflowY="auto"
    >
      <Flex gap={4} align="flex-start" direction="row" height="100%">
        {/* Left Table Panel */}
        <Box width="50%">
          <Text fontWeight="bold" fontSize="md" mb={4}>Scheduled Commands</Text>

          <HStack fontWeight="semibold" fontSize="sm" borderBottom="1px" borderColor="gray.600" pb={2}>
            <Box flex="1">Time Slot</Box>
            <Box flex="1">Command</Box>
            <Box flex="1">Power (kW)</Box>
            <Box flex="1">Duration</Box>
            <Box flex="1">Status</Box>
          </HStack>

          <VStack align="stretch" spacing={3} mt={2}>
            {scheduleList.map((item, i) => (
              <HStack
                key={i}
                fontSize="sm"
                borderBottom="1px"
                borderColor="gray.700"
                pb={2}
                bg={i % 2 === 0 ? "gray.800" : "gray.700"}
                _hover={{ bg: "gray.600" }}
              >
                <Box flex="1">{item.time}</Box>
                <Box flex="1">{item.command}</Box>
                <Box flex="1">{item.power}</Box>
                <Box flex="1">{item.duration}</Box>
                <Box flex="1">
                  <Badge colorScheme={statusColorMap[item.status]}>{item.status}</Badge>
                </Box>
              </HStack>
            ))}
          </VStack>
        </Box>

        {/* Right Form Panel */}
        <Box width="50%">
          <Text fontWeight="bold" fontSize="md" mb={4}>+ New Schedule Command</Text>

          <Text fontSize="sm" mb={1}>Time Window</Text>
          <HStack mb={3}>
            <Input
              type="time"
              size="sm"
              value={form.from}
              onChange={(e) => setForm({ ...form, from: e.target.value })}
              bg="gray.700"
              borderColor="gray.600"
            />
            <Input
              type="time"
              size="sm"
              value={form.to}
              onChange={(e) => setForm({ ...form, to: e.target.value })}
              bg="gray.700"
              borderColor="gray.600"
            />
          </HStack>

          <Text fontSize="sm" mb={1}>Command Type</Text>
          <Select
            size="sm"
            mb={3}
            value={form.command}
            onChange={(e) => setForm({ ...form, command: e.target.value })}
            bg="gray.700"
            borderColor="gray.600"
          >
            <option>Charge</option>
            <option>Discharge</option>
            <option>Idle</option>
            <option>Grid Support</option>
          </Select>

          <Text fontSize="sm" mb={1}>Set Power (optional)</Text>
          <HStack mb={3}>
            <Input
              placeholder="kW"
              size="sm"
              value={form.power}
              onChange={(e) => setForm({ ...form, power: e.target.value })}
              bg="gray.700"
              borderColor="gray.600"
            />
            <Input
              placeholder="Duration (optional)"
              size="sm"
              value={form.duration}
              onChange={(e) => setForm({ ...form, duration: e.target.value })}
              bg="gray.700"
              borderColor="gray.600"
            />
          </HStack>

          <Text fontSize="sm" mb={1}>SOC Threshold</Text>
          <HStack mb={3}>
            <Input
              placeholder="Min"
              size="sm"
              value={form.socMin}
              onChange={(e) => setForm({ ...form, socMin: e.target.value })}
              w="50px"
              bg="gray.700"
              borderColor="gray.600"
            />
            <Text fontSize="sm">/</Text>
            <Input
              placeholder="Max"
              size="sm"
              value={form.socMax}
              onChange={(e) => setForm({ ...form, socMax: e.target.value })}
              w="50px"
              bg="gray.700"
              borderColor="gray.600"
            />
          </HStack>

          <Text fontSize="sm" mb={1}>Priority Level</Text>
          <RadioGroup onChange={(val) => setPriority(val)} value={priority}>
            <HStack spacing={6} mb={3}>
              <Radio value="Low" size="sm">Low</Radio>
              <Radio value="Med" size="sm">Med</Radio>
              <Radio value="High" size="sm">High</Radio>
            </HStack>
          </RadioGroup>

          <Text fontSize="sm" mb={1}>Remarks</Text>
          <Textarea
            placeholder="AUTO DEMOS REMARK"
            size="sm"
            value={form.remarks}
            onChange={(e) => setForm({ ...form, remarks: e.target.value })}
            bg="gray.700"
            borderColor="gray.600"
            h="60px"
            mb={4}
          />

          <Button colorScheme="teal" size="sm" onClick={handleAddSchedule}>
            Add Command
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
