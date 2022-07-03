import React from "react";
import styled from "styled-components";
import User1 from '../image/user-1.png';
import User2 from '../image/user-2.png';
import User3 from '../image/user-3.png';

const Container =styled.div`
display:flex;
flex-basis:33.3%;

`
const Header=styled.h1`
text-align:center;
`
const Testimonials=styled.div`
width:100%;
display:flex;
flex-basis:33.3%;
`
const Image=styled.img`

`

const Team = () =>{
    return( 
        <>
        <Header>Our Team</Header>
        <Container>
       
            <Testimonials>
                
                <Image src={User1}></Image>
                <Image src={User2}></Image>
                <Image src={User3}></Image>
            </Testimonials>
        </Container>
        
        </>
    )
}

export default Team;