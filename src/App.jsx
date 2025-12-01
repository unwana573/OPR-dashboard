import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Rootlayout';
import Dashboard from './pages/Dashboard';
import HallManagement from './pages/HallManagement';
import CostAnalysis from './pages/CostAnalysis';
import ScreenScheduling from './pages/ScreenScheduling';
import PricingStrategy from './pages/PricingStrategy';
import Settings from './pages/Settings';
import NotFound from './pages/Notfound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          
          <Route path="management">
            <Route index element={<Dashboard />} />  
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="hall" element={<HallManagement />} />
            <Route path="infrastructure" element={<NotFound />} />
            <Route path="staff" element={<NotFound />} />
            <Route path="inventory" element={<NotFound />} />
          </Route>

          
          <Route path="analysis">
            <Route path="cost" element={<CostAnalysis />} />
            <Route path="footfall" element={<NotFound />} />
            <Route path="spatial" element={<NotFound />} />
          </Route>
          
          <Route path="strategy">
            <Route path="scheduling" element={<ScreenScheduling />} />
            <Route path="pricing" element={<PricingStrategy />} />
          </Route>
          
          <Route path="settings" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}