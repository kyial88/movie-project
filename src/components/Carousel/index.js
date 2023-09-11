import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';

const Carousel = ({movies}) => {
    return (

    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
    >
        {
             movies.results?.map(movie =>
                <SwiperSlide key={movie.id}>
                    <div className={'swiper-box'}>
                        <img className={'backdrop-img'} src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt="" />
                        <div className={'carousel-sticker'}>
                            <h3>{movie.title}</h3>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </SwiperSlide>
            )
        }
    </Swiper>
    );
};

export default Carousel;