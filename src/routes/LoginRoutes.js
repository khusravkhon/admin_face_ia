import { lazy } from 'react';

import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRecover = Loadable(lazy(() => import('pages/authentication/Register')));

const LoginRoutes = () => {
  return [
    {
      path: '/',
      element: <MinimalLayout />,
      children: [
        {
          path: '/login',
          element: <AuthLogin />
        },
        {
          path: '/authRecover',
          element: <AuthRecover />
        }
      ]
    }
  ];
};

export default LoginRoutes;
