import styled from 'styled-components';

export const StyledCard = styled.div`
  transition: 0.2s;
  margin: 10px 5px;
  width: 100%;
  height: 340px;
  box-shadow: -1px 1px 5px 1px rgba(219, 219, 219, 1);
  background-color: rgba(219, 219, 219, 0.35);
  border-radius: 5px;
  transition: 0.2s;

  &:hover {
    box-shadow: ${props =>
      props.active ? '-1px 1px 5px 5px rgba(86, 193, 203, 0.5)' : 'none'};
    transition: 0.2s;
    transform: ${props => (props.active ? 'scale(1.05)' : 'scale(1)')};
  }

  .desc {
    text-align: center;
    padding: 10px;
    h4 {
      font-size: 18px;
      font-weight: bolder;
      color: #666a7c;
    }
    div {
      margin: 10px auto;
      font-size: 16px;
      line-height: 18px;
      color: #666a7c;
    }
  }
  img {
    width: 100%;
    height: 230px;
    border-radius: 5px 5px 0 0;
  }
  @media (min-width: 450px) {
    width: 85%;
  }
  @media (min-width: 600px) {
    width: 300px;
  }
`;
