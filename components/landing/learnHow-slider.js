import { LearnHowSlider } from "../../styles/styled/learnHowSlider.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const LearnHow = ({ data }) => {
  // console.log(data.story.content.section_blocks[2].slide_items);

  return (
    <LearnHowSlider>
      <h2 className='sub-header'> Learn how Axon can help <br /> make your world safer</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={60}
        slidesPerView={1.5}
        loop={true}
        navigation
        scrollbar={false}
      >

        {
          data.story.content.section_blocks[2].slide_items.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="slide-container">
                <div className="slide_desc">
                  <span>{slide.slider_feature_text}</span>
                  <h4>{slide.slider_title}</h4>
                  <p>{slide.slider_desc}</p>
                  <button>{slide.button_text}</button>
                </div>
                <img className="slide_img" src={slide.slider_img} layout="responsive" />
              </div>

            </SwiperSlide>
          ))
        }
      </Swiper>
      <br />
      <br />
      <br />
    </LearnHowSlider>
  );
}

export default LearnHow;