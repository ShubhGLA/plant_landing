import { Box, Table, Thead, Tbody, Tr, Th, Td, Text } from "@chakra-ui/react";

const data = [
  { time: "11:45", schedule: "22.0 MW", actual: "23.0 MW", deviation: "+1.5 MW", penalty: "₹1,200" },
  { time: "12:00", schedule: "22.0 MW", actual: "23.5 MW", deviation: "+1.5 MW", penalty: "₹1,200" },
  { time: "12:15", schedule: "22.5 MW", actual: "23.5 MW", deviation: "+1.5 MW", penalty: "₹1,200" },
  { time: "12:30", schedule: "22.0 MW", actual: "+3.0 MW", deviation: "—", penalty: "₹1,200" },
];

export default function HistoricalDataTable() {
  return (
    <Box bg="gray.800" borderRadius="md" p={4}>
      <Text fontSize="md" fontWeight="bold" mb={2}>
        Historical Data
      </Text>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th color="gray.400">Time</Th>
            <Th color="gray.400">Scheduled (MW)</Th>
            <Th color="gray.400">Actual MW</Th>
            <Th color="gray.400">Deviation</Th>
            <Th color="gray.400">DSM Penalty (₹)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, i) => (
            <Tr key={i}>
              <Td>{row.time}</Td>
              <Td>{row.schedule}</Td>
              <Td color="green.300">{row.actual}</Td>
              <Td color="red.400">{row.deviation}</Td>
              <Td>{row.penalty}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
