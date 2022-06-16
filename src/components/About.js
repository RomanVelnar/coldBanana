import React from "react";
import styled from "styled-components";

import { ReactComponent as plantPicture } from "../images/pngwing1.svg";
import { ReactComponent as SvgDotPattern5 } from "../images/Vector6.svg";


const Container1 = styled.section`
    position: relative;
    max-width: 100vw;
    height: 100vh;
    background-color: #FFFFFF;
    margin-top: 100vh !important;
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
`

const Title = styled.h1`
    font-size: 36px;
    font-wight: 700;
    text-transform: uppercase;
    color: #212121;
    margin-bottom: 20px !important;
`

const Description = styled.p`
    font-size: 16px;
    margin-bottom: 38px !important;
`

const ReadMoreButton = styled.button`
    background: linear-gradient(90deg, rgba(115,224,169,1) 0%, rgba(91,104,223,1) 100%);
    color: #FFFFFF;
    font-size: 16px;
    padding: 9px 43px !important;
    border: none;
    border-radius: 100px;
`

const PlantContainer = styled.div`
    position: relative;
    width: 40vw;
    height: 50vh;
`

const PlantPicture = styled(plantPicture)(props => [`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-bottom: 200px !important;
    z-index: 1;
    `]);

const DecoratorBlob2 = styled(SvgDotPattern5)(props => [`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -20%);
    z-index: 0;
    `]);


function About() {
    return(
        <Container1>
            <FlexContainer>
                <Header>
                    <Title>Lorem ipsum dolor sit amet.</Title>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
                    <ReadMoreButton>Read More</ReadMoreButton>
                </Header>
                <PlantContainer>
                    <PlantPicture />
                    <DecoratorBlob2 />
                </PlantContainer>
            </FlexContainer>
        </Container1>
    );
}

export default About