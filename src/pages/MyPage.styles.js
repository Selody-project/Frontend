import styled from 'styled-components';

export const MyPageContainer = styled.div`
  display: flex;
  margin: 50px 50px 0px 50px;
  font-family: 'Inter', sans-serif;
`;

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 160px;
  padding: 10px 20px;
  margin-bottom: 5px;
  border-radius: 50px;
  background-color: ${(props) => (props.selected ? '#6c63ff' : 'transparent')};
  color: ${(props) => (props.selected ? 'white' : 'gray')};
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
  box-shadow: ${(props) =>
    props.selected ? '0px 4px 2px rgba(0, 0, 0, 0.25)' : 'none'};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const UserInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 800px;
  min-height: 500px;
  margin-top: 20px;
  margin-left: 40px;
  padding: 50px;
  border: 2px solid #c6c9d4;
  border-radius: 50px;

  hr {
    border: 1px solid #c6c9d4;
    margin: 20px 0px 20px 0px;
    opacity: 0.3;
  }
`;

export const ProfilePictureContainer = styled.div`
  position: relative;
  width: 82px;
  height: 82px;
  margin-bottom: 20px;
`;

export const ProfilePicture = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
  border-radius: 50%;
`;

export const ImageSelectionButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #6c63ff;
  color: white;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export const UserInfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInfoItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  display: inline-block;
  width: 60px;
  color: #262626;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`;

export const InputField = styled.input`
  width: 200px;
  height: 32px;
  margin-left: 10px;
  padding: 5px;
  background-color: #f0f0f0;
  border: none;

  outline: none;
  &:focus {
    border: 1px solid #6c63ff;
  }
`;

export const PasswordContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PasswordChangeButton = styled.button`
  width: 50px;
  height: 40px;
  background-color: #6c63ff;
  color: white;
  border: none;
  cursor: pointer;
  margin-left: 15px;
  padding: 5px 10px;
  border-radius: 5px;

  &:hover {
    background-color: #5a4ee3;
  }

  &:disabled {
    background-color: #c6c9d4;
    cursor: not-allowed;
  }
`;

export const SaveButton = styled.button`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  justify-content: center;
  width: 150px;
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #5a4ee3;
  }

  &:disabled {
    background-color: #c6c9d4;
    cursor: not-allowed;
  }
`;
