import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import heroimage from '../Assets/banner.png';
import heroimage2 from '../Assets/banner2.png';
import heroimage3 from '../Assets/banner3.png';
import heroimage4 from '../Assets/banner4.png';
import heroimage5 from '../Assets/banner5.png';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./crausel.css";
import { Autoplay, Pagination, Navigation } from "swiper";

import { Box } from '@chakra-ui/react'
export default function Autocrausel() {
  return (
    <Box h={'350px'} w={'400px'}  ml={'100px'} p={'5px'}>
      <Swiper
     
     
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
            <img src={heroimage}></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src={heroimage2}></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src={heroimage3}></img> </SwiperSlide>
        <SwiperSlide>
        <img src={heroimage4}></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src={heroimage5} />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}