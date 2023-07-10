import React from 'react'

import { AppBar, Badge, Box, InputBase, Toolbar } from '@mui/material'
import { alpha, styled, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import logoSvg from '../../assets/img/logo.svg'
import searchSvg from '../../assets/img/search.svg'
import userSvg from '../../assets/img/user.svg'
import favSvg from '../../assets/img/favorite.svg'
import cartSvg from '../../assets/img/cart.svg'
import styles from './Header.module.scss'

const drawerWidth = 200;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


export const Header = () => {

    const [open, setOpen] = React.useState(false)
    const theme = useTheme();


    const drawerOpen = () => {
        setOpen(true)
    }

    const drawerClose = () => {
        setOpen(false)
    }

    const badgeStyles = {
        cursor: 'pointer',
        background: '#F6F6F6',
        p: '.65rem',
        borderRadius: '8px',
    }

    const appBarStyles = {
        boxShadow: 'none',
        pl: {
            xl: '5rem',
            lg: '3.5rem',
            md: '3.5rem',
            sm: '1.5rem',
            xs: '1.5rem'
        },
        pr: {
            xl: '5rem',
            lg: '3.5rem',
            md: '3.5rem',
            sm: '1.5rem',
            xs: '1.5rem'
        },
        pt: '31px',
        pb: '32px',
        backgroundColor: '#ffffff'
    }

    return (
        <>
            <Box sx={{
                display: {
                    md: 'flex',
                    xs: 'none',
                }
            }}>
                <AppBar sx={appBarStyles}>
                    <Toolbar sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: {
                            xl: 0,
                            lg: 0,
                            md: 0,
                            sm: 0
                        }
                    }}>
                        <img style={{ cursor: 'pointer' }} src={logoSvg} alt="LOGO" />
                        <div className={styles.linksWrapper}>
                            {['Shop', 'Men', 'Women', 'Combos', 'Joggers'].map((text) => (
                                <a href='#' key={text} className={styles.headerLink}>{text}</a>
                            ))}
                        </div>
                        <div className={styles.searchWrapper}>
                            <input className={styles.search} placeholder='Search' type="text" />
                            <img className={styles.searchImg} src={searchSvg} alt="search-icon" />
                        </div>
                        <Box sx={{
                            display: {
                                md: 'flex',
                                sm: 'none'
                            },
                            gap: {
                                lg: '.75rem',
                                md: '.5rem',
                                sm: '.375rem',
                                xs: '.25rem'
                            }
                        }}>
                            {['1', '2', '3'].map((obj) => (
                                <Badge key={obj} sx={badgeStyles} >
                                    {obj === '1' && <img src={favSvg} alt="Badge" />}
                                    {obj === '2' && <img src={userSvg} alt="Badge" />}
                                    {obj === '3' && <img src={cartSvg} alt="Badge" />}
                                </Badge>
                            ))}

                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{
                display: {
                    md: 'none',
                    xs: 'flex',
                }
            }}>
                <AppBar
                    sx={appBarStyles}>
                    <Toolbar sx={{
                        color: '#000',
                        display: 'flex',
                        justifyContent: {
                            sm: 'space-between',
                            xs: 'space-around'
                        },
                        alignItems: 'center',
                        padding: 0
                    }}>
                        <img style={{ cursor: 'pointer' }} src={logoSvg} alt="LOGO" />
                        <div className={styles.searchWrapper}>
                            <input className={styles.search} placeholder='Search' type="text" />
                            <img className={styles.searchImg} src={searchSvg} alt="search-icon" />
                        </div>
                        <IconButton
                            onClick={drawerOpen}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ ...(open && { opacity: '0', transition: 'opacity 0.2s', cursor: 'default' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                            },
                        }}
                        variant="persistent"
                        anchor="right"
                        open={open}
                    >
                        <DrawerHeader>
                            <IconButton onClick={drawerClose}>
                                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>
                        </DrawerHeader>
                        <Divider />
                        <List>
                            {['Shop', 'Men', 'Women', 'Combos', 'Joggers'].map((text) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton sx={{ textAlign: 'center' }}>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {['Favorites', 'Profile', 'Cart'].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {
                                                index === 0 && <img src={favSvg} alt="favs" /> ||
                                                index === 1 && <img src={userSvg} alt="user" /> ||
                                                index === 2 && <img src={cartSvg} alt="cart" />
                                            }
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <Search sx={{ mt: '10px' }}>
                            <SearchIconWrapper>
                                <SearchIcon sx={{ opacity: '0.3' }} />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Drawer>
                </AppBar>
            </Box>
        </>
    )
}

