import styled from "styled-components";

export const SliderFeatureStyle = styled.div`

  .swiper-button-next, .swiper-button-prev{
    background: #FFD700;
    width: 50px;
    height:50px;
    border-radius: 50%;
    &::after{
      transform: scale(0.5);
      color: #000;
    }
  }

  .slide_img{
    width: 100%;
    height: 100%;
  }
  
  .slide_desc{
    visibility: hidden;
    text-align: center;
    margin-top: 20px;
  }

  .swiper-slide-next{
    .slide_desc{
      visibility: visible;
    }
  }

`