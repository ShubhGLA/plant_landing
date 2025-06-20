import { Box, Flex, VStack, useBreakpointValue } from "@chakra-ui/react";
import DSMGraph from "../components/DSMGraph";
import ControlRecommendation from "../components/ControlRecommendation";
import HistoricalDataTable from "../components/HistoricalDataTable";
import DSMStatsCard from "../components/DSMStatsCard";
import SOCDisplay from "../components/SOCDisplay";

export default function DSMdashboard() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="gray.900" color="white" p={[4, 6]} minH="100vh" overflow="auto">
      <Flex
        direction={isMobile ? "column" : "row"}
        gap={6}
        align="stretch"
        wrap="wrap"
      >
        {/* Left Panel */}
        <VStack
          align="stretch"
          flex={isMobile ? "none" : 2}
          spacing={4}
          w={isMobile ? "100%" : "65%"}
        >
          <DSMGraph />
          <ControlRecommendation />
          <HistoricalDataTable />
        </VStack>

        {/* Right Panel */}
        <VStack
          align="stretch"
          flex={isMobile ? "none" : 1}
          spacing={4}
          w={isMobile ? "100%" : "35%"}
        >
          <DSMStatsCard />
          <SOCDisplay />
        </VStack>
      </Flex>
    </Box>
  );
}
