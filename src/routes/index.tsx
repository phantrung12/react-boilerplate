import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '~/pages/Home';
import { paths } from './paths';

export default function AppRoutes() {
  const router = createBrowserRouter(
    [
      {
        path: paths.home,
        element: <Home />,
        children: [],
      },
    ],
    {
      future: {
        v7_normalizeFormMethod: true,
        v7_fetcherPersist: true,
        v7_partialHydration: true,
        v7_relativeSplatPath: true,
        v7_skipActionErrorRevalidation: true,
      },
    },
  );
  return <RouterProvider router={router} future={{ v7_startTransition: true }} />;
}
