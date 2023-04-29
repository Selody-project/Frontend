import React, { useState } from 'react';
import Modal from 'react-modal';

import { useDispatch, useSelector } from 'react-redux';
import { handleMenuToggle } from '../../../store/user/user-slice';
import { toast } from 'react-toastify';

import { ModalOverlay, ModalContainer } from './Modal.styles';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

Modal.setAppElement('#root');

const ModalWindow = () => {
  const [formValues, setFormValues] = useState({
    title: '',
    details: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    repeat: 'none',
    notification: 'none',
  });

  const today = new Date().toISOString().slice(0, 10);
  let currentDate = today.replace(/-/g, '.');
  currentDate =
    currentDate.slice(0, 4) +
    '년 ' +
    currentDate.slice(5, 7) +
    '월 ' +
    currentDate.slice(8, 10) +
    '일';

  const menuOpen = useSelector((state) => state.user.menuOpen);
  const dispatch = useDispatch();

  const handleMenuOpen = () => {
    dispatch(handleMenuToggle());
  };

  const isTimeValid = () => {
    if (formValues.startDate === formValues.endDate) {
      if (formValues.endTime < formValues.startTime) {
        toast.error(
          '종료 시간은 시작 시간보다 빠를 수 없습니다. 다시 입력해주세요.'
        );
        return false;
      }
    }
    return true;
  };

  const checkFieldsFilled = () => {
    return (
      formValues.title &&
      formValues.details &&
      formValues.startDate &&
      formValues.startTime &&
      formValues.endDate &&
      formValues.endTime
    );
  };

  const handleSubmit = () => {
    // 시간 유효성 검사
    if (!isTimeValid()) {
      return;
    }

    // 일정 저장 로직

    // 폼 초기화
    setFormValues({
      title: '',
      details: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      repeat: 'none',
      notification: 'none',
    });
  };

  return (
    <Modal
      isOpen={menuOpen}
      onRequestClose={handleMenuOpen}
      style={{
        overlay: { background: 'transparent' },
        content: { background: 'transparent', border: 'none' },
      }}
    >
      <ModalOverlay>
        <ModalContainer>
          <ModalHeader
            currentDate={currentDate}
            handleMenuOpen={handleMenuOpen}
          />
          <ModalBody
            formValues={formValues}
            setFormValues={setFormValues}
            today={today}
          />
          <ModalFooter
            handleSubmit={handleSubmit}
            checkFieldsFilled={checkFieldsFilled}
          />
        </ModalContainer>
      </ModalOverlay>
    </Modal>
  );
};

export default ModalWindow;
