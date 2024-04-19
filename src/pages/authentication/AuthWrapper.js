import PropTypes from 'prop-types';

// material-ui
import { Box} from '@mui/material';

// project import
import AuthCard from './AuthCard';
import Logo from 'components/Logo';
// assets
import AuthBackground from 'assets/images/auth/AuthBackground';

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //

const AuthWrapper = ({ children }) => (
  <Box>
    <AuthBackground />
    <div className='mt-[10px] ml-[10px]'>
      <Logo/>
    </div>
    <div className='mt-[200px] xl:mx-[35%] mx-[0%] md:mx-[20%]'>
    <AuthCard>{children}</AuthCard>
    </div>
  </Box>
);

AuthWrapper.propTypes = {
  children: PropTypes.node
};

export default AuthWrapper;
