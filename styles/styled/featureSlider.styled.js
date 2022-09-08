import styled from "styled-components";

export const SliderFeatureStyle = styled.div`

  .swiper-button-next, .swiper-button-prev{
    background: transparent;
    width: 50%;
    border-radius: initial;
    top: 22px;
    height: 100%;
    &::after{
      transform: scale(0.5);
      display: none;
    }
  }

  .swiper-button-next{
    right:0;  
    cursor: url(b_next.svg), auto;

  }
  .swiper-button-prev{
    left: 0;
    
    cursor: url(b_prev.svg), auto;


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

  .swiper-slide{
    /* cursor: url(b_next.svg), auto; */
  }

  .swiper-slide-active{
    .slide_desc{
      visibility: visible;
    }
  }

`