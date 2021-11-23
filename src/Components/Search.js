import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({filter, setFilter}) => {

    return (
        <SearchContainer>
            <SearchIconContainer>
                <SearchIcon />
            </SearchIconContainer>
            <SearchBox 
                placeholder="Filter by title"
                value={filter}
                onChange={event => setFilter(event.target.value)}
            />
        </SearchContainer>
    )
}

export default Search

const SearchContainer = styled.div`
    background-color: rgb(28, 28, 36);
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: 2px solid rgb(34, 35, 40);
    overflow: hidden;
    margin: 20px 0px;
`

const SearchIconContainer = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    margin-left: 25px;
`

const SearchBox = styled.input`
    flex-grow: 1;
    background-color: rgb(28, 28, 36);
    color: white;
    outline: currentcolor none medium;
    border: medium none;
    font-size: 20px;
    margin-left: 20px;
    font-weight: 300;
`
