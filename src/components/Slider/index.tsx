import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import slidesArr from './slidesArr.json'
import arrowRight from '../../assets/img/arrowRight.svg'
import arrowLeft from '../../assets/img/arrowLeft.svg'
import arrowRightDisabled from '../../assets/img/rightDisabled.svg'
import arrowLeftDisabled from '../../assets/img/leftDisabled.svg'
import './Slider.module.scss'
import styles from './Slider.module.scss'
import { Container } from '@mui/system';
import React from 'react';

export const Slider = () => {
    const swiperRef = useRef<SwiperType>();
    const [slideCount, setSlideCount] = React.useState(1)


    const slideNext = () => {
        swiperRef.current?.slideNext()
    }

    const slidePrev = () => {
        swiperRef.current?.slidePrev()
    }

    return (
        <div>
            <Swiper
                onSlideNextTransitionStart={() => setSlideCount(slideCount + 1)}
                onSlidePrevTransitionStart={() => setSlideCount(slideCount - 1)}
                className={styles.swiperWrapper}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                slidesPerView={1}
                spaceBetween={50}
            >
                {slidesArr.map((slide) => (
                    <SwiperSlide
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        className={styles.slide}
                        key={slide.id}>
                        <Container
                            className={styles.slideContent}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '40px',
                                maxWidth: {
                                    xl: '1200px',
                                    lg: '1000px',
                                    md: '760px',
                                    sm: '630px'
                                }
                            }}>
                            {slide.id === '1' && <h3 className={styles.slideTitle}>T-shirt / Tops</h3>}
                            <h1 className={styles.slideHeadline}>{slide.id === '1' ? `Summer Value Pack` : `Don't miss SALES!`}</h1 >
                            {slide.id === '1' && <h3 className={styles.slideTitle}>cool / colorful / comfy</h3>}
                            <div>
                                <button className={styles.slideButton}>{slide.id === '1' ? 'Shop Now' : `Let's go!`}</button>
                            </div>
                        </Container>
                    </SwiperSlide>
                ))}
                <div className={styles.sliderNav}>
                    <img
                        className={slideCount === 1 ? styles.arrowLeftDisabled : styles.arrowLeft}
                        src={Number(slideCount) === 1 ? arrowLeftDisabled : arrowLeft}
                        onClick={slidePrev}
                        alt='arrow'
                    />
                    <img
                        className={Number(slideCount) === slidesArr.length ? styles.arrowRightDisabled : styles.arrowRight}
                        src={Number(slideCount) === slidesArr.length ? arrowRightDisabled : arrowRight}
                        onClick={slideNext}
                        alt='arrow'
                    />
                </div>
                <div className={styles.scrollbarWrapper}>
                    <div className={styles.scrollbar}>
                        <div style={slideCount === 1 ? { transform: 'translateX(0)' } : { transform: 'translateX(100%)' }} className={styles.roller}></div>
                    </div>
                </div>
            </Swiper>
        </div >
    );
};