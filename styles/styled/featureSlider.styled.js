import styled from "styled-components";

export const SliderFeatureStyle = styled.div`

  .swiper-button-next, .swiper-button-prev{
    background: #FFD700;
    width: 70px;
    height:70px;
    border-radius: 50%;
    &::after{
      transform: scale(0.5);
      color: #000;
    }
  }

  .swiper-button-next{
    right: calc(50% - ((491px * .5) + 79px + 60px));
  }
  .swiper-button-prev{
    left: calc(50% - ((491px * .5) + 79px + 60px));
  }



  .slide_img{
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  
  .slide_desc{
    visibility: hidden;
    text-align: center;
    margin-top: 20px;
  }

  .swiper-slide-active{
    .slide_desc{
      visibility: visible;
    }
  }

`