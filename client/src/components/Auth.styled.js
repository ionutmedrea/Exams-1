import styled from "styled-components";
import {Link} from "react-router-dom"


export const FancyForm = styled.form`
display: flex;
flex-direction: column;
margin: 2%;
`;

export const Wrapper = styled.div`
  margin: ${props => props.REGISTER ? "2% 10% 5% 10%" : "5% 10% 2% 10%"};
  background: linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(255,243,190,0.7) 46%, rgba(255,227,107,0.7) 100%);
  text-align: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.3);
`;

export const InnerWrapper = styled.div`
  margin: 2% 5% 2% 5%;
`;

export const AuthText = styled.h1`
  font-size: ${props => props.HEADER ? "1.5em" : props.BUTTON ? "0.9em" : "1em"}
`;

export const InputWrapper = styled.div`
text-align: center;
`;
export const FancyInput = styled.input`
  height: 20px;
  background-color: rgba(255,255,255,0.3);
  border: 2px solid rgba(0,0,0,0.5);
  border-radius: 10px;
  width: 25%;
  margin: 2%;
  transition: 0.5s;
  
  &:hover{
    background-color: rgba(255,255,255,0.6);
    border: 2px solid rgba(0,0,0,0.7);
    transform: scale(1.1,1.1);
  }
  
  &:focus{
  outline: none;
  }
`;

export const ButtonWrapper = styled.div`
text-align: center;
`;
export const FancyButton = styled.button`
  background-color: orangered;
  width: 15%;
  border: 2px solid rgba(0,0,0,0.7);
  border-radius: 15px;
  transition: 0.5s;
  &:hover{
    transform: scale(1.1,1.1);
    cursor: pointer;
  }
`;

export const FancyLink = styled(Link)`
  text-decoration: none;
  color: rgba(0,0,0,0.6);
  transition: 0.5s;
  
  &:hover{
    color: rgba(0,0,0,0.9);
  }
`;


export const ContainerWrapper = styled.div`
position:absolute;
background-image: url("https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80");
background-position: center center;
background-repeat: no-repeat;
background-size: cover;

height: 100vh;
width: 100%;
`;
