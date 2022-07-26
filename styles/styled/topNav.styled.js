import styled from "styled-components";

export const Topbar = styled.div`
  
  background: #171717;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;

  .logo{
    height: 58px;
  }

  .nav{
    list-style: none;
    display: flex;
    gap: 20px;
    li{
      cursor: pointer;
      a{
        padding: 10px 20px;
      }
      &:hover{
        color: #5ec7d1;
      }
    }
  }

`