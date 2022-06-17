import React from "react";
import styled from "styled-components";

import PlantImg from "../images/plant.png";
import PlantBG from "../images/plantBG.png"


const Container = styled.section`
    position: relative;
    max-width: 100vw;
    height: 100vh;
    background-color: #FFFFFF;
    margin-top: 100vh !important;
    padding-top: 10% !important;

    @media (max-width: 480px) {
        margin-top: 50vh !important;
        padding-bottom: 0 !important;
        height: 50vh;
    }
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

const Header = styled.div`
    width: 35vw;
    z-index: 1;

    @media (max-width: 480px) {
        width: 80vw;
    }
`

const Title = styled.h1`
    font-size: 36px;
    font-wight: 700;
    text-transform: uppercase;
    color: #212121;
    margin-bottom: 20px !important;

    @media (max-width: 1200px) {
        font-size: 32px;   
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
`

const Description = styled.p`
    font-size: 16px;
    margin-bottom: 38px !important;

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

const ReadMoreButton = styled.button`
    background: linear-gradient(90deg, rgba(115,224,169,1) 0%, rgba(91,104,223,1) 100%);
    color: #FFFFFF;
    font-size: 16px;
    padding: 9px 43px !important;
    border: none;
    border-radius: 100px;
    cursor: pointer;

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

const PlantContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40vw;
    height: 50vh;

    @media (max-width: 480px) {
        display:none;
    }
`

const PlantDeco = styled.img`
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -70%);
    width: 95%;
    height: auto;
    z-index: 1;
`

const PlantDecoBG = styled.img`
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
`


function About() {
    return(
        <Container>
            <FlexContainer>
                <Header>
                    <Title>Lorem ipsum dolor sit amet.</Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
                    <ReadMoreButton>Read More</ReadMoreButton>
                </Header>
                <PlantContainer>
                    <PlantDeco src={PlantImg} />
                    <PlantDecoBG src={PlantBG} />
                </PlantContainer>
            </FlexContainer>
        </Container>
    );
}

export default About