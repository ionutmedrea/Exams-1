import styled from "styled-components";
import {Link} from "react-router-dom";

export const HomePageWrapper = styled.div`
background-image: url("https://images.unsplash.com/photo-1542587227-8802646daa56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
background-position: center center;
background-size: cover;
background-repeat: no-repeat;

width: 100%;
height: 100vh;
`;


export const HomeWrapper = styled.div`
margin: 0;
padding: 0;
`;


export const Navbar = styled.ul`
display: flex;
flex-direction: row;

justify-content: space-evenly;

margin: 0;
padding: 0;

background-color: rgba(0,0,0,1);
border-bottom: 1px solid rgba(0,0,0,0.2);

color: white;
text-decoration: none;
`;

export const NavItem = styled.li`
list-style: none;
font-size: 1.1em;
color: white;
`;

export const WrappMeTenderly = styled.div`
margin: 0;
padding:0;
`;

export const PenWrapper = styled.div`
text-align:center;
margin-top:50%;
cursor: default;
`;

export const FancyImage = styled.img`
opacity: 95%;
width: 55%;
height: 100%;
cursor: pointer;
transition: 0.4s;


  &:hover{
    animation: shake 1.2s;
    
    animation-iteration-count: infinite;
    
    @keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
  }
`;


export const StartPageWrapper = styled.div`
position: absolute;
margin-left: 55%;
padding: 0;
`;

export const FancyLink = styled(Link)`
text-decoration: none;
color: transparent;
`;
