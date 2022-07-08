import React, { useState } from 'react'
import styled from "styled-components";
import App from "../images/app.png";
import AnimatedShapes from './AnimatedShapes'
import How from '../images/how.png'
import MiniCard from './MiniCard'
import Play from '../images/play.png'

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    width: 50%;
    position: relative;
`

const Image = styled.img`
    display: ${props => props.open && "none"};
    height: 80vh;
    margin-left: -80px;
    margin-top: 160px;
`

const Video = styled.video`
    display: ${props => !props.open && "none"};
    height: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
`

const Right = styled.div`
    width: 50%;
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    font-weight: bold;
`

const Desc = styled.p`
    font-size: 20px;
    color: #555;
    margin-top: 20px;
    width: 100%;
`
const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`

const Button = styled.button`
    width: 180px;
    border: none;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    font-size: 20px;
    padding: 15px;
    margin-top: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
`

const Icon = styled.img`
    width: 20px;
    margin-right: 10px;
`

const mySrc = "https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761";

export default function Service() {

    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Left>
                <Image open={open} src={How}/>
                <Video
                    open={open}
                    autoPlay
                    loop
                    controls
                    // src={mySrc}
                />
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple Process to start</Title>
                    <Desc>
                        We provide digital experience services to startups 
                        and small businesses to looking for a partner for 
                        their digital media, design & development, lead 
                        generation and communications requirements. We 
                        work with you, not for you. Althpugh we have a 
                        great resources
                    </Desc>
                    <CardContainer>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </CardContainer>
                    <Button onClick={() => setOpen(true)}>
                        <Icon src={Play}/>
                        How it works
                    </Button>
                </Wrapper>
            </Right>
        </Container>
    )
}
