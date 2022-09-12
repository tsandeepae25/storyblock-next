import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { getStoryblokApi } from "@storyblok/react";
import { useEffect, useState } from "react";
import { SliderFeatureStyle } from "../../styles/styled/featureSlider.styled";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { FeatureSlideMobile } from "../../styles/styled/featureSliderMobile.styled";
import { List, ListHeader, ListItem } from "react-scrollable-accordion/dist";
import FeatureMobileSlider from "./featureSliderMobile";
import AccordianMobile from "./protectLifeAcc";




const FeatureSlider = ({ data }) => {


  // console.log(data.story.content.section_blocks[0].slide_items);





  return (
    <>
      <SliderFeatureStyle>
        <h2 className='sub-header'>Protect Life, Truth and Justice</h2>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={2.05}
          centeredSlides={true}
          loop={true}
          navigation
          scrollbar={false}
        >

          {
            data.story.content.section_blocks[0].slide_items.map((slide, i) => (
              <SwiperSlide key={i}>
                <img className="slide_img" src={slide.slider_img} layout="responsive" />
                <div className="slide_desc">
                  <h2>Test Desc</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, deleniti?</p>
                </div>

              </SwiperSlide>
            ))
          }

        </Swiper>

      </SliderFeatureStyle>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* <FeatureMobileSlider data={data.story.content.section_blocks[0]} /> */}

      <AccordianMobile />
    </>
  );
}

export default FeatureSlider;


