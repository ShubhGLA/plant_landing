import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Index';
import BatteryBank1Dashboard from './components/BatteryBank1Dashboard';
import StringDashboard from './components/StringDashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/battery-bank-1" element={<BatteryBank1Dashboard />} />
      <Route path="/battery-bank-1/string/:id" element={<StringDashboard />} />
    </Routes>
  );
};

export default App;
