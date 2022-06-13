import styled from "styled-components";
import React from "react";
import { ReactComponent as SvgDotPattern } from "../images/Vector1.svg";
import { ReactComponent as SvgDotPattern1 } from "../images/Vector2.svg";
import { ReactComponent as SvgDotPattern2 } from "../images/Vector3.svg";
import { ReactComponent as SvgDotPattern3 } from "../images/Vector4.svg";
import { ReactComponent as SvgDotPattern4 } from "../images/Vector5.svg";


const Container = styled.section`
    max-width: 100vw;
    max-height: 100vh;
    background-color: #FFFFFF;
`
const Header = styled.div`
    position: absolute;
    top: 55%;
    left: 35%;
    transform: translate(-35%, -55%);
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
const ReadMoreButton = styled.button`
    background: linear-gradient(90deg, rgba(115,224,169,1) 0%, rgba(91,104,223,1) 100%);
    color: #FFFFFF;
    font-size: 22px;
    padding: 12px 57px !important;
    border: none;
    border-radius: 100px;
`
const DecoratorBlob1 = styled(SvgDotPattern)(props => [`
    position: absolute;
    top: 5%;
    left: -10%;
    transform: translate( -10%, 5%);
    width: 50%;
    `]);

const DecoratorBlob2 = styled(SvgDotPattern1)(props => [`
    position: absolute;
    top: 110%;
    left: -13%;
    transform: translate(-13%, -110%);
    width: 50%;
    `]);

const DecoratorBlob3 = styled(SvgDotPattern2)(props => [`
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -25%);
    width: 50%;
    `]);

const DecoratorBlob4 = styled(SvgDotPattern3)(props => [`
    position: absolute;
    top: 30%;
    right: 0%;
    transform: translate( 20%, -20%);
    width: 50%;
    overflow: hidden;
    `]);

const DecoratorBlob5 = styled(SvgDotPattern4)(props => [`
    position: absolute;
    top: 55%;
    right: 0%;
    transform: translate(-0%, -10%);
    width: 50%;
    z-index: -1;
    `]);



function Hero() {
    return(     
        <Container>
            <Header>
                <Title>Lorem ipsum dolor sit amet.</Title>
                <ReadMoreButton>Read More</ReadMoreButton>
            </Header>
            <DecoratorBlob1 />
            <DecoratorBlob2 />
            <DecoratorBlob3 />
            <DecoratorBlob4 />
            <DecoratorBlob5 />
        </Container>
    );
};

export default Hero