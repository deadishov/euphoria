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
import 'swiper/css';


export const Slider = () => {
    const swiperRef = useRef<SwiperType>();

    return (
        <div>
            <Swiper className={styles.swiperWrapper}
                modules={[Navigation, Pagination, Scrollbar]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                slidesPerView={1}
                spaceBetween={50}

            >
                {slidesArr.map((slide) => (
                    <SwiperSlide style={{ backgroundImage: `url(${slide.image})` }} className={styles.slide} key={slide.id}>
                    </SwiperSlide>
                ))}
                <div className={styles.sliderNav}>
                    <img className={styles.arrowLeft} src={arrowLeft} onClick={() => swiperRef.current?.slidePrev()} alt='arrow' />
                    <img className={styles.arrowRight} src={arrowRight} onClick={() => swiperRef.current?.slideNext()} alt='arrow' />
                </div>
            </Swiper>
        </div>
    );
};