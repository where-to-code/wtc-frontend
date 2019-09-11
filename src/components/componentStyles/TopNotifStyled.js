import styled from 'styled-components';

export const StyledTopNotif = styled.div`
    cursor:pointer;
    display: ${props => (props.display ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    height: 22px;
    width: 22px;
    background: #EB5757;
    border:1px solid #EB5757;
    border-radius: 50%;
    margin-right:10px;
    div{
      font-size: .8rem;
      font-weight: bold;
      color:white;
      text-align:center;
    }
`;
