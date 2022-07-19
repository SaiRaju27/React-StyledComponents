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
    @media only screen and (max-width:480px){
        flex-direction:column;
      align-items:center;
    }
`

const Header=styled.h1`
    text-align:center;
    color:orange;
    @media only screen and (max-width:480px){
       
    }
`

const Image=styled.img`

    :hover{
        cursor:pointer;
        filter:grayscale(100%);
       
    }
    @media only screen and (max-width:480px){
        width:25%;
        margin-top:10px;
    }
`
const SS=styled.div`
@media only screen and (max-width:480px){
    margin-top:40px;
}
`
const Clients = () =>{
    return( 
        <>
        <SS>
        <Header>Our Clients</Header>
        <Container>
        <Image src={Godrej}></Image>
        <Image src={Paypal}></Image>
        <Image src={CocaCola}></Image>
        <Image src={Philips}></Image>
        <Image src={Oppo}></Image>

        </Container>
        </SS>
        </>
    )
}

export default Clients;