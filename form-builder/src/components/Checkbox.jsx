import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const Container = styled.div`
    position: relative;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 16px;
    user-select: none;
    cursor: pointer;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    input:checked ~ .checkmark {
        background-color: #fff;
        border: 1px solid #828282;
        border-radius: 5px;
    }

    input:checked ~ .checkmark:after {
        display: block;
    }
`;

const Span = styled.span`
  position: absolute;
  top: 0;
  left: 109%;
  height: 20px;
  width: 20px;
  background-color: #eee;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }

  &:after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid #828282;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

const Checkbox = ({ label, onChange, type }) => (
    <Container onClick={onChange} >
        <label>{label}</label>
        <input
            type="checkbox"
            checked={type}
            onChange={onChange}
            />
        <Span className="checkmark"></Span>
    </Container>
)

export default Checkbox;