import { Box, Flex, Text } from "@chakra-ui/react";
import BessOverview from "../components/BessOverview";
import BessWidget from "../components/BessWidget";
import BatterySettings from "../components/BatterySettings";
import AnalyticsChart from "../components/AnalyticsChart";
import BarComparisonChart from "../components/BarComparisonChart";
import ManualOverridePanel from "../components/ManualOverridePanel";
import ScheduledCommandPanel from "../components/ScheduledCommandPanel";
import SmartStrategyConfig from "../components/SmartStrategyConfig";

export default function BessControl() {
  return (
    <Box bg="gray.900" color="white" p={4} minH="100vh">
      <Box maxW="1600px" mx="auto" p={4} bg="gray.800" borderRadius="md" boxShadow="md">
        <Text fontSize="2xl" fontWeight="bold" mb={6}>BESS Control Dashboard</Text>

        {/*Row 1: BessOverview + BessWidget */}
        <Box mb={6} height="360px">
          <Flex gap={4} height="100%">
            <Box width="50%" height="100%">
              <BessOverview />
            </Box>
            <Box width="50%" height="100%">
              <BessWidget />
            </Box>
          </Flex>
        </Box>

        {/*Row 2: BatterySettings + AnalyticsChart + BarComparisonChart */}
        <Box mb={6} height="380px">
          <Flex gap={4} height="100%">
            <Box width="33.33%" height="100%">
              <BatterySettings />
            </Box>
            <Box width="33.33%" height="100%">
              <AnalyticsChart />
            </Box>
            <Box width="33.33%" height="100%">
              <BarComparisonChart />
            </Box>
          </Flex>
        </Box>

        {/*Row 3: ManualOverridePanel + ScheduledCommandPanel */}
        <Box mb={6} height="600px">
          <Flex gap={4} height="100%">
            <Box width="35%" height="100%">
              <ManualOverridePanel />
            </Box>
            <Box width="65%" height="100%">
              <ScheduledCommandPanel />
            </Box>
          </Flex>
        </Box>

        {/*Row 4: SmartStrategyConfig */}
        <Box mb={2}>
          <SmartStrategyConfig />
        </Box>
      </Box>
    </Box>
  );
}
