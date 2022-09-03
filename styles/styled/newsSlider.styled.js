import styled from "styled-components";

export const SliderNews = styled.div`
  background: #000;
  padding: 30px 0;
  
  .swiper-slide{
    border: 1px solid #4d4d4d;
    padding: 20px;
    min-height: 300px;
    display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:baseline;
  }

  .swiper-slide{
    /* margin-left: 100px; */
    /* margin: 0 10px; */
    transition:all .3s ease-in-out;
  }

  .slide-left_offset{
    transform: translate(60px, 0);
  }

  .swiper-button-next, .swiper-button-prev{
    background: #000;
    border: 1px solid #4a4a4a;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    &::after{
      transform: scale(0.5);
      color: #fff;
     
    }
  }

  .swiper-slide-next{
    /* margin-right: 40px !important; */
    transform: translate(40px, 0);
  }
  .swiper-slide-prev{
    /* margin-right: 40px !important; */
    transform: translate(-40px, 0);
  }

  .swiper-slide-active{
    background: #fff;
    color: #000;
  }

  .swiper-button-next{
    right: calc(50% - ((260px * .5) + 20px + 60px));
  }
  .swiper-button-prev{
    left: calc(50% - ((260px * .5) + 20px + 60px));
  }

  .slide_desc{
    h4{
      font-size: 23px;
      font-weight: 400;

    }
  }
  .slide_img{
    /* width: 100%; */
    height: 40px;
  }
`