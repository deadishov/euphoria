import React from 'react'

import { AppBar, Badge, Box, Button, TextField, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
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




export const Header = () => {
    const [state, setState] = React.useState(false);

    const toggleDrawer = () =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setState(!state);
        };

    const list = () => (
        <>
            <Box
                sx={{ minWidth: '200px', color: '#807D7E' }}
                role="presentation"
                onClick={toggleDrawer()}
                onKeyDown={toggleDrawer()}
            >
                <List >
                    {['Shop', 'Men', 'Women', 'Combos', 'Joggers'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton className={styles.burgerLink}>
                                <ListItemText sx={{ textAlign: 'center' }} primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Favorites', 'Profile', 'Cart'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton className={styles.burgerLink} >
                                <ListItemIcon>
                                    {index === 0 && <img src={favSvg} alt="favorites" />}
                                    {index === 1 && <img src={userSvg} alt="user" />}
                                    {index === 2 && <img src={cartSvg} alt="cart" />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Box>
            <Box className={styles.burgerSearch} sx={{ justifyContent: 'center', pt: '10px' }} >
                <TextField
                    color='secondary'
                    sx={{ maxWidth: '80%' }}
                    label="Search"
                    variant="standard" />
            </Box>
        </>
    );

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
        backgroundColor: '#ffffff',
        position: 'static'
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
                        <div>
                            {(['right'] as const).map((anchor) => (
                                <React.Fragment key={anchor}>
                                    <Button onClick={toggleDrawer()}><MenuIcon sx={{ color: '#000' }} /></Button>
                                    <Drawer
                                        anchor={anchor}
                                        open={state}
                                        onClose={toggleDrawer()}
                                    >
                                        {list()}
                                    </Drawer>
                                </React.Fragment>
                            ))}
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

