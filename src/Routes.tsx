import './Routes.css';
import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Form from '@/pages/form/form';
import Nav from './components/Nav';
import Home from './pages/home/home';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/form",
    element: <Form />
  }
]);

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Nav />
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default AppRoutes;