import styled from "styled-components";


export const LearnHowSlider = styled.div`
  margin-top: 80px;
  .sub-header{
    text-align: left !important;
  }
  .slide-container{
      display: flex;
      background: #000;
      .slide_desc{
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        span{
          text-transform: uppercase;
          font-size: 15px;
          margin-bottom: 30px;
        }
        h4{
          font-size: 27px;
          font-weight: 400;
        }
        p{
          font-size: 13px;
          margin: 20px 0;
        }

        button{
          border: none;
          padding: 10px 20px;
          border-radius: 40px;
          margin-top: auto;
          background: #fff;
          color: #000;
          font-size: 13px;
        }
      }
      .slide_img{
        width: 300px;
        height: 500px;
        object-fit: cover;
        object-position: right;
    }
  }
  .swiper-button-prev{
    display: none;
  }
  .swiper-button-next{
    right: 25%;
    background: #FFD700;
    width: 70px;
    height:70px;
    border-radius: 50%;
    &::after{
      transform: scale(0.5);
      color: #000;
    }
  }



`
