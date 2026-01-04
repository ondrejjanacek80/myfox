import { MouseEvent, useState } from 'react';
import {
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants';

const UserMenu = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMyReservations = () => {
    navigate(ROUTES.MY_RESERVATIONS);
    handleClose();
  };

  const handlePersonalData = () => {
    navigate(ROUTES.PERSONAL_DATA);
    handleClose();
  };

  return (
    <>
      <IconButton
        id="basic-button"
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: -1 }}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem sx={{ gap: 1 }}>
          <ListItemIcon>
            <AccountCircleIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <strong>Petr Zákazník</strong>
            <br />
            <small>petr@gmail.com</small>
          </ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMyReservations}>Moje rezervace</MenuItem>
        <MenuItem onClick={handlePersonalData}>Osobní údaje</MenuItem>
        <MenuItem onClick={handleClose}>Odlásit</MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
