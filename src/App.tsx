// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import Dashboard from "./Dashboard/Index";
import BatteryBank1Dashboard from "./components/BatteryBank1Dashboard";
import BatteryBank2Dashboard from "./components/BatteryBank2Dashboard"; 
import StringDashboard from "./components/StringDashboard";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Box pt={4}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/battery-bank-1" element={<BatteryBank1Dashboard />} />
          <Route path="/battery-bank-2" element={<BatteryBank2Dashboard />} /> 
          <Route path="/battery-bank-1/string/:id" element={<StringDashboard />} />
          <Route path="/battery-bank-2/string/:id" element={<StringDashboard />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
