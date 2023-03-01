import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar.jsx';

const Layout = () => (
  <div className="wrapper">
    <Navbar />
    <Outlet />
  </div>
);
export default Layout;
