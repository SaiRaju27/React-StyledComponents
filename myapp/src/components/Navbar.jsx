import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
height:75px;
`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
`
const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.h1`
    font-weight: bold;
    text-decoration:underline blue;
`
const Menu = styled.ul`
list-style-type: none;
display:flex;
`
const MenuItem = styled.li`
margin:20px;
font-size:20px;
font-weight:bold;
color:gray;
`
const Button = styled.div`
    border:2px solid white;
    padding:10px 15px;
    color:white;
    background:crimson;
    font-weight:bold;
    border-radius:10px;
`

const Navbar = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Left><Logo>Agency</Logo>
                        <Menu>
                            <MenuItem>Home</MenuItem>
                            <MenuItem>About</MenuItem>
                            <MenuItem>Services</MenuItem>
                            <MenuItem>Price</MenuItem>
                            <MenuItem>Contact</MenuItem>

                        </Menu>
                    </Left>
                    <Button>Join Today</Button>
                </Wrapper>
            </Container>
        </>

    )
}

export default Navbar;