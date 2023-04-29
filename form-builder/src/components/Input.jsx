import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
    font-size: 18px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #DFDFDF;
    color: #595959; 
    width: 100%;
`;

const Input = ({ type, value, onChange, onBlur }) => {
    return (
        <InputField
            type={type}
            value={value}
            onChange={onChange} 
            onBlur={onBlur}/>
    )
}

export default Input;