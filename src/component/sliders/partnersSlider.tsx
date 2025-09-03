import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { partners } from '../../models/partner'

export const PartnersSlider = () => {
  return (
    <div className="relative w-full py-6">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={6}
        loop={true}
        autoplay={{
          delay: 0, // без задержки
          disableOnInteraction: false,
        }}
        speed={4000}
        breakpoints={{
          1280: { slidesPerView: 6 },
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 3 },
          480: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {partners.map((partner) => (
          <SwiperSlide key={partner.id}>
            <a
              href={partner.link}
              className="flex items-center justify-center p-2"
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="max-h-16 object-contain"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
