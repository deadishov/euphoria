import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import slidesArr from './slidesArr.json'
import styles from './Slider.module.scss'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

export const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {slidesArr.map((slide) => (
                <SwiperSlide >
                    <img className={styles.slideImg} src={slide.image} alt="slide" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}