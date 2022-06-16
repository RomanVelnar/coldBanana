import React from "react";
import styled from "styled-components";
import { ReactComponent as SvgDotPattern5 } from "../images/Vector7.svg";
import FooterImg1 from "../images/footerImg1.png"
import FooterImg2 from "../images/footerImg2.png"
import FooterImg3 from "../images/footerImg3.png"
import FooterImg31 from "../images/footerImg3.1.png"
import FooterImg4 from "../images/footerImg4.png"
import FooterImg41 from "../images/footerImg4.1.png"
import FooterImg5 from "../images/footerImg5.png"
import FooterImg51 from "../images/footerImg5.1.png"
import FooterImg6 from "../images/footerImg6.png"


const Container = styled.section`
    position: relative;  
    max-width: 100vw;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const FooterText = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
    z-index: 1;
`
const FooterTextTitle = styled.h1`
    font-size: 36px;
    font-weight: 500;
    color: #FFFFFF;
    padding-bottom: 15px !important;
    text-transform: uppercase;
`
const FooterTextText = styled.p`
    font-size: 22px;
    font-weight: 400;
    color: #FFFFFF;
`
const FooterCompanyContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 10vw; 
`
const FooterCompanyTitle = styled.h3`
    font-size: 20px;
    font-weight: 500;
    background: -webkit-linear-gradient(90deg, rgba(115,224,169,1) 0%, rgba(91,104,223,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 21px !important
`
const FooterCompanyLinks = styled.a`
    font-size: 18px;
    font-weight: 400;
    color: #212121;
    padding-bottom: 12px !important;
`
const FooterFollowUsContainer= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // margin-left: 100px !important;
`
const FooterFollowUsItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
`
const FollowUsImgOut = styled.img`
    position: absolute;
`
const FollowUsImgIn = styled.img`

`
const DecoratorBlob1 = styled(SvgDotPattern5)(props => [`
    position: absolute;
    bottom: 0%;
    left: 0%;
    transform: translate(0%, 15%);
    `]);


function Footer() {
    return(
        <Container>
            <FooterText>
                <FooterTextTitle>Chilled Grape</FooterTextTitle>
                <FooterTextText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</FooterTextText>
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
        <DecoratorBlob1 />
        </Container>
    )
}

export default Footer;