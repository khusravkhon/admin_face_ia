import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const Main = Loadable(lazy(() => import('pages/dashboard/main.js')));
const User = Loadable(lazy(() => import('pages/user')));
const Access = Loadable(lazy(() => import('pages/access')));
const ErrorPage = Loadable(() => import('./error-page'));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/main',
      element: <Main />
    },
    {
      path: '*',
      element: <ErrorPage />
    },
    {
      path: '/user',
      element: <User />
    },
    {
      path: '/access',
      element: <Access />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <Main />
        }
      ]
    }
  ]
};

export default MainRoutes;
