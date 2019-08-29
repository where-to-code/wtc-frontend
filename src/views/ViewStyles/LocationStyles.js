import styled from 'styled-components';

export const LocationContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;

  .left-col {
    width: 60%;
    max-width: 720px;
    margin: 3px;
  }

  .desc-container {
    border: 1px solid #dbdbdb;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-bottom: 20px;
    background: whitesmoke;
  }

  .desc-container h3 {
    padding-left: 5px;
    margin-top: 0.8rem;
  }

  .img-container {
    position: relative;
    text-align: center;
    color: white;
  }

  /* Bottom right text */
  .img-container h3 {
    position: absolute;
    bottom: 0px;
    left: 16px;
    padding: 5px 10px;
    background: #03525b;
    color: white;
    opacity: 0.7;
  }

  .loc-image {
    width: 100%;
    max-width: 720px;
    height: auto;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .loc-item-container {
    padding-left: 10px;
  }

  .loc-item-container.review {
    background: white;
    display: flex;
    width: 95%;
    margin: 0 auto;
    margin-bottom: 20px;
    padding-top: 10px;
    border-radius: 5px;
    display: flex;
  }

  .right-col {
    width: 40%;
    max-width: 480px;
    margin: 3px;
  }

  .rev-desc {
    min-width: 280px;
  }

  .rev-desc h4 {
    margin: 0;
  }

  .rev-rates,
  .rev-rates.overall-review {
    min-width: 280px;
    margin-bottom: 20px;
  }

  .rev-rates.overall-review {
    width: 100%;
  }

  .small-screen {
    display: none;
  }

  /* Media screen for main form */
  @media only screen and (max-width: 900px) {
    .loc-item-container.review {
      flex-direction: column;
    }
    .right-col {
      display: none;
    }
    .left-col {
      width: 100%;
    }
    .small-screen {
      display: block;
      padding-left: 10px;
    }
    .buttons.small-screen {
      text-align: center;
    }
  }

  .rate-line {
    display: flex;
    border-bottom: 1px solid whitesmoke;
    width: 95%;
    padding: 3px;
  }

  .rate-line label {
    width: 30%;
    min-width: 100px;
  }

  .rate-count-box {
    background: #dbdbdb;
    width: 70%;
    color: white;
    font-size: 1.2rem;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .rate.bad {
    background: #ff4b2b;
    color: white;
    width: 30%;
  }

  .rate.medium {
    background: #ff9601;
    color: white;
    width: 60%;
  }

  .rate.good {
    background: #03525b;
    color: white;
    width: 100%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  img.star {
    width: 20px;
    height: auto;
    padding: 2px;
  }

  .centered {
    text-align: center;
  }

  span.extra-small {
    font-size: 0.9rem;
  }

  button {
    width: 170px;
    height: 40px;
    background-color: #56c1cb;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 10px;
    margin: 5px;
  }

  .flex {
    display: flex;
    align-content: space-between;
  }
`;
