import { Box, Grid, Heading, HStack } from '@chakra-ui/react';
import BatteryStatusCard from '../components/BatteryStatusCard';
import EnergyFlowCard from '../components/EnergyFlowCard';
import BatteryHealthCard from '../components/BatteryHealthCard';
import GridAndOptimizationCard from '../components/GridAndOptimizationCard';
import AlertsCard from '../components/AlertsCard';
import BatteryBankCard from '../components/BatteryBankCard';
import BessPowerChart from '../components/BessPowerChart'; 
import SocAvgChart from '../components/SocAvgChart'; 
import InverterTable from '../components/InverterTable'; 
import BatteryTempChart from '../components/BatteryTempChart'; 

const Dashboard = () => {
  return (
    <Box bg="gray.900" minH="100vh" color="white" px={4} py={6}>
      <Box
        maxW="1270px"
        mx="auto"
        bg="gray.800"
        borderRadius="lg"
        p={6}
        shadow="lg"
      >
        {/* SECTION 0: Heading & Time */}
        <HStack justify="space-between" mb={6} flexWrap="wrap">
          <Heading size="md" mb={{ base: 2, md: 0 }}>
            Battery Energy Storage System (BESS – Dashboard)
          </Heading>
          <Box fontSize="sm" opacity={0.7}>
            03:17 PM &nbsp;&nbsp; 04/24/2024
          </Box>
        </HStack>

        {/* SECTION 1: BESS Cards */}
        <Grid
          templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={6}
          mb={6}
        >
          <Box gridColumn={{ base: '1', md: '1 / span 1' }}>
            <BatteryStatusCard />
          </Box>
          <Box gridColumn={{ base: '1', md: '2 / span 2' }}>
            <EnergyFlowCard />
          </Box>

          <Box gridColumn="1">
            <BatteryHealthCard />
          </Box>
          <Box gridColumn={{ base: '1', md: '2 / span 2' }}>
            <GridAndOptimizationCard />
          </Box>

          <Box gridColumn={{ base: '1', sm: '1 / span 2', md: '1 / span 3' }}>
            <AlertsCard />
          </Box>
        </Grid>

        {/* SECTION 2: Battery Bank + Inverters */}
        <Box display="flex" gap={6} flexWrap="wrap" mt={6}>
          {/* Left column - Battery Bank + SOC + Temp Chart */}
          <Box
            width="500px"
            display="flex"
            flexDirection="column"
            gap={4}
            flexShrink={0}
          >
            <BatteryBankCard
              title="Battery Bank 1"
              connected={10}
              disabled={0}
              voltage={623.6}
              current={33.5}
              tempLow={27.54}
              tempHigh={31.75}
            />
            <BatteryBankCard
              title="Battery Bank 2"
              connected={12}
              disabled={2}
              voltage={620.4}
              current={34.1}
              tempLow={26.9}
              tempHigh={30.8}
            />

            {/*SOC + Temp Chart*/}
<Box display="flex" gap={4} flexWrap="nowrap">
  <Box flex="1" minW="500px" h="250px">
    <SocAvgChart />
  </Box>
  <Box flex="2" minW="700px">
    <BatteryTempChart />
  </Box>
</Box>
          </Box>

          {/* Right column - Inverter Table */}
          <Box flex="1" minW="0">
            <InverterTable />
          </Box>
        </Box>

        {/* 🔹 SECTION 3: Main Power Graph */}
        <Box mt={6}>
          <BessPowerChart />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
