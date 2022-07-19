import React from 'react';
import styled from 'styled-components';
import Biodata from '../image/biodata.jpg';

const Container=styled.div`
    display:flex;
    padding:20px;
    @media only screen and (max-width:480px){
        flex-direction:column;
        paddin:30px 20px;
    }
`
const Left=styled.div`
    width:60%;
    display:flex;
    justify-content:center;
    @media only screen and (max-width:480px){
        width:100%;
    }
`
const Right=styled.div`
    width:40%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    @media only screen and (max-width:480px){
        width:100%;
    }
`
const Image=styled.img`
    width:60%;
    border-radius:10px;
`
const Title=styled.span`
    font-size:70px;
    @media only screen and (max-width:480px){
        font-size:50px;
    }
`
const SubTitle=styled.span`
    font-style:italic;
    margin-top:30px;
    font-size:24px;
`
const Desc=styled.p`
    colot:#777;
    margin-top:30px;
    font-size:20px;
`
const Button=styled.button`
    padding:15px 20px;
    width:150px;
    border:none;
    background-color:darkblue;
    margin-top:20px;
    cursor:pointer;
    font-size:20px;
    border-radius:20px;
    color:white;
    @media only screen and (max-width:480px){
        width:100%;
    }
`


const Features =  () => {
    return(
        <>
        <Container>
            <Left><Image src={Biodata}></Image></Left>
            <Right>
                <Title><b>good</b> Design <br/><b>good</b> Business</Title>
                <SubTitle>We know that good design means good business</SubTitle>
                <Desc>We help our clinets by creating brand identites , digital experiences and print materials that convey clearly marketing achieveing goals, and look fantastic.</Desc>
                <Desc>We care for your business and guarantee you to acheing marketing goals</Desc>
                <Button>Learn More.</Button>
            </Right>


            </Container>
        </>
        
    )
}

export default Features;