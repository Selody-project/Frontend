import styled from 'styled-components';

export const TodoItemContainer = styled.div`
  display: flex;
  width: 95%;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid #6c55fe;
  border-radius: 15px;
  padding: 10px;
  background-color: ${({ isCompleted }) =>
    isCompleted ? 'lightgray' : 'white'};
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const TodoCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
  width: 25px;
  height: 25px;
`;

export const TodoContent = styled.div`
  flex-grow: 1;
`;

export const TodoTitle = styled.div``;

export const TodoTime = styled.div`
  font-size: 12px;
  color: gray;
`;

export const TodoButton = styled.button`
  margin-right: 10px;
  background-color: transparent;
  border: none;
`;

export const EditButton = styled(TodoButton)``;

export const DeleteButton = styled(TodoButton)`
  margin-right: 0;
`;
