import React from 'react';
import {
  Box, Text, Grid, HStack, VStack, CircularProgress, CircularProgressLabel, Button, SimpleGrid,
} from '@chakra-ui/react';

const StringDashboard = () => {
  return (
    <Box bg="#1A202C" color="white" minH="100vh" p={6} fontSize="sm">
      <Grid templateColumns={{ base: '1fr', xl: 'repeat(4, 1fr)' }} gap={4} mb={6}>
        {/* Column 1: Cell Balancing + Temperatures */}
        <VStack spacing={4} align="stretch">
          <Box bg="#2D3748" p={1} borderRadius="md" width="400px" height="300px">
      <Text fontWeight="bold" mb={3} color="white">Cell Balancing</Text>

      <Box display="flex" alignItems="center" height="100%" mt={"-8"}>
        {/* Left: Circular Progress */}
        <Box flex="0 0 160px" display="flex" justifyContent="center" >
          <CircularProgress value={100} size="140px" thickness="10px" color="gray.500">
            <CircularProgressLabel fontWeight="bold" fontSize="lg" color="white">
              1400
            </CircularProgressLabel>
          </CircularProgress>
        </Box>

        {/* Right: Text info */}
        <HStack align="start" spacing={6} ml={6}>
          <VStack align="start" spacing={1}>
            <Text color="gray.400" fontSize="sm">ACTIVE</Text>
            <Text color="white" fontWeight="semibold" fontSize="xl">10</Text>
            <Text color="gray.400" fontSize="sm" mt={2}>BALANCED</Text>
            <Text color="orange.300" fontWeight="bold" fontSize="xl">1400</Text>
          </VStack>

          <VStack align="start" spacing={1}>
            <Text color="gray.400" fontSize="sm">STRING ID</Text>
            <Text color="white" fontWeight="semibold" fontSize="xl">2</Text>
            <Text color="gray.400" fontSize="sm" mt={2}>CYCLE COUNT</Text>
            <Text color="white" fontWeight="semibold" fontSize="xl">0</Text>
          </VStack>
        </HStack>
      </Box>
          </Box>

          <Box bg="#2D3748" p={4} borderRadius="md" height="300px">
            <Text fontSize="lg" mb={3}>Temperatures</Text>
            <Box pl={2}>
              <HStack justify="space-between" mb={1}>
                <Text fontSize="sm" color="gray.300">Max. Module temp</Text>
                <Text fontSize="sm" fontWeight="bold" color="red.300" mr="150px">35.61°C</Text>
              </HStack>
              <HStack spacing={2} mb={3} align="flex-start">
                <Box as="svg" viewBox="0 0 44 24" boxSize={5} fill="none">
                  <path d="M16 4 V16" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <path d="M16 16 H50" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <path d="M33 13 L50 16 L33 19" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </Box>
                <Box ml="140px">
                  <Text fontSize="xs" color="gray.300">Module <b>5</b></Text>
                </Box>
              </HStack>
              <HStack justify="space-between" mb={1}>
                <Text fontSize="sm" color="gray.300">Min. Module temp</Text>
                <Text fontSize="sm" fontWeight="bold" color="blue.300" mr="150px">32.86°C</Text>
              </HStack>
              <HStack spacing={2} mb={3} align="flex-start">
                <Box as="svg" viewBox="0 0 44 24" boxSize={5} fill="none">
                  <path d="M16 4 V16" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <path d="M16 16 H50" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <path d="M33 13 L50 16 L33 19" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </Box>
                <Box ml="140px">
                  <Text fontSize="xs" color="gray.300">Module <b>2</b></Text>
                </Box>
              </HStack>
              <HStack justify="space-between" mt={2}>
                <Text fontSize="sm" color="gray.300">Average Module temp</Text>
                <Text fontSize="sm" fontWeight="bold" color="gray.100" mr="150px">34.20°C</Text>
              </HStack>
            </Box>
          </Box>
        </VStack>

        {/* Column 2: String */}
        <Box bg="#2D3748" p={4} borderRadius="md" height="618px">
          <Text fontWeight="bold" fontSize="md" mb={4}>String</Text>
          <VStack spacing={6} align="start">
            {['S02.M01', 'S02.M02', 'S02.M03', 'S02.M04', 'S02.M05'].map((mod) => (
              <Text key={mod} color="gray.300">{mod}</Text>
            ))}
          </VStack>
        </Box>

        {/* Column 3: Connect String */}
       <Box
  bg="#2D3748"
  p={6}
  borderRadius="md"
  color="white"
  w="250px"
  h="618px"
  ml="-10px"
>
  {/* Connect String Section */}
  <Text fontWeight="bold" mb={2}>Connect String</Text>
  <VStack align="start" spacing={2}>
    <Button size="sm" colorScheme="blue" w="200px">Connect String</Button>
    <Button size="sm" bg="gray.600" _hover={{ bg: "gray.500" }} w="200px">Disconnect String</Button>
  </VStack>

  {/* Enable String Section */}
  <Text fontWeight="bold" mt={6} mb={2}>Enable String</Text>
  <VStack align="start" spacing={2}>
    <Button size="sm" colorScheme="blue" w="200px">Enable String</Button>
    <Button size="sm" bg="gray.600" _hover={{ bg: "gray.500" }} w="200px">Disable String</Button>
  </VStack>

  {/* Connected/Enabled Status */}
  <VStack align="start" spacing={1} mt={6}>
    <HStack>
      <Button size="xs" bg="limegreen" borderRadius="full" minW="16px" h="16px" p={0} _hover={{ bg: "limegreen" }} />
      <Text fontSize="sm">CONNECTED</Text>
    </HStack>
    <HStack>
      <Button size="xs" bg="limegreen" borderRadius="full" minW="16px" h="16px" p={0} _hover={{ bg: "limegreen" }} />
      <Text fontSize="sm">ENABLED</Text>
    </HStack>
  </VStack>

  {/* STATUS Section */}
  <Text fontWeight="bold" mt={8} mb={4}>STATUS</Text>
  <SimpleGrid columns={2} spacingY={2} spacingX={2}>
    {([
      ['green.400', 'No failure'],
      ['purple.400', 'Fuse open'],
      ['gray.300', 'Button pushed'],
      ['gray.300', 'Contactor fail'],
      ['gray.300', 'String ground'],
      ['gray.300', 'Precharge fail'],
      ['gray.300', 'Fault'],
      ['gray.300', 'String fault'],
      ['gray.300', 'Voltage range'],
      ['', 'StringNot enabled'] // right side only
    ] as [string, string][]).map(([color, label], idx) => (
      label ? (
        <HStack key={idx} spacing={2}>
          <Button
            size="xs"
            bg={color || "transparent"}
            borderRadius="full"
            minW="14px"
            h="14px"
            p={2}
            _hover={{ bg: color || "transparent" }}
          />
          <Text fontSize="xs" color="gray.200">{label}</Text>
        </HStack>
      ) : <Box key={idx} />
    ))}
  </SimpleGrid>
</Box>


        {/* Column 4: String Events */}
        <Box bg="#2D3748" p={6} borderRadius="md" height="618px" overflowY="auto">
          <Text fontWeight="bold" mb={4} fontSize="md">String Events</Text>
          <SimpleGrid columns={2} spacingY={3} spacingX={3}>
            {[
              'Comm error', 'SoC Max alarm', 'Temp. alarm', 'SoC Max warning',
              'Temp. warning', 'Voltage warning', 'Charge alarm', 'Temp alarm',
              'Charge warning', 'Contactor error', 'Fan error', 'Ground fault',
              'Dischg alarm', 'Door error', 'Dischg warning', 'Reserved 1',
              'Volt alarm', 'Other warning', 'Volt warning', 'Reserved 2',
              'SoC Min alarm', 'Config alarm', 'SoC Min warning', 'Config warning'
            ].map((e, idx) => (
              <HStack key={idx} spacing={2} align="center">
                <Box w="10px" h="10px" bg="gray.400" borderRadius="full" flexShrink={0} />
                <Text fontSize="xs" color="gray.200" noOfLines={1}>{e}</Text>
              </HStack>
            ))}
          </SimpleGrid>
        </Box>
      </Grid>

      {/* Bottom Row */}
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
        <Box bg="#2D3748" p={4} borderRadius="md" height="250px">
          <Text fontWeight="bold" mb={3}>Modules</Text>
          {[...Array(5)].map((_, i) => (
            <HStack key={i} justify="space-between" fontSize="sm" py={1} borderBottom="1px solid #4A5568">
              <Text w="80px">S02.M0{i + 1}</Text>
              <HStack spacing={4} w="full" justify="space-between">
                <HStack spacing={1}><Text color="orange.300">28.6 °C</Text><Text fontSize="xs" color="gray.400">Max.</Text></HStack>
                <HStack spacing={1}><Text color="green.300">3.80 V</Text><Text fontSize="xs" color="gray.400">Max.</Text></HStack>
                <HStack spacing={1}><Text color="pink.300">64.3 %</Text><Text fontSize="xs" color="gray.400">SoC</Text></HStack>
                <Text>35.6 DoD</Text>
                <HStack spacing={1}><Text color="green.200">100.00 %</Text><Text fontSize="xs" color="gray.400">SoH</Text></HStack>
                <Text color="gray.400" fontWeight="bold">...</Text>
              </HStack>
            </HStack>
          ))}
        </Box>

        <Box bg="#2D3748" p={4} borderRadius="md" height="250px">
          <Text fontWeight="bold" mb={3} fontSize="lg">Analogs</Text>
          <HStack align="start" justify="space-between" spacing={10}>
            <VStack align="start" spacing={3}>
              <HStack spacing={2}><Text fontSize="sm">String voltage:</Text><Text color="green.300" fontWeight="semibold">632.50 V</Text></HStack>
              <HStack spacing={2}><Text fontSize="sm">String current:</Text><Text color="teal.300" fontWeight="semibold">-50.00 A</Text></HStack>
            </VStack>
            <VStack align="start" spacing={3}>
              <HStack spacing={2}><Text fontSize="sm">Max. Cell voltage:</Text><Text color="pink.400" fontWeight="semibold">3.84 V</Text><Text fontSize="sm">Module <b>4</b></Text></HStack>
              <HStack spacing={2}><Text fontSize="sm">Min. Cell voltage:</Text><Text color="blue.300" fontWeight="semibold">3.68 V</Text><Text fontSize="sm">Module <b>2</b></Text></HStack>
              <HStack spacing={2}><Text fontSize="sm">Average Cell voltage:</Text><Text fontWeight="semibold">3.76 V</Text></HStack>
            </VStack>
          </HStack>
        </Box>
      </Grid>
    </Box>
  );
};

export default StringDashboard;
