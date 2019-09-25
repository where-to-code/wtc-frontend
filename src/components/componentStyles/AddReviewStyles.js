import styled from 'styled-components';

export const StyledAddReview = styled.div`
    display: ${props => (props.isShown ? 'block' : 'none')};
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    
    p {
        position: relative;
        bottom: 530px;
        left: 215px;
        color: #0000008a;
        font-size: 2rem;
    }
    span {
        text-align: center
    }
`

export const StyledAddRating = styled.div`
    margin: 10px auto;
    font-size: 16px;
    width: 60%;

`
