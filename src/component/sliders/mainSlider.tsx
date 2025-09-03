import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import Button from '../ui/button'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Slide {
  title: string
  text: string
  image: string
  link: string
}

const slides: Slide[] = [
  {
    title: 'Суперсемейка',
    text: 'Одна защита для всей семьи!',
    image: 'https://scm.tias.bima.tj/images/vzrs/1699089326.png',
    link: '/boxes/supersemeyka',
  },
  {
    title: 'Автострахование',
    text: 'Оформите полис без визита в офис!',
    image: 'https://scm.tias.bima.tj/images/vzrs/1713526968.png',
    link: '/auto/',
  },
  {
    title: 'Онлайн калькулятор по страхованию путешествующих',
    text: 'Рассчитай стоимость своей поездки',
    image: 'https://scm.tias.bima.tj/images/vzrs/1699089939.png',
    link: '/travel-order',
  },
]

export const MainSlider = () => {
  return (
    <div className="relative w-full bg-[rgba(197,194,194,0.15)] bg_img select-none">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={index} className="h-[500px]">
            <div className="w-full flex flex-col md:flex-row items-center justify-between py-8 px-6 md:px-20 relative">
              <div className="w-full md:w-[300px] mb-8 z-10">
                <h2 className="text-3xl font-bold text-gray-800 text-[1.4rem] md:text-[2.4rem]">
                  {slide.title}
                </h2>
                <p className="mt-4 text-gray-600 mb-10">{slide.text}</p>
                <Button variant="primary">Подробнее</Button>
              </div>

              <div className="flex-shrink-0 img z-10">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="max-h-[400px] object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
