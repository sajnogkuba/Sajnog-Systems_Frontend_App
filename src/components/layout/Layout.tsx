import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer.tsx';
import Header from '../header/Header.tsx';

const Layout = () => {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
