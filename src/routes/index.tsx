import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '~/pages/Home';
import { paths } from './paths';
import Map from '~/pages/Map';

export default function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: paths.home,
      element: <Home />,
      children: [{ path: paths.map, element: <Map /> }],
    },
  ]);
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
        // v7_relativeSplatPath: true,
        // v7_fetcherPersist: true,
        // v7_normalizeFormMethod: true,
      }}
    />
  );
}
