import { lazy } from 'react';

import Loadable from 'components/Loadable';
// import MinimalLayout from 'layout/MinimalLayout';

const Camera = Loadable(lazy(() => import('pages/camera/Camera')));

const CameraRoutes = () => {
  return [
    {
      path: '/',
      element: <Camera />,
      children: [
        {
          path: '/camera',
          element: <Camera />
        }
      ]
    }
  ];
};

export default CameraRoutes;
