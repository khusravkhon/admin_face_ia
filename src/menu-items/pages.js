// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';
import { ExpandOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  ExpandOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'camera',
  title: 'Камера',
  type: 'group',
  children: [
    // {
    //   id: 'login1',
    //   title: 'Login',
    //   type: 'item',
    //   url: '/login',
    //   icon: icons.LoginOutlined,
    //   target: true
    // },
    // {
    //   id: 'register1',
    //   title: 'Register',
    //   type: 'item',
    //   url: '/register',
    //   icon: icons.ProfileOutlined,
    //   target: true
    // },
    {
      id: 'camera',
      title: 'Камера',
      type: 'item',
      url: '/camera',
      icon: icons.ExpandOutlined,
      target: true
    }
  ]
};

export default pages;
