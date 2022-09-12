import styled from "styled-components";
// import 'antd/dist/antd.css';

export const FeatureSlideMobile = styled.div`
  width: 100%;
  margin: 0 auto;

 .header {
  background-color: white;
  cursor: pointer;
  display: block;
  font-weight: bold;
  padding: 0.5rem;
  width: 100%;
}



.stick-acc{
    background: #cfc;
    color: #000;
    position: relative;
   
    .stick-acc__header{
      background: #ffc;
      position: sticky;
      height: 60px;
      width: 100%;
      display: block;
      border-top: 1px solid;

      cursor: pointer;
      z-index: 2;
      opacity: 1;
    }
    .stick-acc__content{
      background: #ccf;
      height: 100vh;
      position: sticky;
    }
  }

  .passed{
    .stick-acc__header{
      visibility: hidden;
    }
    .stick-acc__header_sc{
      visibility: visible;
    }
  }

  .stick-acc__header_sc{
    visibility: hidden;
    background: #ffc;

      height: 60px;
      width: 100%;
      display: block;
      border-top: 1px solid;
      cursor: pointer;
      z-index: 2;
  }




  .sc-view-top{
    position: absolute;
    width: 100%;
    transform: translate(0, -100%);
  }
  
` 