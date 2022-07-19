import React from "react";
import styled from "styled-components";

const Container=styled.div`
    padding:20px;
    -webkit-box-shadow:0 px 0px 17px -11px rgba(0,0,0,0.58);
    box-shadow:0px 0px 17px -11px rgba(0,0,0,0.58);
    background-color:white;
    border-radius:10px;
    display:flex;
    margin-right:50px;
    flex-direction:column;
    align-items:center;
    @media only screen and (max-width:480px){
        margin:auto 0;
        margin-bottom:15px;
     
    }
  
`
const  PriceContainer=styled.div`
    display:flex;
    align-items:center;
   
`
const Price=styled.span`
    font-weight:bold;
    font-size:50px;
`
const Type=styled.button`
    padding:10px;
    margin:10px 0;
    border:1.5px solid blue;
    color:black;
    border-radius:20px;
`
const List=styled.ul`
    list-style:none;
`
const ListItem=styled.li`
    margin:30px 0;
    @media only screen and (max-width:480px){
        margin:15px 0;
    }
`

const Button=styled.button`
    border:none;
    background-color:darkblue;
    color:white;
    font-size:16px;
    padding:15px;
    font-weight:bold;
    border-radius:10px;
    curosr:pointer;
`

const PriceCard =  ({price,type})=>{
    return(
        <>
          
        <Container>
            <PriceContainer>
                $<Price>{price}</Price>/month
                </PriceContainer>
                <Type>{type} Plan</Type>
                <List>
                    <ListItem>200 Hand-Crafted Templates</ListItem>
                    <ListItem>Exclusive Support</ListItem>
                    <ListItem>50+ PreBuilt Websites</ListItem>
                    <ListItem>Premium Plugins</ListItem>
                        
                </List>
                <Button>Join Now</Button>
           
        </Container>

        </>
    )
}

export default PriceCard;