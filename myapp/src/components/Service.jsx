import React from "react";
import styled from "styled-components";

const Container =styled.div`
display:flex;
`

const Left=styled.div`
width:50%;
`

const Right=styled.div`
width:50%;
`
const Wrapper=styled.div`
padding:50px;
display:flex;
flex-direction:column;
align-items:center;
`

const Title=styled.h1`
`

const Desc=styled.p`
font-size:20px;
margin-top:20px;
color:#555;
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
                    </Wrapper>
                    </Right>
        </Container>
        </>
    )
}

export default Service;