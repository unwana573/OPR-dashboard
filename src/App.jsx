import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Rootlayout';
import Dashboard from './pages/Dashboard';
import HallManagement from './pages/HallManagement';
import InfrastructureAudit from './pages/InfrastructureAudit';
import StaffManagement from './pages/StaffManagement';
import InventoryManagement from './pages/InventoryManagement';
import CostAnalysis from './pages/CostAnalysis';
import FootfallAnalysis from './pages/FootfallAnalysis';
import SpatialAnalysis from './pages/SpatialAnalysis';
import ScreenScheduling from './pages/ScreenScheduling';
import PricingStrategy from './pages/PricingStrategy';
import Settings from './pages/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          
          <Route path="management">
            <Route path="hall" element={<HallManagement />} />
            <Route path="infrastructure" element={<InfrastructureAudit />} />
            <Route path="staff" element={<StaffManagement />} />
            <Route path="inventory" element={<InventoryManagement />} />
          </Route>
          
          <Route path="analysis">
            <Route path="cost" element={<CostAnalysis />} />
            <Route path="footfall" element={<FootfallAnalysis />} />
            <Route path="spatial" element={<SpatialAnalysis />} />
          </Route>
          
          <Route path="strategy">
            <Route path="scheduling" element={<ScreenScheduling />} />
            <Route path="pricing" element={<PricingStrategy />} />
          </Route>
          
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}