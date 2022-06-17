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
    max-width: 100vw;
    max-height: 100vh;
    padding: 2.5% !important;
`

const Logo = styled.h1`
    font-size: 36px;
    font-weight: 700;
    color: #FFFFFF;
    text-transform: uppercase;
    cursor: pointer;

    @media (max-width: 1200px) {
        font-size: 32px   
    }
    @media (max-width: 1024px) {
        font-size: 28px;
    }
    @media (max-width: 900px) {
        font-size: 24px;
    }
    @media (max-width: 768px) {
        font-size: 20px;
    }
    @media (max-width: 480px) {
        font-size: 18px;
    }
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
    
    @media (max-width: 1200px) {
        font-size: 15px;  
    }
    @media (max-width: 1024px) {
        font-size: 14px;
    }
    @media (max-width: 900px) {
        font-size: 13px;
    }
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const Links = styled.li`
    margin-right: 37px !important;
    cursor: pointer; 
`
const NavButton = styled.button`
    background: linear-gradient(90deg, rgba(115,224,169,1) 0%, rgba(91,104,223,1) 100%);
    color: #FFFFFF;
    font-size: 16px;
    padding: 7px 76px !important;
    margin-left: 59px !important;
    border: none;
    border-radius: 100px;
    cursor: pointer;

    @media (max-width: 1200px) {
        font-size: 15px;
        padding: 4px 70px !important;   
    }
    @media (max-width: 1024px) {
        font-size: 14px;
        padding: 3px 63px !important;
    }
    @media (max-width: 900px) {
        font-size: 13px;
        padding: 2px 55px !important;
    }
    @media (max-width: 768px) {
        font-size: 12px;
        padding: 1px 45px !important;
    }
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