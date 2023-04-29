import React from 'react';
import { SaveButton } from './Modal.styles';

const ModalFooter = ({ handleSubmit, checkFieldsFilled }) => (
  <SaveButton onClick={handleSubmit} disabled={!checkFieldsFilled()}>
    저장하기
  </SaveButton>
);

export default ModalFooter;
