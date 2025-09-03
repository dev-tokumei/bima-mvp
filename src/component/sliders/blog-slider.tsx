import { Swiper, SwiperSlide } from 'swiper/react'
import { blogs } from '../../models/blog'

export const BlogSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={6}
      breakpoints={{
        1280: { slidesPerView: 3 },
        1024: { slidesPerView: 2 },
        768: { slidesPerView: 1 },
        480: { slidesPerView: 1 },
        0: { slidesPerView: 1 },
      }}
      simulateTouch={true}
      touchRatio={1}
    >
      {blogs.map((blog, index) => (
        <SwiperSlide key={index} className="border-[0.5px] border-[#fbbe0780]">
          <a href={blog.link}>
            <div className="main-blog__article-img">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="mt-3 px-3 h-[100px]">
              <span className="mt-3 text-[12px] text-[#ccc]">{blog.date}</span>
              <h4 className="pt-3 line-clamp-2">{blog.title}</h4>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
