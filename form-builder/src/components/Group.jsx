import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    margin: 18px 0;
    justify-content: flex-start;

    @media (max-width: 1270px) {
        flex-direction: column;
    }
`;

const FieldLabel = styled.label`
    min-width: 30%;
    align-self: center;
    font-weight: 600;

    @media (max-width: 1270px) {
        margin-bottom: 10px;
        align-self: unset;
    }
`;

const ChildrenContainer = styled.div`
    width: 50%;

    @media (max-width: 1270px) {
        width: 100%;
    }
`;

const Group = ({label, children}) => (
    <Container>
        <FieldLabel>{label}</FieldLabel>
        <ChildrenContainer>
        {children}
        </ChildrenContainer>
    </Container>
)

export default Group;