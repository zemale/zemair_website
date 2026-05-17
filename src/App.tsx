import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Philosophy from './pages/Philosophy';
import Catalog from './pages/Catalog';
import Store from './pages/Store';
import ProductDetail from './pages/ProductDetail';
import Technology from './pages/Technology';
import AirQuality from './pages/AirQuality';
import Sustainability from './pages/Sustainability';
import Support from './pages/Support';
import Privacy from './pages/Privacy';
import Manuals from './pages/Manuals';
import Sales from './pages/Sales';
import Press from './pages/Press';
import FAQ from './pages/FAQ';
import UserManual from './pages/UserManual';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/store" element={<Store />} />
          <Route path="/catalog/:id" element={<ProductDetail />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/air-quality" element={<AirQuality />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/manuals" element={<Manuals />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/press" element={<Press />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/user-manual" element={<UserManual />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
