import React from "react";
import styled from "styled-components";

const Container = styled.section`
    position: relative;  
    width: 100vw;
    display: flex;
    flex-direction: row;
`
const FooterText = styled.div`
    display: flex;
    flex-direction: column;
`

const FooterCompanyContainer = styled.div`
    display: flex;
    flex-direction: column; 
`
const FooterCompanyTitle = styled.h3`
    font-size: 20px;
    font-weight: 500;
`
const FooterCompanyLinks = styled.a`
    font-size: 18px;
`
const FooterFollowUsContainer= styled.div`
    display: flex;
    flex-direction: column; 
`
const FooterFollowUsTitle = styled.h3`
    font-size: 20px;
    font-weight: 500;
`
const FooterFollowUsItems = styled.div`
    display: flex;
    flex-direction: row;
`
const FooterFollowUsItem = styled.div`
    width: 45px;
    height: 45px;
    background: linear-gradient(90deg, rgba(115,224,169,1) 0%, rgba(91,104,223,1) 100%);
`



function Footer() {
    return(
        <Container>
            <FooterText>
                <h2>Chilled Grape</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
            </FooterText>
            <FooterCompanyContainer>
                <FooterCompanyTitle>Company</FooterCompanyTitle>
                <FooterCompanyLinks>About</FooterCompanyLinks>
                <FooterCompanyLinks>Careers</FooterCompanyLinks>
                <FooterCompanyLinks>Our Work</FooterCompanyLinks>
                <FooterCompanyLinks>Contact</FooterCompanyLinks>
            </FooterCompanyContainer>
            <FooterCompanyContainer>
                <FooterCompanyTitle>Products</FooterCompanyTitle>
                <FooterCompanyLinks>About</FooterCompanyLinks>
                <FooterCompanyLinks>Careers</FooterCompanyLinks>
                <FooterCompanyLinks>Our Work</FooterCompanyLinks>
                <FooterCompanyLinks>Contact</FooterCompanyLinks>
            </FooterCompanyContainer>
            <FooterFollowUsContainer>
                <FooterFollowUsTitle>Follow Us</FooterFollowUsTitle>
                <FooterFollowUsItems>
                    <FooterFollowUsItem />
                    <FooterFollowUsItem />
                    <FooterFollowUsItem />
                </FooterFollowUsItems>
                <FooterFollowUsItems>
                    <FooterFollowUsItem />
                    <FooterFollowUsItem />
                    <FooterFollowUsItem />
                </FooterFollowUsItems>
            </FooterFollowUsContainer>
        </Container>
    )
}

export default Footer;