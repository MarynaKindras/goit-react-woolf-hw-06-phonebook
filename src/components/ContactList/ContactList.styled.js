import styled from 'styled-components';

export const List = styled('ul')``;

export const Item = styled('li')`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CardWrapper = styled('div')`
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 20px;
    align-items: center;
  }
`;

export const Meta = styled('p')`
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 5px;
    align-items: center;
  }
`;

export const Name = styled('span')`
  display: block;
  font-size: 16px;
  width: 150px;
`;

export const Tel = styled('span')`
  display: block;
  font-size: 16px;
  width: 150px;

  @media screen and (max-width: 767.98px) {
    margin-top: 5px;
  }
`;

export const Delete = styled('button')`
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
