import { Swiper, SwiperSlide } from "swiper/react";
import { SliderNews } from "../../styles/styled/newsSlider.styled";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";


const NewsSlider = ({ data }) => {
  // console.log(data.story.content.section_blocks[1].slide_items);


  return (
    <SliderNews>
      <h2 className='sub-header'> The Latest News From AXON</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3.6}
        // centeredSlides={true}
        loop={true}
        navigation
        pagination={{ type: "progressbar" }}
        scrollbar={false}

        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 10,
            centeredSlides: false,
            pagination: {
              type: 'progressbar',
            }
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
            centeredSlides: false,
            pagination: {
              type: 'progressbar',
            }
          },
          1024: {
            slidesPerView: 3.6,
            spaceBetween: 80,
            centeredSlides: true
          }
        }}
      >
        {
          data.story.content.section_blocks[1].slide_items.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="slide_desc">
                <h4>{slide.slider_desc}</h4>
              </div>
              <img className="slide_img" src={slide.slider_img} layout="responsive" />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </SliderNews>
  );
}

export default NewsSlider;


