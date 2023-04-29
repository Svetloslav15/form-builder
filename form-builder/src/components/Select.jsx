import React from 'react';
import styled from 'styled-components';

const SelectComponent = styled.select`
    background-color: white;
    border: thin solid #545454;
    border-radius: 4px;
    display: inline-block;
    font: inherit;
    line-height: 1.5em;
    padding: 0.5em 3.5em 0.5em 1em;
    width: 120%;

    margin: 0;      
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image:
        linear-gradient(45deg, transparent 50%, #545454 50%),
        linear-gradient(135deg, #545454 50%, transparent 50%),
        linear-gradient(to right, #EEEEEE, #EEEEEE);
    background-position:
        calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px),
        100% 0;
    background-size:
        5px 5px,
        5px 5px,
        2.5em 2.5em;
    background-repeat: no-repeat;

    &:focus {
        background-image:
            linear-gradient(45deg, white 50%, transparent 50%),
            linear-gradient(135deg, transparent 50%, white 50%),
            linear-gradient(to right, gray, gray);
        background-position:
            calc(100% - 15px) 1em,
            calc(100% - 20px) 1em,
            100% 0;
        background-size:
            5px 5px,
            5px 5px,
            2.5em 2.5em;
        background-repeat: no-repeat;
        border-color: grey;
        outline: 0;
  }

    @media (max-width: 1270px) {
        width: 100%;
    }
`;

const Select = ({ onChange, children }) => (
    <SelectComponent onChange={onChange}>
        {children}
    </SelectComponent>
)

export default Select;