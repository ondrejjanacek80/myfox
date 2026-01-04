import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import logo from '../assets/logo.png';
import UserMenu from './UserMenu';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, borderBottom: '5px solid #00AA22' }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Box
            display="flex"
            alignItems="center"
            gap="12px"
            sx={{ flexGrow: 1 }}
          >
            <img src={logo} alt="logo" height={26} />
            <Typography component="div">
              <strong>MYFOX</strong> REZERVAČNÍ SYSTÉM
            </Typography>
          </Box>

          <UserMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
