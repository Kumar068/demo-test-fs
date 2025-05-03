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
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import UserLogin from './pages/auth/UserLogin';
import AdminLogin from './pages/auth/AdminLogin';
import UserManagement from './pages/UserManagement';
import ShippingAddress from "./components/user/ShippingAddress";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="app">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/login" element={<UserLogin />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
              {/* Info pages routes */}
              <Route path="/customer-service" element={<CustomerService />} />
              <Route path="/shipping" element={<ShippingInfo />} />
              <Route path="/shipping-address" element={<ShippingAddress />} />
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
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
