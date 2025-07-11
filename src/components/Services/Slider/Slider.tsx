import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import { sliderDataImages } from './Slider.data';
import Image from 'next/image';

export function Slider() {
  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={2.5}
      freeMode={true}
      navigation
      scrollbar={{ draggable: true }}
      modules={[Navigation, Scrollbar]}
      className="h-[240px] md:h-[320px] w-[300px] md:w-[500px]"
    >
      {sliderDataImages.map(({ id, urlImage }) => (
        <SwiperSlide key={id} className="rounded-lg overflow-hidden">
          <Image
            src={`/assets/houses/${urlImage}`}
            alt="House"
            width={200}
            height={700}
            className="w-auto h-auto rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}