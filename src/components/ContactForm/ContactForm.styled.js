import styled from 'styled-components';

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;
`;

export const FieldWrapper = styled('div')`
  //...
`;

export const Label = styled('label')`
  display: block;
  &:first-child {
    margin-bottom: 10px;
  }
`;

export const LabelValue = styled('span')`
  display: block;
  font-size: 16px;
  margin-bottom: 2px;
`;

export const Field = styled('input')`
  display: block;
  font-size: 16px;
  width: 100%;
  padding: 5px;
`;

export const Button = styled('button')`
  width: 100px;
  padding: 5px;
  border: 1px solid #212121;
  border-radius: 5px;
  outline: none;
  background-color: #77a5e8;
  color: #ffffff;
  &:hover {
    background-color: #5a89cc;
  }
  &:focus {
    background-color: #5a89cc;
  }
  &:active {
    background-color: #305c9d;
  }
`;

export const ButtonTextWrapper = styled('span')`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
