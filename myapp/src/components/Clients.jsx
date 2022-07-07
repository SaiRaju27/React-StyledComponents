import React from "react";
import styled from "styled-components";
import Godrej from "../image/logo-godrej.png";
import CocaCola from "../image/logo-coca-cola.png";
import Oppo from "../image/logo-oppo.png";
import Paypal from "../image/logo-paypal.png";
import Philips from "../image/logo-philips.png";

const Container=styled.div`
    padding:40px 20px;
    display:flex;
    justify-content:center;
`

const Header=styled.h1`
    text-align:center;
    color:orange;
`

const Image=styled.img`
    :hover{
        curosr:pointer;
        filter:grayscale(100%);
        cursor:pointer;
    }
`
const Clients = () =>{
    return( 
        <>
        <Header>Our Clients</Header>
        <Container>
        <Image src={Godrej}></Image>
        <Image src={Paypal}></Image>
        <Image src={CocaCola}></Image>
        <Image src={Philips}></Image>
        <Image src={Oppo}></Image>

        </Container>
        </>
    )
}

export default Clients;