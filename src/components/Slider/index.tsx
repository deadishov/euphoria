import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import slidesArr from './slidesArr.json'
import arrowRight from '../../assets/img/arrowRight.svg'
import arrowLeft from '../../assets/img/arrowLeft.svg'
import './Slider.module.scss'
import styles from './Slider.module.scss'
import { Container } from '@mui/system';
import React from 'react';

export const Slider = () => {
    const swiperRef = useRef<SwiperType>();
    const [firstSlide, setFirstSlide] = React.useState(true)

    const slideNext = () => {
        swiperRef.current?.slideNext()
        setFirstSlide(false)
    }

    const slidePrev = () => {
        swiperRef.current?.slidePrev()
        setFirstSlide(true)
    }

    return (
        <div>
            <Swiper className={styles.swiperWrapper}
                modules={[Navigation, Scrollbar]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                // scrollbar={{ draggable: true }}
                slidesPerView={1}
                spaceBetween={50}

            >
                {slidesArr.map((slide) => (
                    <SwiperSlide style={{ backgroundImage: `url(${slide.image})`, display: 'flex', alignItems: 'center' }} className={styles.slide} key={slide.id}>
                        <Container sx={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                            {slide.id === '1' && <h3 className={styles.slideTitle}>T-shirt / Tops</h3>}
                            <h1 className={styles.slideHeadline}>{slide.id === '1' ? `Summer \n Value Pack` : `Don't miss\n SALES!`}</h1 >
                            {slide.id === '1' && <h3 className={styles.slideTitle}>cool / colorful / comfy</h3>}
                            <div>
                                <button className={styles.slideButton}>{slide.id === '1' ? 'Shop Now' : `Let's go!`}</button>
                            </div>
                        </Container>
                    </SwiperSlide>
                ))}
                <div className={styles.sliderNav}>
                    <img className={styles.arrowLeft} src={arrowLeft} onClick={slidePrev} alt='arrow' />
                    <img className={styles.arrowRight} src={arrowRight} onClick={slideNext} alt='arrow' />
                </div>
                <div className={styles.scrollbarWrapper}>
                    <div className={styles.scrollbar}>
                        <div style={firstSlide ? { transform: 'translateX(0)' } : { transform: 'translateX(100%)' }} className={styles.roller}></div>
                    </div>
                </div>
            </Swiper>
        </div>
    );
};