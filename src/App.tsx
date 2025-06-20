import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Highcharts from "highcharts";

Highcharts.setOptions({
  accessibility: {
    enabled: false,
  },
});

// Components & Pages
import Navbar from "./components/NavBar";
import Dashboard from "./Dashboard/Index";
import BatteryBank1Dashboard from "./components/BatteryBank1Dashboard";
import BatteryBank2Dashboard from "./components/BatteryBank2Dashboard";
import StringDashboard from "./components/StringDashboard";
import BessControl from "./Dashboard/BessControl";
import DSMdashboard from "./Dashboard/DSMdashboard";
import PowerFlowDashboard from "./Dashboard/PowerFlowDashboard"; // ✅ Corrected import path

const App = () => {
  return (
    <Box m={0} p={0} bg="gray.900" color="white" minH="100vh">
      <Navbar />
      <Box px={4} py={4}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/battery-bank-1" element={<BatteryBank1Dashboard />} />
          <Route path="/battery-bank-2" element={<BatteryBank2Dashboard />} />
          <Route path="/battery-bank-1/string/:id" element={<StringDashboard />} />
          <Route path="/battery-bank-2/string/:id" element={<StringDashboard />} />
          <Route path="/bess-control" element={<BessControl />} />
          <Route path="/dsm" element={<DSMdashboard />} />
          <Route path="/power-flow" element={<PowerFlowDashboard />} /> {/* ✅ New route */}
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
