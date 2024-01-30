import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '@/App.tsx';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />
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