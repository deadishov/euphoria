import { AppBar, Badge, Box, Link, Toolbar } from '@mui/material'
import logoSvg from '../../assets/img/logo.svg'
import searchSvg from '../../assets/img/search.svg'
import userSvg from '../../assets/img/user.svg'
import favSvg from '../../assets/img/favorite.svg'
import cartSvg from '../../assets/img/cart.svg'


import styles from './Header.module.scss'

export const Header = () => {
    return (
        <Box>
            <AppBar sx={{
                boxShadow: 'none',
                pl: '102px',
                pr: '101px',
                pt: '31px',
                pb: '32px',
                backgroundColor: '#ffffff'
            }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img src={logoSvg} alt="LOGO" />
                    <Box sx={{ color: '#807D7E', display: 'flex', alignItems: 'center', gap: '40px' }}>
                        <Link href='#' underline='none' color='inherit'>
                            Shop
                        </Link>
                        <Link href='#' underline='none' color='inherit'>
                            Men
                        </Link>
                        <Link href='#' underline='none' color='inherit'>
                            Women
                        </Link>
                        <Link href='#' underline='none' color='inherit'>
                            Combos
                        </Link>
                        <Link href='#' underline='none' color='inherit'>
                            Joggers
                        </Link>
                    </Box>
                    <div className={styles.searchWrapper}>
                        <input className={styles.search} placeholder='Search' type="text" />
                        <img className={styles.searchImg} src={searchSvg} alt="search-icon" />
                    </div>
                    <Box sx={{ display: 'flex', gap: '12px' }}>
                        <Badge sx={{ cursor: 'pointer' }} >
                            <img src={favSvg} alt="" />
                        </Badge>
                        <Badge sx={{ cursor: 'pointer' }} >
                            <img src={userSvg} alt="" />
                        </Badge>
                        <Badge sx={{ cursor: 'pointer' }} >
                            <img src={cartSvg} alt="" />
                        </Badge>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

