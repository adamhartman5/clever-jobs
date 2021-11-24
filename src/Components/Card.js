import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Modal from './CardMoreDetailsModal';

const Card = ({logo, jobTitle, jobDescription}) => {
    
    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);

    return (
        <CardContainer>
            <CardItem>
                <CardHeaderContainer>
                    <CardHeaderImage src={logo} />
                    <MoreDetailsButton class='moreDetails' onClick={() => Toggle()} >
                        <MoreHorizIcon />
                        <Modal show={modal} />
                    </MoreDetailsButton>
                    
                </CardHeaderContainer>
                <JobTitle>
                    {jobTitle}
                </JobTitle>
                <JobDescriptionContainer>
                    <JobDescription>
                        {jobDescription}
                    </JobDescription>
                </JobDescriptionContainer>
                <ButtonContainer>
                    <ApplyNowButton>
                        Apply now
                    </ApplyNowButton>
                    <MessageButton>
                        Message
                    </MessageButton>
                </ButtonContainer>
            </CardItem>
        </CardContainer>
    )
}

export default Card

const CardContainer = styled.div`
    flex: 0.33 1 250px;
    background-color: rgb(28, 28, 36);
    padding: 30px;
    border-radius: 10px;
    transition: 0.2s ease 0s;
    align-items: stretch;

    :hover{
        transform: scale(1.05);
    }
`
const CardItem = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    background-color: (28, 28, 36);
    border-radius: 10px;
    justify-content: space-between;
    height: 100%;

`
const CardHeaderContainer = styled.div`
    
    display: flex;
    justify-content: space-between;
`
const CardHeaderImage = styled.img`
    height: 50px;
    border-radius: 10px;
`
const JobTitle = styled.h1`
    color: white;
    margin: 15px 0px;
    font-size: 20px;
`
const JobDescriptionContainer = styled.div`
    display: flex;
    overflow: hidden;
    flex-grow: 1;
`
const JobDescription = styled.p`
    display: flex;
    color: lightgray;
    font-size: 18px;
`

const ButtonContainer = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
`
const ApplyNowButton = styled.div`
    background-color: rgb(48,96,255);
    height: 40px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    max-width: 120px;
    color: white;
    cursor: pointer;

    :hover{
        background-color: rgb(92, 130, 255);
    }
`
const MessageButton = styled.div`
    background-color: rgb(46, 46, 57);
    color: rgb(150,147,155);
    height: 40px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    max-width: 120px;
    cursor: pointer;
`

const MoreDetailsButton = styled.button`
    background: none;
    color: white;
    border: none;
    cursor: pointer;

`