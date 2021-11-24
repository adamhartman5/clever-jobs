import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import Search from './Search'
import Card from './Card'
import axios from 'axios';

const Main = () => {

    const [jobs, setJobs] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(()=>{
        axios.get("https://cpbootcamp.proxy.beeceptor.com/devjobs")
        .then((response)=>{
            const data = response.data
            setJobs(data)
        })
    },[])

    const filteredJobs = jobs.filter((jobData) => jobData.roleName.toLowerCase().includes(filter.toLowerCase())).map((jobData)=>{
            let logo = jobData.logo;
            let jobTitle = jobData.roleName;
            let jobDescription = jobData.requirements.content;
            return <Card logo={logo} jobTitle={jobTitle} jobDescription={jobDescription} />;
        })
        
    return (
        <Container>
            <MainContainer>
                <SearchContainer>
                    <Search filter={filter} setFilter={setFilter} />
                </SearchContainer>
                <SearchResultsContainer>
                    <SearchResults>
                        Showing {filteredJobs.length} Jobs
                    </SearchResults>
                </SearchResultsContainer>
                <CardContainer>
                    {filteredJobs.map((jobData)=> {
                        return jobData
                    })}
                </CardContainer>
            </MainContainer>
        </Container>
    )
}

export default Main

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const MainContainer = styled.div`
    max-width: 1250px;
    width: 100%;
    padding: 0px 20px;
`

const SearchContainer = styled.div``

const SearchResultsContainer = styled.div`
    width: 100%;
    margin-left: 25px;
    margin-bottom: 20px;
    color: white;
    font-size: 8px;
`

const SearchResults = styled.h1`
    font-weight: 400;    
`
const CardContainer = styled.div`
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
`

