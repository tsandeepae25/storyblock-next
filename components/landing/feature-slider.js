import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { getStoryblokApi } from "@storyblok/react";
import { useEffect, useState } from "react";
import { SliderFeatureStyle } from "../../styles/styled/featureSlider.styled";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
const FeatureSlider = ({ data }) => {


  console.log(data.story.content.section_blocks[0].slide_items);


  return (
    <SliderFeatureStyle>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        slidesPerGroupSkip={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={false}
      >

        {/* <SwiperSlide>
          <Image src="/slide-1.jpg" width="300" height="200" layout="responsive" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/slide-2.jpg" width="300" height="200" layout="responsive" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/slide-1.jpg" width="300" height="200" layout="responsive" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/slide-2.jpg" width="300" height="200" layout="responsive" />
        </SwiperSlide> */}

        {
          data.story.content.section_blocks[0].slide_items.map((slide) => (
            <SwiperSlide>
              <img className="slide_img" src={slide.slider_img} width="300" height="200" layout="responsive" />
              <div className="slide_desc">
                <h2>Test Desc</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, deleniti?</p>
              </div>
            </SwiperSlide>
          ))
        }


      </Swiper>

      <br />
      <br />
      <br />
      <br />
    </SliderFeatureStyle>
  );
}

export default FeatureSlider;


