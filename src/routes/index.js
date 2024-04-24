import { useRoutes,Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import CameraRoutes from './CameraRoutes';


export default function ThemeRoutes() {
  
  const isAuthenticated = useSelector(state => state.menu.drawerOpen);

  const mainRoutes = isAuthenticated ? MainRoutes(isAuthenticated) : [];

   const routes =  useRoutes([
     ...CameraRoutes(isAuthenticated),
     ...LoginRoutes(isAuthenticated),
     ...mainRoutes,


    { path: '/', element: <Navigate to="/login" /> },
    { path: '*', element: <Navigate to="/login" /> }
  ]);

  return routes
}