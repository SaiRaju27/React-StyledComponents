import React from "react";
import styled from "styled-components";
import PlayStore from "../image/play-store.png";
import AppStore from "../image/app-store.png";
import RedCart from "../image/redcart.png";

const Container=styled.div`
    display:flex;
    background: #000;
    color: #8a8a8a;
   padding:50px 80px;
   justify-content:space-between;
   
  
`
const Col1=styled.div`
    flex-direction:column;
    display:flex;
    
`
const Header=styled.h3`


`
const Para=styled.p`
    color: #8a8a8a;
`
const Images=styled.div`
`
const Image=styled.img`
    margin-top: 20px;
    width: 150px;
  
`
const Menu=styled.ul`
list-style:none;


`
const MenuItems=styled.li`


`
const Col2=styled.div`

    
`
const Col3=styled.div`

    
`
const Col4=styled.div`

   
`

const Hr=styled.hr`
margin-top:20px;
height:20px;
color:orange;
`
const Footer=()=>{
    return(
        <>
        <Container>
        
                <Col1>
                    <Header>Download Our App</Header>
                    <Para>Download our app for IOS and Android</Para>
                    <Images>
                        <Image src={PlayStore}></Image>
                        <Image src={AppStore}></Image>
                    </Images>
                </Col1>
                <Col2>
                    <Header>UseFul Links</Header>
                    <Menu>
                        <MenuItems>Coupons</MenuItems>
                        <MenuItems>Coupons</MenuItems>
                        <MenuItems>Coupons</MenuItems>
                        <MenuItems>Coupons</MenuItems>
                    </Menu>
                </Col2>
                <Col3>
                    <Header>Follow Us</Header>
                    <Menu>
                        <MenuItems>Coupons</MenuItems>
                        <MenuItems>Coupons</MenuItems>
                        <MenuItems>Coupons</MenuItems>
                        <MenuItems>Coupons</MenuItems>
                    </Menu>
                </Col3>
                <Col4>
                <Image src={RedCart}></Image>
                <Para>Make the things well from your side and suggest the team</Para>
                
                </Col4>
            

            

        </Container>
        <Hr/>
            <Para>Copyright &copy; 2020 R@JU Ecommerce Site</Para>
        </>
    )
}

export default Footer;