import React from "react";
import styled from "styled-components";

const Container = styled.section`
    max-width: 100vw;
    max-height: 100vh;
    background-color: #FFFFFF;
`

const Header = styled.div`
    position: absolute;
    top: 55%;
    left: 5%;
    transform: translate(-5%, -55%);
    width: 40vw;
    z-index: 10;
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


function About() {
    return(
        <Container>
            <Header>
                <Title>Lorem ipsum dolor sit amet.</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
                <ReadMoreButton>Read More</ReadMoreButton>
            </Header>
        </Container>
    );
}

export default About