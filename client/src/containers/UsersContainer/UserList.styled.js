import styled from "styled-components"

export const UserListStyled = styled.div`
padding: 2%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const UserContainer = styled.div`
background-image: url("https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
background-repeat: no-repeat;
background-size: cover;
background-position: center center;

height: auto;
width: 100%;
  
  display: flex;
  flex-direction: column;
`;

export const SearchBarWrapper = styled.div`
margin: 2%;
text-align: center;
display: flex;
flex-direction: column;
`;

export const SearchWrapper = styled.div`
display: block;
text-align: center;
`;

export const CustomSearchInput = styled.input`
    width: 25%;
    height: 30px;
    text-align: center;
    color: rebeccapurple;
    border-radius: 35px;
    border:2px solid rgba(0,0,0,0.5);
    transition: 0.4s;
    font-size: 1.2vw;
`;


export const FancySelectWrapper = styled.div`
margin: 2%;
`;

export const FancyFilterWrapper = styled.div`
text-align: center;
`;
export const FancyLabel = styled.label`
font-size: 1.3em;
font-weight: bold;
`;

export const FancySelect = styled.select`
border: none;
width: 15%;
height: 25px;
border-radius: 10px;
font-size: 1.2em;
`;
