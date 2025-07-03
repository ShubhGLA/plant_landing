import { Routes, Route, useSearchParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Dashboard from "./Dashboard/Index";
import BatteryBank1Dashboard from "./components/BatteryBank1Dashboard";
import BatteryBank2Dashboard from "./components/BatteryBank2Dashboard";
import StringDashboard from "./components/StringDashboard";
import BessControl from "./Dashboard/BessControl";
import DSMdashboard from "./Dashboard/DSMdashboard";
import AlarmDashboard from "./Dashboard/AlarmDashboard";
import ReportDashboard from "./Dashboard/ReportDashboard";
import ReportTemplateDashboard from "./Dashboard/ReportTemplateDashboard";
import SLDDashboard from "./Dashboard/SLDDashboard"; 

const ReportRouter = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");

  if (tab === "template") {
    return <ReportTemplateDashboard />;
  }
  return <ReportDashboard />;
};

const App = () => {
  return (
    <Box>
      <Navbar />
      <Box>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/battery-bank-1" element={<BatteryBank1Dashboard />} />
          <Route path="/battery-bank-2" element={<BatteryBank2Dashboard />} />
          <Route path="/battery-bank-1/string/:id" element={<StringDashboard />} />
          <Route path="/battery-bank-2/string/:id" element={<StringDashboard />} />
          <Route path="/bess-control" element={<BessControl />} />
          <Route path="/dsm" element={<DSMdashboard />} />
          <Route path="/alarms/latest" element={<AlarmDashboard />} />
          <Route path="/alarms/history" element={<AlarmDashboard />} />
          <Route path="/report" element={<ReportRouter />} />
          <Route path="/sld" element={<SLDDashboard />} /> 
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
