import styled from 'styled-components';

export const TodoContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 20px;
  height: 450px;
  min-width: 450px;
  max-width: 450px;
  font-family: 'Inter';
`;

export const TodoHeader = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const TodoTabs = styled.div`
  min-width: 350px;
  max-width: 350px;
  display: flex;
  width: 100%;
  height: 33px;
  border: 2px solid #e5e5e5;
  border-radius: 5px;
`;

export const TodoTab = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  border-radius: 5px;
  background: ${(props) => (props.selected ? '#A495FF' : 'none')};
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => (props.selected ? 'white' : '#121127')};
  opacity: ${(props) => (props.selected ? '1' : '0.6')};
  transition: opacity 0.3s ease, background 0.3s ease, color 0.3s ease;

  &:hover {
    opacity: 1;
    background: #a495ff;
    color: white;
    border-radius: 5px;
  }
`;

export const AddEventButton = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: #6c55fe;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const TodoBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(230, 233, 236, 0.4);
  height: 400px;
  min-width: 450px;
  max-width: 450px;
  border-radius: 48px;
  // box-shadow: 0px 5px 50px 4px rgba(0, 0, 0, 0.15);
  padding: 20px;
`;

export const TodoTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: #313131;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const TodoSubtitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  color: #2f2f2f;
  margin-bottom: 20px;
  color: #777;
  padding: 0;
  margin: 0px 0px 20px 0px;
`;

export const TodoButton = styled.button`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 10px;
  border: 1px solid #6c55fe;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  cursor: pointer;
  color: #30374f;
  margin-top: 20px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;
