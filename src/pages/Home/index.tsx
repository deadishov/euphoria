import React from 'react';
import { Header } from '../../components/Header';
import { MainSlider } from '../../components/MainSlider';
import slidesArr from '../../data/slidesArr.json';
import promoArr from '../../data/promo.json';
import arrivalArr from '../../data/arrival.json'
import { PromoBlock } from '../../components/PromoBlock';
import { Container, List } from '@mui/material';
import styles from './Home.module.scss'
import { ArrivalBlock } from '../../components/ArrivalBlock';

export const Home: React.FC = () => {
    const filtredArr = slidesArr.filter(slide => slide.id < '6')

    return (
        <>
            <Header />
            <MainSlider list={filtredArr} />
            <Container>
                <List sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: {
                        md: 'row',
                        sm: 'column',
                        xs: 'column'
                    },
                    gap: '30px',
                    pt: {
                        sm: '8.125rem',
                        xs: '4.0625rem'
                    },
                    pb: {
                        sm: '100px',
                        xs: '50px'
                    },
                }}>
                    {promoArr.map((block) => (
                        <PromoBlock block={block} />
                    ))}
                </List>
                <h3 className={styles.sectionTitle}>
                    New Arrival
                </h3>
            </Container>
            <ArrivalBlock list={arrivalArr} />
        </>
    )
}
