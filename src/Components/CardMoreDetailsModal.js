import React from 'react'
import styled from 'styled-components'

const CardMoreDetailsModal = ({show}) => {
    return (
        <>
        {
            show ?
            <Container>
                <Modal>
                    <MoreDetailsContainer>
                        <MoreDetails>More details</MoreDetails>
                    </MoreDetailsContainer>
                    <RemoveJobContainer>
                        <RemoveJob>Remove job</RemoveJob>
                    </RemoveJobContainer>
                </Modal>
            </Container>
            : null
        }
        </>
    )
}

export default CardMoreDetailsModal

const Container = styled.div`
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Modal = styled.div`

`

const MoreDetailsContainer = styled.div`

`

const MoreDetails = styled.h3`

`

const RemoveJobContainer = styled.div`

`

const RemoveJob = styled.h3`

`