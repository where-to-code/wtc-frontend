import styled from 'styled-components';

export const StyledOverlayPopup = styled.div`
position: fixed; /* Sit on top of the page content */
display: none; /* Hidden by default */;
justify-content: center;
align-items: center;
text-align:center;
width: 100%; /* Full width (cover the whole page) */
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.5); /* Black background with opacity */
z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
cursor: pointer; /* Add a pointer on hover */
.message-container{
    padding: 20px;
    border:1px solid #E5E5E5;
    text-align:center;
    background:white;
    width: 50%;
    min-width: 300px;
    border-radius:10px;
    color: #666A7C;
}
h3{
    font-size: 1.5rem;
    padding-bottom:20px;
    color: #03525B;
}
.actions-row{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
}
.ok, .resend{
    font-size: 1rem;
    padding:15px;
    border:1px solid #56C1CB;
    border-radius: 5px;
    color: #03525B;
}
.ok{
    border:none;
    font-weight:bold;
}

`;