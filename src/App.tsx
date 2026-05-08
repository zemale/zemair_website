import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Technology from './pages/Technology';
import AirQuality from './pages/AirQuality';
import Sustainability from './pages/Sustainability';
import Support from './pages/Support';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<ProductDetail />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/air-quality" element={<AirQuality />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
