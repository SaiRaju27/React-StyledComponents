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
   @media only screen and (max-width:480px){
    flex-direction:column;
    padding:20px 30px;
    align-items:center;
    height:100%;
}
   
  
`
const Col1=styled.div`
    flex-direction:column;
    display:flex;
    @media only screen and (max-width:480px){
        flex-direction:column;
    }
    
`
const Header=styled.h3`


`
const Para=styled.p`
    color: #8a8a8a;
    
    @media only screen and (max-width:480px){
      text-align: ${({a}) => a ? "center" : "left"};
     
    }
`
const Images=styled.div`
`
const Image=styled.img`
    margin-top: 20px;
    width: 150px;
  
`
// const Menu=styled.ul`
// list-style:none;


// `
// const MenuItems=styled.li`


// `
// const Col2=styled.div`
// @media only screen and (max-width:480px){
//     flex-direction:row;
// }

    
// `
// const Col3=styled.div`

    
// `
const Col4=styled.div`
@media only screen and (max-width:480px){
    
  margin-left:10px;
}

   
`

const Hr=styled.hr`
margin-top:20px;
height:2px;
background-color:black;
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
                {/* <Col2>
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
                </Col3> */}
                <Col4>
                <Image src={RedCart}></Image>
                <Para>Me the things well from your side and suggest the team</Para>
                
                </Col4>
            

            

        </Container>
        <Hr/>
            <Para a>Copyright &copy; 2020 R@JU Ecommerce Site</Para>
        </>
    )
}

export default Footer;