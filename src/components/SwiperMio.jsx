import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import { CardContent, Typography, Box, CardMedia } from '@mui/material'

const SwiperMio = ({ array }) => {
  return (
    <Box>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      effect="fade"
    >
      {array.map((array) => (
        <SwiperSlide key={array.id}>
           <CardMedia
          sx={{ borderRadius: '10px', width: '20%', height: '10%' }}
          component="img"
          image={array.img}
          alt={array.name}
        />
        
        </SwiperSlide>
      ))}
    </Swiper>
    </Box>
  )

}
export default SwiperMio