import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import b1 from "../images/b1.jpg";
import b2 from "../images/b2.jpg";
import b3 from "../images/b3.jpg";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
  const imageStyle = {
    width: '100%',
    height: '500px', // Set the desired height
    objectFit: 'cover', // Ensures the image covers the area while maintaining aspect ratio
  };

  return (
    <>
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
        <SwiperSlide>
          <img src={b1} alt="Slide 1" style={imageStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={b2} alt="Slide 2" style={imageStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={b3} alt="Slide 3" style={imageStyle} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
