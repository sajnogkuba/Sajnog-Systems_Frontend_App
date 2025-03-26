import { Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout.tsx';
import Home from '../pages/Home.tsx';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
