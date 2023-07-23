import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import arrowRight from '../../assets/img/arrowRight.svg'
import arrowLeft from '../../assets/img/arrowLeft.svg'
import arrowRightDisabled from '../../assets/img/rightDisabled.svg'
import arrowLeftDisabled from '../../assets/img/leftDisabled.svg'
import styles from './MainSlider.module.scss'
import { Container } from '@mui/system';
import React from 'react';

type Slide = {
    id: string,
    image: string,
    headline: string
}

export const MainSlider: React.FC<{ list: Slide[] }> = ({ list }) => {
    const swiperRef = useRef<SwiperType>();
    const [slideCount, setSlideCount] = React.useState(1)


    const slideNext = () => {
        swiperRef.current?.slideNext()
    }

    const slidePrev = () => {
        swiperRef.current?.slidePrev()
    }

    const filtredArr = list.filter(slide => slide.id < '6')

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
                {filtredArr.map((slide) => (
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
                            <h1 className={styles.slideHeadline}>{slide.headline}</h1 >
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
                        className={Number(slideCount) === filtredArr.length ? styles.arrowRightDisabled : styles.arrowRight}
                        src={Number(slideCount) === filtredArr.length ? arrowRightDisabled : arrowRight}
                        onClick={slideNext}
                        alt='arrow'
                    />
                </div>
                <div className={styles.scrollbarWrapper}>
                    <div style={{ width: `${String(filtredArr.length * 63)}px` }} className={styles.scrollbar}>
                        <div style={slideCount === 1 ? { transform: 'translateX(0)' } : { transform: `translateX(${(slideCount - 1) * 100}%)` }} className={styles.roller}></div>
                    </div>
                </div>
            </Swiper>
        </div >
    );
};