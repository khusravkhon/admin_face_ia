import { useRoutes, Navigate } from 'react-router-dom';

import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import CameraRoutes from './CameraRoutes';
import Main from './main';

export default function ThemeRoutes() {
  const access_token = JSON.parse(localStorage.getItem('token'));

  const routes = useRoutes(
    access_token == null
      ? [
          ...CameraRoutes(),
          ...LoginRoutes(),
          ...Main(),
          { path: '/', element: <Navigate to="/" /> },
          { path: '*', element: <Navigate to="/" /> }
        ]
      : [
          ...CameraRoutes(),
          ...MainRoutes(),
          ...Main(),

          { path: '/', element: <Navigate to="/admin" /> },
          { path: '*', element: <Navigate to="/admin" /> }
        ]
  );
  return routes;
}
