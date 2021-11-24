import React from 'react'
import styled from 'styled-components'

const CardMoreDetailsModal = ({show}) => {
    return (
        <>
        {
            show ?
            <Container>
                Modal 
            </Container>
            : null
        }
        </>
    )
}

export default CardMoreDetailsModal

const Container = styled.div`

`