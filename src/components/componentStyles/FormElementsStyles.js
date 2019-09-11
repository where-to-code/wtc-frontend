import styled from 'styled-components';


export const StyledButton = styled.button`
    font-size: 1rem;
    font-weight: 300;
    margin: 0 10px;
    padding: 15px;
    margin-top: 15px;
    background: none;
    border: ${props =>
    props.landing ? '0.5px solid #fff' : '0.5px solid #03525B'};
    border-radius: 5px;
    color: ${props => (props.landing ? '#fff' : '#666A7C')};
`;

export const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    background: #ffffff;
    border: 1px solid #56c1cb;
    box-sizing: border-box;
    border-radius: 5px;
    color: #666a7c;
    padding-left: 10px;
    margin: 10px 0;
`;

export const StyledTextarea = styled.textarea`
    width: 100%;
    background: #ffffff;
    border: 1px solid #56c1cb;
    box-sizing: border-box;
    border-radius: 5px;
    color: #666a7c;
    padding-left: 10px;
    margin: 10px 0;
    outline: none;
`;

export const Row = styled.div`
    display:flex;
    justify-content: space-between;
`;