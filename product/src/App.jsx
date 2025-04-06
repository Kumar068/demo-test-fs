import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import AdminPanel from "./pages/AdminPanel";
import Footer from "./components/Footer";
// Import info pages
import CustomerService from "./pages/info/CustomerService";
import ShippingInfo from "./pages/info/ShippingInfo";
import AboutUs from "./pages/info/AboutUs";
import OurStory from "./pages/info/OurStory";
import Careers from "./pages/info/Careers";
import ContactUs from "./pages/info/ContactUs";
import StoreLocator from "./pages/info/StoreLocator";
import ReturnsExchanges from "./pages/info/ReturnsExchanges";
import SizeGuide from "./pages/info/SizeGuide";
import Sustainability from "./pages/info/Sustainability";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/admin" element={<AdminPanel />} />
          {/* Info pages routes */}
          <Route path="/customer-service" element={<CustomerService />} />
          <Route path="/shipping" element={<ShippingInfo />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/stores" element={<StoreLocator />} />
          <Route path="/returns" element={<ReturnsExchanges />} />
          <Route path="/size-guide" element={<SizeGuide />} />
          <Route path="/sustainability" element={<Sustainability />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
