import styled from "styled-components";
export const BlogList = styled.div`
  .sub-heading{
    margin: 30px 0 50px 0;
    text-align: center;
    h3{
      text-align: center;
      font-size: 25px;
    }
    p{
      font-size: 15px;
      color: #929292;
    }
  }
      
  .blog-list{
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`
