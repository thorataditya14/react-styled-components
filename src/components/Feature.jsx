import React from 'react'
import styled from "styled-components";
import App from "../images/app.png";
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    width: 50%;
`

const Image = styled.img`
    height: 100vh;
`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
`

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 25px;
    font-weight: bold;
`
const SubTitle = styled.span`
    font-size: 24px;
    font-style: italic;
    color: #333;
`

const Desc = styled.p`
    font-size: 20px;
    color: #777;
    margin-top: 30px;
`
const Button = styled.button`
    width: 150px;
    border: none;
    padding: 15px 20px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    margin-top: 30px;
    cursor: pointer;
`

export default function Feature() {
    return (
        <Container>
            <Left>
                <Image src={App} />
            </Left>
            <Right>
                <Title>
                    good design
                    <br/>
                    good business
                </Title>
                <SubTitle>We know that good design means good business.</SubTitle>
                <Desc>
                    We help our clients succeed by creating brand 
                    identities, digital experiences, and print 
                    materials that communicate clearly, achieve marketing 
                    goals, and look fantastic.
                </Desc>
                <Desc>
                    We care your business and guarantee you to achieve 
                    marketing goals
                </Desc>
                <Button>Learn More</Button>
            </Right>
            <AnimatedShapes />
        </Container>
    )
}
