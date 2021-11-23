import React from 'react'
import styled from 'styled-components'
import qazi from '../Assets/qazi.png'

const Header = () => {
    return (
        <Container>
            <HeaderContainer>
                <HeaderImage src={qazi}/>
                <HeaderTitle>
                    CleverJobs
                </HeaderTitle>
            </HeaderContainer> 
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    height: 70px;
    background-color: rgb(28, 28, 36);
    width: 100%;
`
const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1250px;
    margin-left: 25px;
    gap: 10px;
`

const HeaderImage = styled.img`
    height: 50px;
`

const HeaderTitle = styled.h1`
    color: white;
    font-size: 20px;
    font-weight: 400;
`