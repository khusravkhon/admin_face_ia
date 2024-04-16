// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { Route } from '../node_modules/react-router-dom/dist/index';
// import Camera from '../src/pages/camera/Camera';
import Login from 'pages/authentication/Login';
import MainLayout from 'layout/MainLayout';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <ThemeCustomization>
    <ScrollTop>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainLayout />} />
        </Route>
      </Routes>
    </ScrollTop>
  </ThemeCustomization>
);

export default App;
