import './Routes.css';
import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Form from '@/pages/form/form';
import Home from './pages/home/home';
import Layout from './components/Layout';

const routes = createBrowserRouter([
  {
    // use Layout component as top-level wrapper
    element: <Layout />,
    children: [ {
      path: "/",
      element: <Home />,
      errorElement: <p>Error</p>
    },
    {
      path: "/form",
      element: <Form />
    } ]
  }
]);

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default AppRoutes;