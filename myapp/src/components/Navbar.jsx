import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
height:50px;
`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
`
const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    
`
const Logo = styled.h1`
    font-weight: bold;
    text-decoration: underline blue;
`
const Menu = styled.ul`
list-style-type: none;



`
const MenuItem = styled.li`
justify-content: space-between;

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
                    <span>Button</span>
                </Wrapper>
            </Container>
        </>

    )
}

export default Navbar;