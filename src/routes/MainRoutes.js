import { lazy } from 'react';

import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

const User = Loadable(lazy(() => import('pages/user')));
// const Access = Loadable(lazy(() => import('pages/access')));

const MainRoutes = () => {
  return [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/admin',
          element: <User />
        },
        // {
        //   path: '/access',
        //   element: <Access />
        // },
        {
          path: 'dashboard',
          children: [
            {
              path: 'default',
              element: <User />
            }
          ]
        }
      ]
    }
  ];
};

export default MainRoutes;
