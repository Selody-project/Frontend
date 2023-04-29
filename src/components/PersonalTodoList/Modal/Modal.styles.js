import styled from 'styled-components';

export const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalContainer = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  height: 500px;
  padding: 20px;
  position: relative;
  width: 100%;
  font-family: 'Inter', sans-serif;
`;

export const ModalHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  color: #4e4e4e;
  cursor: pointer;
  font-size: 50px;
`;

export const ModalInputLabel = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const ModalTitle = styled.input`
  border: none;
  border-bottom: 2px solid black;
  font-size: 16px;
  margin-bottom: 20px;
  width: 100%;
  height: 40px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: 'Inter', sans-serif;
  }
`;

export const ModalInput = styled.input`
  display: block;
  border: none;
  border-radius: 4px;
  background: #f4f6fc;
  font-size: 14px;
  margin-bottom: 20px;
  width: 100%;
  height: 35px;
  font-family: 'Inter', sans-serif;
`;

export const ModalInputGap = styled.div`
  margin-right: 10px;
`;

export const ModalTextarea = styled.textarea`
  border: none;
  background: #f4f6fc;
  display: block;
  font-size: 16px;
  margin-bottom: 20px;
  resize: none;
  width: 100%;

  &::placeholder {
    font-family: 'Inter', sans-serif;
  }
`;

export const ModalDateRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalDateColumn = styled.div`
  display: flex;
  width: 45%;
  border: none;
`;

export const ModalSelectRow = styled.div`
  display: flex;
  justify-content: start;
  margin-bottom: 50px;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Select = styled.select`
  width: 200px;
  margin-right: 20px;
  padding: 6px 12px;
  background-color: white;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
  color: #495057;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

export const SelectLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const SaveButton = styled.button`
  width: 150px;
  background: ${({ disabled }) => (disabled ? '#ccc' : '#6c55fe')};
  border: none;
  border-radius: 4px;
  color: #ffffff;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 20px;
  position: absolute;
  right: 20px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  transition: background 0.3s, opacity 0.3s;

  &:hover {
    background: ${({ disabled }) => (disabled ? '#ccc' : '#A495FF')};
  }
`;
