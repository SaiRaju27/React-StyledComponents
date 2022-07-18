import React from 'react';
import styled from 'styled-components';
import Image1 from '../image/image1.png';

const Container = styled.div`
    height:calc(100vh - 50px);
    display:flex;
    padding:20px;
    @media only screen and (max-width:480px){
       flex-direction:column;
    }
`
const Title = styled.h1`
    font-size:60px;
    width:60%;

    @media only screen and (max-width:480px){
        width:100%;
        font-size:50px;
    }
`

const Desc = styled.p`
    width:60%;
    font-size:20px;
    margin-top:20px;
    @media only screen and (max-width:480px){
        width:100%;
    }
`

const Left = styled.div`
    width:60%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media only screen and (max-width:480px){
        width:100%;
        height:100%;
    }
`

const Right = styled.div`
    width:40%; 
    display:flex;
    align-items:center;
    justify-content:center; 
    @media only screen and (max-width:480px){
      display:none;
    }  
`
const Info = styled.div`
    display:flex;
    width:60%;
    margin-top:50px;
    justify-content:space-between;
    align-items:center;
    @media only screen and (max-width:480px){
      flex-direction:column;
    }
`
const Button = styled.button`
    /* border:2px solid transparent; */
    padding:15px;
    background:blue;
    color:white;
    border-radius:10px;
    font-weight:bold;
    border:none;
    letter-spacing:2px;
    cursor:pointer;
    @media only screen and (max-width:480px){
        margin-bottom:20px;
    }
`
const Contact = styled.div`
    display:flex;
    flex-direction:column;
`
const Phone = styled.span`
    color:#f0667d;
    font-weight:bold;
`
const ContactText = styled.span`
    margin-top:5px;
    color:gray;
`

const Image = styled.img`
    width:100%;
  
`

const Intro = () => {
    return (
        <>
            <Container>
                <Left>
                    <Title>Success don't have full stops only commas;</Title>
                    <Desc>Success comes to the person who is Hard working, Consistent, Determined towards the Goals!</Desc>

                    <Info>
                        <Button>Start A Project</Button>
                        <Contact>
                            <Phone> Call Us on 9951419589</Phone>
                            <ContactText>For any Questions or Concern's</ContactText>
                        </Contact>
                    </Info>

                </Left>
                <Right><Image src={Image1} /></Right>
            </Container>
        </>
    )

}

export default Intro;