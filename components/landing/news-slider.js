import { Swiper, SwiperSlide } from "swiper/react";
import { SliderNews } from "../../styles/styled/newsSlider.styled";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";


const NewsSlider = ({ data }) => {
  // console.log(data.story.content.section_blocks[1].slide_items);
  return (
    <SliderNews>
      <h2 className='sub-header'> The Latest News From AXON</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={80}
        slidesPerView={3.6}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={false}
      >
        {
          data.story.content.section_blocks[1].slide_items.map((slide) => (
            <SwiperSlide>
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