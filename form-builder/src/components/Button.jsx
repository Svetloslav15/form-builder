import React from 'react';
import styled from 'styled-components';

const BasicButton = styled.button`
    padding: 7px 12px;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;
    font-weight: 600;
`;

const StyledButton = styled(BasicButton)`
    background-color: #56B456;
    border: 1px solid #4BAE4C;
    color: white;

    &:hover {
        background-color: white;
        color: #56B456;
    }
`;

const OutlinedButton = styled(BasicButton)`
    color: red;
    background: none;
    border: none;
    border: 1px solid white;

    &:hover {
        border: 1px solid red;
    }
`;

const Button = ({ type, label, onClick, outlined }) => (
    <>
        {
            outlined ?
                <OutlinedButton
                    type={type}
                    onClick={onClick}>
                    {label}
                </OutlinedButton > :
                <StyledButton
                    type={type}
                    onClick={onClick}>
                    {label}
                </StyledButton>}

    </>
)

export default Button;