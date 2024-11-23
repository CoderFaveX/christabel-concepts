import { Outlet } from 'react-router-dom';
import Navbar from '../NavBar';

const MainLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
