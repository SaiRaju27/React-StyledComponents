import React from "react";
import styled from "styled-components";
import User1 from '../image/user-1.png';
import User2 from '../image/user-2.png';
import User3 from '../image/user-3.png';

const Container =styled.div`
display:flex;
justify-content:center;

`
const Header=styled.h1`
text-align:center;
`
const Testimonials=styled.div`

display:flex;



`
const Image=styled.img`
border-radius:10px;
width:100%;
`
const Images=styled.div`
text-align: center;
padding: 40px 20px;
box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
border-radius:10px;
margin-right:50px;
width:250px;
flex-wrap: wrap;
padding:15px;
margin-top:25px;
transition:transform 3s ease;

:hover{
    cursor:pointer;
     transform: translateY(-25px)
}
`

const Desc=styled.p`
color:#555;
font-size:20px;
margin-top:8px;
`
const Quote=styled.i`
font-size: 34px;
color: rgb(255, 77, 0);
`



const Team = () =>{
    return( 
        <>
        <Header>Our Team</Header>
        <Container>
       
            <Testimonials>
                
                <Images>
                    <Quote>  <i className="fa fa-quote-left"></i></Quote>
                <Image src={User1}></Image>
                <Desc>
                        We provvide digital experience services to startups and small business to looking for a partner of their digital media design and development , lead genartion and communications reuired .
                    </Desc>
                    </Images>
                <Images>
                <Quote>  <i className="fa fa-quote-left"></i></Quote>
                <Image src={User2}></Image>
                <Desc>
                        We provvide digital experience services to startups and small business to looking for a partner of their digital media design and development , lead genartion and communications reuired .
                    </Desc>
                </Images>
                <Images>
                <Quote>  <i className="fa fa-quote-left"></i></Quote>
                <Image src={User3}></Image>
                <Desc>
                        We provvide digital experience services to startups and small business to looking for a partner of their digital media design and development , lead genartion and communications reuired .
                    </Desc>
                </Images>
            </Testimonials>
        </Container>
        
        </>
    )
}

export default Team;