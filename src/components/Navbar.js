import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.nav`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: transperent;
    z-index: 3;
    padding: 49px 71px !important;
`

const Logo = styled.h1`
    font-size: 36px;
    font-weight: 700;
    color: #FFFFFF;
    text-transform: uppercase;
`

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    float: left;
`

const NavLinks = styled.a`
    display: flex;
    flex-direction: row;
    font-size: 16px;
    font-weight: 600;
    color: #212121;
    list-style-type: none;
    justify-content: center;
    align-items: center;   
`

const Links = styled.li`
    margin-right: 37px !important; 
`


const NavButton = styled.button`
    background: linear-gradient(90deg, rgba(115,224,169,1) 0%, rgba(91,104,223,1) 100%);
    color: #FFFFFF;
    font-size: 16px;
    padding: 9px 66px !important;
    margin-left: 59px !important;
    border: none;
    border-radius: 100px;
`



function Navbar() {
    return(
        <Container>
            <Logo>Chilled Grape</Logo>
            <NavContainer>
                <NavLinks>
                    <Links>Home</Links>
                    <Links>About</Links>
                    <Links>Blog</Links>
                    <Links>Pricing</Links>
                </NavLinks>
                <NavButton>Login</NavButton>
            </NavContainer>
        </Container>
    )
}

export default Navbar