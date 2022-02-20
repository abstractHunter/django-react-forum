import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem
} from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';


const navlinks = [
    {
        name: "Log In",
        link: "signin",
    },
    {
        name: "Log Up",
        link: "signup",
    },
    {
        name: "Home",
        link: "/",
    },
]
const settings = [
    {
        id: 1,
        name: "Profile",
        link: "/",
    },
    {
        id: 2,
        name: "Account",
        link: "/",
    },
    {
        id: 3,
        name: "DashBoard",
        link: "/",
    },
]

const Header = () => {
    const {user, logoutUser} = useContext(AuthContext)
    
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        LOGO
                        {/* <Link to="/">LOGO</Link> */}
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >

                        <MenuIcon />
                            </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            { user ? (
                                    navlinks.slice(2).map((navlink, key) => (
                                        <MenuItem key={key} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">
                                                <Link to={navlink.link} >{navlink.name}</Link>
                                            </Typography>
                                        </MenuItem>
                                    ))
                                ) : (
                                    navlinks.slice(0, 2).map((navlink, key) => (
                                        <MenuItem key={key} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">
                                                <Link to={navlink.link} >{navlink.name}</Link>
                                            </Typography>
                                        </MenuItem>
                                    ))
                                )
                            }
                        </Menu>
                    </Box>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LOGO
                        {/* <Link to="/">LOGO</Link> */}
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        { user ? (
                            navlinks.slice(2).map((navlink, key) => (
                                <Button
                                    key={key}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    <Link to={navlink.link} >{navlink.name}</Link>
                                </Button>
                            ))
                        ) : (
                            navlinks.slice(0, 2).map((navlink, key) => (
                                <Button
                                    key={key}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    <Link to={navlink.link} >{navlink.name}</Link>
                                </Button>
                            ))
                        )
                    
                        }
                    </Box>
                    
                    {
                        user && (
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                {settings.map((setting) => (
                                    <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">
                                            <Link to={setting.link}>{setting.name}</Link>
                                        </Typography>
                                    </MenuItem>
                                ))}
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">
                                            <span onClick={logoutUser}>Logout</span>
                                        </Typography>
                                    </MenuItem>
                                </Menu>
                            </Box>
                        )
                    }
                    
                </Toolbar>
            </Container>
        </AppBar>
    );
};


export default Header;
