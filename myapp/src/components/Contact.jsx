import React from "react";
import styled from "styled-components";
import Send from '../image/send.png';
import Map from '../image/map.png';
import Phone from '../image/phone.png'

const Container=styled.div`
   
`
const Wrapper=styled.div`
    

    display:flex;
    align-items:center;
    justify-content:space-around;
`
const FormContainer=styled.div`
    

`
const AddressContainer=styled.div`
  
`
const AddressItem=styled.div`
    display:flex;
    align-items:center;
    margin-bottom:50px;
`

const Icon=styled.img`
    width:20px;
    margin-right:20px;
`

const Text=styled.span`
    font-size:20px;
    margin-right:50px;
`
const Form=styled.form`
    height:250px;
    display:flex;
    align-items:center;
    justify-content:center;
`
const LeftForm=styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin-right:20px;
`
const RightForm=styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`

const Input=styled.input`
    width:200px;
    padding:20px;
`
const TextArea=styled.textarea`
    width:200px;
    height:60%;
    padding:20px;
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

const Title=styled.h1`
    margin-bottom:50px;
`

const Contact=()=>{
    return(
        <>
        <Container>
            <Wrapper>
<FormContainer>
    <Title>Questions <br/> Let's Get In Touch</Title>
    <Form>
<LeftForm>
    <Input placeholder="Your name"/>
    <Input placeholder="Your email"/>
    <Input placeholder="Your phone"/>
</LeftForm>
<RightForm>
<TextArea placeholder="Your text"/>
<Button>Send</Button>
</RightForm>
</Form>
</FormContainer>
<AddressContainer>
    <AddressItem>
        <Icon src={Map}/>
        <Text>123 Park Avenue St., New York, Usa</Text>
    </AddressItem>
    <AddressItem>
        <Icon src={Phone}/>
        <Text>9951419589 885270369</Text>
    </AddressItem>
    <AddressItem>
        <Icon src={Send}/>
        <Text>kraju9589@gmail.com</Text>
        <Text>kanakasairaju@gmail.com</Text>
    </AddressItem>
</AddressContainer>
            </Wrapper>
        </Container>
        
        </>
    )
}

export default Contact;