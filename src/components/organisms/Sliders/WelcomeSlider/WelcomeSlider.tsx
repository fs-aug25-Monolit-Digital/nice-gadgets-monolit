import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './WelcomeSlider.css'
import { useEffect, useState } from 'react';

const BANNER_URLS = [
  '/gadgets/img/banners/WelcomeSliderBanner.png',
  '/gadgets/img/banners/WelcomeSliderBanner.png',
  '/gadgets/img/banners/WelcomeSliderBanner.png',
];

const BANNER_URLS_320 = [
  '/gadgets/img/banners/WelcomeSliderBanner320.png',
  '/gadgets/img/banners/WelcomeSliderBanner320.png',
  '/gadgets/img/banners/WelcomeSliderBanner320.png',
];

export const WelcomeSlider: React.FC = () => {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const handler = () => setIsMd(window.innerWidth > 640);
    handler();

    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <Swiper
      className="h-[352px] md:h-[220px] lg:h-[432px]"
      modules={[Navigation, Pagination]}
      pagination
      navigation={isMd}
      loop
      breakpoints={{
        640: {
        },
        1200: {},
      }}
    >
      {isMd ?
        BANNER_URLS.map((bannerPath) => {
          return (
            <SwiperSlide className="">
              <div className="md:h-[189px] bg-black lg:h-[400px]">
                <img
                  src={bannerPath}
                  alt=""
                  className="h-full mx-auto md:w-[490px] lg:w-[1040px]"
                />
              </div>
            </SwiperSlide>
          );
        })
      : BANNER_URLS_320.map((bannerPath) => {
          return (
            <SwiperSlide className="">
              <div className="h-80 bg-black md:h-[189px]">
                <img
                  src={bannerPath}
                  alt=""
                  className="h-full mx-auto lg:container"
                />
              </div>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};
