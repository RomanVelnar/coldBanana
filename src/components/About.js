import React from "react";
import styled from "styled-components";

import { ReactComponent as plantPicture } from "../images/pngwing1.svg";
import { ReactComponent as SvgDotPattern5 } from "../images/Vector6.svg";


const Container = styled.section`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #FFFFFF;
`

const Header = styled.div`
    position: absolute;
    top: 55%;
    left: 5%;
    transform: translate(-5%, -55%);
    width: 40vw;
    z-index: 1;
`
const Title = styled.h1`
    font-size: 64px;
    font-wight: 700;
    text-transform: uppercase;
    color: #212121;
    margin-bottom: 0px;
`
const Description = styled.p`
    font-size: 16px;
`

const ReadMoreButton = styled.button`
    background: linear-gradient(90deg, rgba(115,224,169,1) 0%, rgba(91,104,223,1) 100%);
    color: #FFFFFF;
    font-size: 22px;
    padding: 12px 57px !important;
    border: none;
    border-radius: 100px;
`

// const PlantPicture = styled.svg`
//     position: absolute;
//     background-image: url(${plantPicture});
//     top: -20%;
//     left: 100%;
//     z-index: 3;
// `

const PlantPicture = styled(plantPicture)(props => [`
    position: absolute;
    top: -10%;
    right: 10%;
    transform: translate(-10%, -10%);
    z-index: 1;
    `]);


function About() {
    return(
        <Container>
            <Header>
                <Title>Lorem ipsum dolor sit amet.</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
                <ReadMoreButton>Read More</ReadMoreButton>
            </Header>
                <PlantPicture />
        </Container>
    );
}

export default About