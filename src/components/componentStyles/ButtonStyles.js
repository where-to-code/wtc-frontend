import styled from 'styled-components';

export const StyledButton = styled.button`
    font-size: 1rem;
    font-weight: 300;
    margin: 0 10px;
    padding: 15px;
    background: none;
    border: ${props =>
    props.landing ? '0.5px solid #fff' : '0.5px solid #03525B'};
    border-radius: 5px;
    color: ${props => (props.landing ? '#fff' : '#666A7C')};
`;