import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Button from '../ui/button'
import { products } from '../../models/box'

export const MibileSlider = () => {
  return (
    <Swiper
      className="mb-20"
      modules={[Autoplay]}
      navigation
      spaceBetween={20}
      autoplay={{ delay: 5000 }}
      loop
    >
      {products?.map(({ id, description, image, title }) => (
        <SwiperSlide
          key={id}
          className="w border-[0.5px] border-[#fbbe0780] overflow-hidden bg-white"
        >
          <div className="h-[127px] bg-[rgba(197,194,194,0.15)] py-5">
            <img
              className="h-full object-fill w-full"
              src={image}
              alt={image}
            />
          </div>
          <div className="flex flex-col justify-between px-3 w-full pb-5">
            <h1 className="text-[18px] font-bold pb-3">{title}</h1>
            <p className="text-[14px] filter contrast-125  text-gray-400 contrast-more:1 line-clamp-2">
              {description}
            </p>
            <div className="h-[40px] mt-1 flex items-center">
              <Button>Купить</Button>
              <Button variant="outline">Подробнее</Button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
