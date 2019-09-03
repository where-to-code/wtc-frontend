import styled from 'styled-components';

export const StyledLocationBanner = styled.div`
  width: 100%;
  .banner-img {
    width: 100%;
    color: white;
    position: relative;
    img {
      width: 100%;
    }
    h3 {
      position: absolute;
      bottom: 3px;
      padding: 10px;
      background: rgba(86, 193, 203, 0.7);
      color: white;
      font-size: 18px;
    }
  }
  .banner-desc {
    width: 100%;
    background-color: #f5f5f5;
    padding: 5px 10px;
    border-radius: 0 0 5px 5px;
    div {
      margin: 5px 0;
      h3 {
        color: #03525b;
        padding: 5px 0;
        font-weight: bold;
      }
    }
  }
  @media (min-width: 600px) {
    width: 40vw;
    .banner-img {
      div {
        margin: 10px 0;
        h3 {
          font-size: 24px;
          padding: 10px 0;
        }
      }
    }
  }
`;
