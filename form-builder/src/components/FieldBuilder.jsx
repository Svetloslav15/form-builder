import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Group from './Group';
import Checkbox from './Checkbox';
import Select from './Select';
import Button from './Button';
import { uploadMock } from '../services/mock-service';

const Container = styled.div`
    width: 30%;
    border: 1px solid #C4EBF3;
    border-radius: 5px;
    position: fixed;
    top: 43%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 970px) {
        width: 80%;
    }
`;

const ErrorMessage = styled.p`
    color: red;
    text-align: center;
`;

const Header = styled.h3`
    background-color: #D9EEF7;
    color: #206D93;
    padding: 10px 15px;
    margin: 0;
`;

const FieldsContainer = styled.div`
    padding: 1.5rem 2rem;
`;

const TextArea = styled.textarea`
    font-size: 18px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #DFDFDF;
    color: #595959; 
    width: 100%;
`;

const TypeContainer = styled.div`
    display: flex;
`;

const Note = styled.span`
    color: #545454;
    position: relative;
    left: 39px;
    cursor: pointer;
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        margin: 0 10px;
    }
`;

const FieldBuilder = () => {
    const [label, setLabel] = useState('');
    const [defaultValue, setDefaultValue] = useState('');
    const [type, setType] = useState(false);
    const [choices, setChoices] = useState('');
    const [order, setOrder] = useState(1);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('field-builder-data'));
        setLabel(savedData.Label);
        setDefaultValue(savedData['Default Value']);
        setType(savedData.Type);
        setChoices(savedData.Choices.join('\n'));
        setOrder(savedData.Order);
        setLoading(false);
    }, []);

    useEffect(() => {
        if (!loading) {
            const choicesArray = choices.split('\n')
                .map(c => c.trim())
                .filter(c => c !== '')
            const data = {
                Label: label.trim(),
                Type: !!type,
                'Default Value': defaultValue.trim(),
                Choices: choicesArray,
                Order: order
            };

            localStorage.setItem('field-builder-data', JSON.stringify(data));
        }
    }, [label, defaultValue, type, choices, order])

    const removeDuplicatedChoices = (ev) => {
        setChoices([...new Set(choices.split('\n'))].join('\n'))
    }

    const addDefaultValueInChoices = () => {
        if (!choices.split('\n').includes(defaultValue)) {
            setChoices(`${choices}\n${defaultValue}\n`);
        }
    }

    const submitValues = () => {
        const maxAllowedChoicesCount = 50;
        const choicesArray = choices.split('\n')
            .map(c => c.trim())
            .filter(c => c !== '')

        if (!label.trim()) {
            setError('Label is required!')
        }
        else if (choicesArray.length > maxAllowedChoicesCount) {
            setError(`You cannot add more than ${maxAllowedChoicesCount} choices.`)
        }
        else {
            setError('');
        }
        const data = {
            Label: label.trim(),
            Type: !!type,
            'Default Value': defaultValue.trim(),
            Choices: choicesArray,
            Order: order
        };
        console.log(data)
        uploadMock(data);
    }

    const clearSelection = () => {
        setLabel('');
        setDefaultValue('');
        setType(false);
        setChoices('');
        setOrder(1);
        setError('');
    }

    return (
        <Container>
            <Header>Field Builder</Header>
            <FieldsContainer>
                <ErrorMessage>{error}</ErrorMessage>
                <Group label='Label'>
                    <Input
                        type="text"
                        onChange={(ev) => setLabel(ev.target.value)}
                        value={label} />
                </Group>
                <Group label='Type'>
                    <TypeContainer>
                        <Checkbox
                            type={type}
                            onChange={(ev) => setType(!type)}
                            label='Multi-select' />
                        <Note>A Value is required</Note>
                    </TypeContainer>
                </Group>
                <Group label='Default Value'>
                    <Input
                        type="text"
                        onChange={(ev) => setDefaultValue(ev.target.value)}
                        onBlur={addDefaultValueInChoices}
                        value={defaultValue} />
                </Group>
                <Group type='Choices'>
                    <TextArea
                        rows={8}
                        value={choices}
                        onChange={(ev) => setChoices(ev.target.value)}
                        onBlur={removeDuplicatedChoices}>
                    </TextArea>
                </Group>
                <Group label='Order'>
                    <Select
                        onChange={(ev) => setOrder(+ev.target.value)}>
                        <option value={1}>A-Z</option>
                        <option value={2}>Z-A</option>
                    </Select>
                </Group>
                <ButtonsContainer>
                    <Button
                        type='submit'
                        onClick={submitValues}
                        label='Save changes' />
                    <span>Or</span>
                    <Button
                        type='submit'
                        onClick={clearSelection}
                        label='Cancel'
                        outlined />
                </ButtonsContainer>
            </FieldsContainer>
        </Container>
    )
}

export default FieldBuilder;