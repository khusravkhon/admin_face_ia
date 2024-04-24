import { ButtonBase } from '@mui/material';


import Logo from './Logo';


const LogoSection = ({ sx }) => {
  return (
    <ButtonBase
      disableRipple
      sx={sx}
    >
      <Logo />
    </ButtonBase>
  );
};

export default LogoSection;
