import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/Layouts/MainLayout';
import AuthLayout from './components/Layouts/AuthLayout';
import AdminLayout from './components/Layouts/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Register from './pages/Register';
import Login from './pages/Login';
import ShopServices from './pages/ShopServices';
import Admin from './pages/Admin';

import './css/App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="properties" element={<Properties />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="shop-services" element={<ShopServices />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Protected Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
