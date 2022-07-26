import styled from "styled-components";

export const BlogItem = styled.div`
  cursor: pointer;
  h4{
    font-size: 18px;
    margin-bottom: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 50px;
  }
  img{
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
  }
  p{
    margin-top: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #929292;

  }

`