import React from 'react';
import {
  ModalInputLabel,
  ModalTitle,
  ModalInput,
  ModalInputGap,
  ModalTextarea,
  ModalDateRow,
  ModalDateColumn,
  ModalSelectRow,
  SelectContainer,
  Select,
  SelectLabel,
} from './Modal.styles';

const ModalBody = ({ formValues, setFormValues, today }) => {
  return (
    <>
      <ModalTitle
        id="title"
        type="text"
        placeholder="일정 제목"
        value={formValues.title}
        onChange={(e) =>
          setFormValues({ ...formValues, title: e.target.value })
        }
      />
      <ModalTextarea
        id="details"
        rows="5"
        placeholder="상세 내용"
        value={formValues.details}
        onChange={(e) =>
          setFormValues({ ...formValues, details: e.target.value })
        }
      />
      <ModalInputLabel htmlFor="date-time">날짜 및 시간</ModalInputLabel>
      <ModalDateRow>
        <ModalDateColumn>
          <ModalInput
            type="date"
            min={today}
            value={formValues.startDate}
            onChange={(e) =>
              setFormValues({ ...formValues, startDate: e.target.value })
            }
          />
          <ModalInputGap />
          <ModalInput
            type="time"
            value={formValues.startTime}
            onChange={(e) =>
              setFormValues({ ...formValues, startTime: e.target.value })
            }
          />
        </ModalDateColumn>
        ~
        <ModalDateColumn>
          <ModalInput
            type="date"
            min={formValues.startDate || today}
            value={formValues.endDate}
            onChange={(e) =>
              setFormValues({ ...formValues, endDate: e.target.value })
            }
          />
          <ModalInputGap />
          <ModalInput
            type="time"
            value={formValues.endTime}
            onChange={(e) =>
              setFormValues({ ...formValues, endTime: e.target.value })
            }
          />
        </ModalDateColumn>
      </ModalDateRow>
      <ModalSelectRow>
        <SelectContainer>
          <SelectLabel htmlFor="repeat">반복 여부</SelectLabel>
          <Select
            value={formValues.repeat}
            onChange={(e) =>
              setFormValues({ ...formValues, repeat: e.target.value })
            }
            id="repeat"
          >
            <option value="none">반복 안함</option>
            <option value="daily">매일</option>
            <option value="weekly">매주</option>
            <option value="monthly">매월</option>
            <option value="yearly">매년</option>
          </Select>
        </SelectContainer>
        <SelectContainer>
          <SelectLabel htmlFor="notification">알림 기능</SelectLabel>
          <Select
            value={formValues.notification}
            onChange={(e) =>
              setFormValues({ ...formValues, notification: e.target.value })
            }
            id="notification"
          >
            <option value="none">알림 안함</option>
            <option value="5">5분</option>
            <option value="15">15분</option>
            <option value="30">30분</option>
            <option value="60">1분</option>
            <option value="120">2분</option>
          </Select>
        </SelectContainer>
      </ModalSelectRow>
    </>
  );
};

export default ModalBody;
