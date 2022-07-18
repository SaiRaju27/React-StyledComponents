import React from 'react';
import styled from 'styled-components';
import PriceCard from './PriceCard'

const Container=styled.div`
    display:flex;
    justify-content:center;
    height:100%;
    align-items:center;
    @media only screen and (max-width:480px){
        flex-direction:column;
       height:auto;
    }
`
const Header=styled.h1`
    text-align:center;
    color:orange;
`
const Price=()=>{
    return(
    <>
    <Header>Pricing</Header>
    <Container>
    
        <PriceCard price="10" type="Basic"></PriceCard>
        <PriceCard price="20" type="Premium"></PriceCard>
        <PriceCard price="50" type="Advanced"></PriceCard>
    </Container>
    </>
    )
}

export default Price;