import React from 'react';
import { ModalHeaderStyled, ModalCloseButton } from './Modal.styles';

const ModalHeader = ({ currentDate, handleMenuOpen }) => (
  <ModalHeaderStyled>
    <span>{currentDate}</span>
    <ModalCloseButton onClick={handleMenuOpen}>×</ModalCloseButton>
  </ModalHeaderStyled>
);

export default ModalHeader;
