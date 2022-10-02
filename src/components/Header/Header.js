import * as React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import AppsIcon from '@mui/icons-material/Apps';
import ListItemIcon from '@mui/material/ListItemIcon';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import Divider from '@mui/material/Divider';
import HeaderApp from './HeaderApp';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Tooltip } from '@mui/material';
import MenuAppList from './MenuAppList'
import './Header.css'
// import { roleUserBeneficiarie } from '../../Utils/Utils'

import {
  ToggleSideBar,
  removeToken,  
  getRememberMenuLocalStorage,
  roleUserBeneficiarie
} from './HeaderUtils';


const Header = ({ title, listApp = [], notification }) => {

  var navigate = useNavigate()  

  const [openMenu, setOpenMenu] = React.useState(getRememberMenuLocalStorage());
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleClick = (event) => {
    let remember = getRememberMenuLocalStorage()
    setOpenMenu(remember ? remember : !openMenu)
  };

  // Change open or close apps Menus
  window.addEventListener('click', function (e) {
    let remember = getRememberMenuLocalStorage()
    let listIds = []

    e.path.map((i) => {
      if (i.id) {
        listIds.push(i.id)
      }
    })
    if (listIds.includes('menu-apps')) {
      return
    }
    if (listIds.includes('basic-menu')) {
      return
    }
    if (!remember && openMenu)
      setOpenMenu(false)

  });

  const handleProfileMenuOpen = (event) => {
    let remember = getRememberMenuLocalStorage()
    if (!remember && openMenu) setOpenMenu(false)
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleExit = () => {
    removeToken()
    navigate("/")
    window.location.reload()
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      onClose={handleMenuClose}
      anchorEl={anchorEl}
      open={isMenuOpen}
      id={menuId}
      keepMounted      
      style={{ marginTop: '7px', marginLeft: '10px' }}
    >
      <div style={{ minWidth: '200px' }}>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <FolderSharedIcon fontSize="small" />
          </ListItemIcon>
          Perfil
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => handleExit()}>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          Sair
        </MenuItem>
      </div>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      onClose={handleMobileMenuClose}
      anchorEl={mobileMoreAnchorEl}
      open={isMobileMenuOpen}
      id={mobileMenuId}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="small"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Perfil</p>
      </MenuItem>
      <MenuItem onClick={handleClick}>
        <IconButton
          size="small"
          aria-haspopup="true"
          color="inherit"
        >
          <AppsIcon />
        </IconButton>
        <p>Módulos</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className='header-app-bar' position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => ToggleSideBar()}
          >
            <Tooltip title='Menu'>
              <MenuIcon />
            </Tooltip>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            {title}
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' }, marginRight: '15px' }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <Badge color="error" badgeContent={ notification.notificationUnread }>
                <Tooltip title='Notificações'>
                  <NotificationsIcon onClick={ notification.onClick } />
                </Tooltip>
              </Badge>
            </IconButton>
          </Box>

          <Box id='menu-apps' sx={{ display: { xs: 'none', md: 'flex' } }}>
            {!roleUserBeneficiarie() && <IconButton
              id="app-menu"
              size="large"
              edge="start"
              color="inherit"
              aria-label="Módulos"
              onClick={handleClick}
            >
              <Tooltip title='Aplicativos'>

                <AppsIcon />
              </Tooltip>
            </IconButton>}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Tooltip title='Usuário'>
                <AccountCircle />
              </Tooltip>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <MenuAppList open={openMenu} >
        <section className="grid grid-template-columns-4">
          {
            listApp.map((item, index) =>
              <HeaderApp key={index} title={item.title}
                onClick={() => {
                  navigate(item.link)
                  window.location.reload()
                }} />
            )
          }
        </section>
      </MenuAppList>
    </Box >
  );
}

export default React.memo(Header)

