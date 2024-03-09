import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  gap: 20px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const DeleteBtn = styled.button`
  padding: 5px;
  border: 1px solid #212121;
  border-radius: 5px;
  outline: none;
  color: #ffffff;
  background-color: #e87777;
  &:hover {
    background-color: #d26666;
  }
  &:focus {
    background-color: #d26666;
  }
  &:active {
    background-color: #aa4545;
  }
`;
