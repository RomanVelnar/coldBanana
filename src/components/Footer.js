import React from "react";
import styled from "styled-components";
import FooterImg1 from "../images/footerImg1.png"
import FooterImg2 from "../images/footerImg2.png"
import FooterImg3 from "../images/footerImg3.png"
import FooterImg31 from "../images/footerImg3.1.png"
import FooterImg4 from "../images/footerImg4.png"
import FooterImg41 from "../images/footerImg4.1.png"
import FooterImg5 from "../images/footerImg5.png"
import FooterImg51 from "../images/footerImg5.1.png"
import FooterImg6 from "../images/footerImg6.png"
import FooterDecoBlob from "../images/footerBlob.png"


const Container = styled.section`
    position: relative;  
    max-width: 100vw;
    height: 15vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 25% !important;

    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20vh !important;
    }
`
const FooterText = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
    z-index: 1;

    @media (max-width: 480px) {
        display: none;
    }
`
const FooterTextTitle = styled.h1`
    font-size: 36px;
    font-weight: 500;
    color: #FFFFFF;
    padding-bottom: 15px !important;
    text-transform: uppercase;
    cursor: pointer;

    @media (max-width: 1200px) {
        font-size: 34px;   
    }
    @media (max-width: 1024px) {
        font-size: 32px;   
    }
    @media (max-width: 900px) {
        font-size: 30px;   
    }
    @media (max-width: 768px) {
        font-size: 28px;   
    }
`
const FooterTextText = styled.p`
    font-size: 22px;
    font-weight: 400;
    color: #FFFFFF;

    @media (max-width: 1200px) {
        font-size: 20px;   
    }
    @media (max-width: 1024px) {
        font-size: 18px;   
    }
    @media (max-width: 900px) {
        font-size: 16px;   
    }
    @media (max-width: 768px) {
        font-size: 14px;   
    }
`
const FooterCompanyContainerWrap = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 480px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding-left: 20% !important;
        padding-bottom: 10% !important;
    }
`
const FooterCompanyContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 10vw; 

    @media (max-width: 480px) {
        width: 40vw;
    }
`
const FooterCompanyTitle = styled.h3`
    font-size: 20px;
    font-weight: 500;
    background: -webkit-linear-gradient(90deg, rgba(115,224,169,1) 0%, rgba(91,104,223,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 21px !important;
    cursor: pointer;

    @media (max-width: 1200px) {
        font-size: 18px;   
    }
    @media (max-width: 1024px) {
        font-size: 16px;   
    }
    @media (max-width: 900px) {
        font-size: 14px;   
    }
    @media (max-width: 768px) {
        font-size: 12px;   
    }
    @media (max-width: 480px) {
        font-size: 18px;   
    }
`
const FooterCompanyLinks = styled.a`
    font-size: 18px;
    font-weight: 400;
    color: #212121;
    padding-bottom: 12px !important;

    @media (max-width: 1200px) {
        font-size: 16px;   
    }
    @media (max-width: 1024px) {
        font-size: 14px;   
    }
    @media (max-width: 900px) {
        font-size: 12px;   
    }
    @media (max-width: 768px) {
        font-size: 10px;   
    }
    @media (max-width: 480px) {
        font-size: 16px;   
    }
`
const FooterFollowUsContainer= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const FooterFollowUsItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 10% !important;
`
const FooterFollowUsItem = styled.div`
    width: 45px;
    height: 45px;
    background: linear-gradient(90deg, rgba(115,224,169,1) 0%, rgba(91,104,223,1) 100%);
    border-radius: 5px;
    margin-right: 38px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;

    @media (max-width: 1200px) {
        width: 41px;
        height: 41px;
        margin-right: 35px !important;   
    }
    @media (max-width: 1024px) {
        width: 37px;
        height: 37px;
        margin-right: 32px !important;   
    }
    @media (max-width: 900px) {
        width: 33px;
        height: 33px;
        margin-right: 29px !important;   
    }
    @media (max-width: 768px) {
        width: 29px;
        height: 29px;
        margin-right: 26px !important;
    }
`
const FollowUsImgOut = styled.img`
    position: absolute;
    @media (max-width: 768px) {
        width: 60%;
    }
`
const FollowUsImgIn = styled.img`
    @media (max-width: 768px) {
        width: 25%;
    }
`
const DecoratorBlob = styled.img`
    position: absolute;
    bottom: 0%;
    left: 0%;
    transform: translate(0%, 30%);
    width: 40%;
    height: auto;

    @media (max-width: 480px) {
        display: none;
    }
`



function Footer() {
    return(
        <Container>
            <FooterText>
                <FooterTextTitle>Chilled Grape</FooterTextTitle>
                <FooterTextText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</FooterTextText>
            </FooterText>
            <FooterCompanyContainerWrap>
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
            </FooterCompanyContainerWrap>
            <FooterFollowUsContainer>
                <FooterCompanyTitle>Follow Us</FooterCompanyTitle>
                <FooterFollowUsItems>
                    <FooterFollowUsItem><FollowUsImgOut src={FooterImg1} /></FooterFollowUsItem>
                    <FooterFollowUsItem><FollowUsImgOut src={FooterImg2} /></FooterFollowUsItem>
                    <FooterFollowUsItem><FollowUsImgOut src={FooterImg3} /><FollowUsImgIn src={FooterImg31} /></FooterFollowUsItem>
                </FooterFollowUsItems>
                <FooterFollowUsItems>
                    <FooterFollowUsItem><FollowUsImgOut src={FooterImg4} /><FollowUsImgIn src={FooterImg41} /></FooterFollowUsItem>
                    <FooterFollowUsItem><FollowUsImgOut src={FooterImg5} /><FollowUsImgIn src={FooterImg51} /></FooterFollowUsItem>
                    <FooterFollowUsItem><FollowUsImgOut src={FooterImg6} /></FooterFollowUsItem>
                </FooterFollowUsItems>
            </FooterFollowUsContainer>
            <DecoratorBlob src={FooterDecoBlob} />
        </Container>
    )
}

export default Footer;