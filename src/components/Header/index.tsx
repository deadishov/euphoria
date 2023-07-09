import { AppBar, Badge, Box, Toolbar, Typography } from '@mui/material'
import logoSvg from '../../assets/img/logo.svg'
import searchSvg from '../../assets/img/search.svg'
import userSvg from '../../assets/img/user.svg'
import favSvg from '../../assets/img/favorite.svg'
import cartSvg from '../../assets/img/cart.svg'
import styles from './Header.module.scss'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



export const Header = () => {

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
            sm: '3.5rem',
            xs: '3.5rem'
        },
        pr: {
            xl: '5rem',
            lg: '3.5rem',
            md: '3.5rem',
            sm: '3.5rem',
            xs: '3.5rem'
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
                            <a href='#' className={styles.headerLink}>Shop</a>
                            <a href='#' className={styles.headerLink}>Men</a>
                            <a href='#' className={styles.headerLink}>Women</a>
                            <a href='#' className={styles.headerLink}>Combos</a>
                            <a href='#' className={styles.headerLink}>Joggers</a>
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
                            <Badge sx={badgeStyles} >
                                <img src={favSvg} alt="Badge" />
                            </Badge>
                            <Badge sx={badgeStyles} >
                                <img src={userSvg} alt="Badge" />
                            </Badge>
                            <Badge sx={badgeStyles} >
                                <img src={cartSvg} alt="Badge" />
                            </Badge>
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
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <img style={{ cursor: 'pointer' }} src={logoSvg} alt="LOGO" />
                        <div className={styles.searchWrapper}>
                            <input className={styles.search} placeholder='Search' type="text" />
                            <img className={styles.searchImg} src={searchSvg} alt="search-icon" />
                        </div>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

