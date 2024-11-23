import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Our Platform (Auth)</h1>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
