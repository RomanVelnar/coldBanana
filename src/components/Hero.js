import styled from "styled-components";
import React from "react";

import ImageBloob1 from "../images/heroBlob1.png"
import ImageBloob2 from "../images/heroBlob2.png"
import ImageBloob3 from "../images/heroBlob3.png"
import ImageBloob4 from "../images/heroBlob4.png"
import ImageBloob5 from "../images/heroBlob5.png"

import Navbar from "./Navbar";


const Container = styled.section`
    position: relative;
    max-width: 100vw;
    max-height: 100vh;
    background-color: #FFFFFF;

    @media (max-width: 768px) {
        width: 100vw;
        height: 40vh
    }
`
const Header = styled.div`
    position: absolute;
    width: 40vw;
    top: 80%;
    left: 35%;
    transform: translate( -35%, 80%);
    z-index: 2;

    @media (max-width: 1200px) {
        top: 70%;
        transform: translate( -35%, 70%);
    }
    @media (max-width: 1024px) {
        top: 60%;
        transform: translate( -35%, 60%);
    }
    @media (max-width: 900px) {
        top: 50%;
        transform: translate( -35%, 50%);
    }
    @media (max-width: 768px) {
        top: 40%;
        transform: translate( -35%, 40%);
    }
    @media (max-width: 480px) {
        top: 70%;
        transform: translate( -35%, 70%);
        width: 60vw;
    }
`
const Title = styled.h1`
    font-size: 64px;
    font-wight: 700;
    text-transform: uppercase;
    color: #212121;
    margin-bottom: 20px;

    @media (max-width:1200px) {
        font-size: 58px;
    }
    @media (max-width: 1024px) {
        font-size: 52px;
    }    
    @media (max-width: 900px) {
        font-size: 46px;
    }
    @media (max-width: 768px) {
        font-size: 40px;
    }
    @media (max-width: 480px) {
        font-size: 30px;
    }
`
const ReadMoreButton = styled.button`
    background: linear-gradient(90deg, rgba(115,224,169,1) 0%, rgba(91,104,223,1) 100%);
    color: #FFFFFF;
    font-size: 22px;
    padding: 12px 57px !important;
    border: none;
    border-radius: 100px;
    cursor: pointer;

    @media (max-width: 1200px) {
        font-size: 18px
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
        font-size: 10px;
    }
`
const Image1 = styled.img`
    width: 30%;
    height: auto;
    position: absolute;
    top: 0%;
    left: 0%;
    transform: translate( 0%, 0%);
    z-index: 1;
`
const Image2 = styled.img`
    width: 13%;
    height: auto;
    position: absolute;
    top: 100%;
    left: 0%;
    transform: translate( 0%, 100%);
    z-index: 1;
`
const Image3 = styled.img`
    width: 23%;
    height: auto;
    position: absolute;
    top: 35%;
    left: 48%;
    transform: translate(-48%, 35%);
    z-index: 1;
`
const Image4 = styled.img`
    width: 23%;
    height: auto;
    position: absolute;
    top: 30%;
    right: 0%;
    transform: translate( 0%, 30%);
    z-index: 2;
`
const Image5 = styled.img`
    width: 30%;
    height: auto;
    position: absolute;
    top: 92%;
    right: 19%;
    transform: translate( 19%, 92%);
    z-index: 1;
`





function Hero() {
    return(     
        <Container>
            <Navbar />
            <Header>
                <Title>Lorem ipsum dolor sit amet.</Title>
                <ReadMoreButton>Read More</ReadMoreButton>
            </Header>
            <Image1 src={ImageBloob1} />
            <Image2 src={ImageBloob2} />
            <Image3 src={ImageBloob3} />
            <Image4 src={ImageBloob4} />
            <Image5 src={ImageBloob5} />
        </Container>
    );
};

export default Hero