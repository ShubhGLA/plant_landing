import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard'; // Uses 'Dashboard/index.tsx'
import BatteryBank1Dashboard from './components/BatteryBank1Dashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/battery-bank-1" element={<BatteryBank1Dashboard />} />
    </Routes>
  );
};

export default App;
