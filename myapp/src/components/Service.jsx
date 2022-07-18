import React from "react";
import styled from "styled-components";
import Play from '../image/play.png';

const Container =styled.div`
    display:flex;
    @media only screen and (max-width:480px){
        flex-direction:column;
    }
`

const Left=styled.div`
    width:50%;
    @media only screen and (max-width:480px){
        display:none;
    }
   
`

const Right=styled.div`
    width:50%;
    
    @media only screen and (max-width:480px){
        width:100%;
    }
`
const Wrapper=styled.div`
    padding:50px;
    display:flex;
    flex-direction:column;
    @media only screen and (max-width:480px){
        padding:10px;
    }
`

const Title=styled.h1`
@media only screen and (max-width:480px){
    font-size:35px;
}
`

const Desc=styled.p`
    font-size:20px;
    margin-top:20px;
    color:#555;
    @media only screen and (max-width:480px){
        width:100%;
    }
`
const CardContainer=styled.div`
    margin-top:50px;

`
const Button=styled.button`
    background:blue;
    width:180px;
    border:none;
    color:white;
    padding:15px;
    font-size:20px;
    border-radius:10px;
    display:flex;
    align-items:center;

`

const Image=styled.img`
    padding-right:8px;
`
const Service = () =>{
    return ( 
        <>
        <Container>
            <Left>L</Left>
            <Right>
                <Wrapper>
                    <Title>Simple process to start</Title>
                    <Desc>
                        We provvide digital experience services to startups and small business to looking for a partner of their digital media design and development , lead genartion and communications reuired . we work with you, not for you.Although we have a great resources.
                    </Desc>
                    <CardContainer>
<Button><Image src={Play}></Image>How it works</Button>
                    </CardContainer>
                    </Wrapper>

                   
                    </Right>
        </Container>
        </>
    )
}

export default Service;