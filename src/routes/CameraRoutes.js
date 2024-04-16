import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

const Camera = Loadable(lazy(() => import('pages/camera/Camera')));
const ErrorPage = Loadable(() => import('./error-page'));

const CameraRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/camera',
      element: <Camera />
    },
    {
      path: '*',
      element: <ErrorPage />
    }
  ]
};

export default CameraRoutes;
