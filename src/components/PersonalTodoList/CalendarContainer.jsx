import React, { useState } from "react";
import Calendar from "react-calendar";
import { DayPilot, DayPilotCalendar } from "@daypilot/daypilot-lite-react";

import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const CalendarContainer = () => {
  const [calType, setCalType] = useState(true);
  const [calDate, setCalDate] = useState(new Date());

  const showMonthly = () => {
    setCalType(false);
  };
  const showWeekly = () => {
    setCalType(true);
  };

  const config = {
    viewType: "Week",
    durationBarVisible: true,
    timeRangeSelectedHandling: "Enabled",
  };

  return (
    <Wrapper>
      <div className="btns">
        <button onClick={showMonthly}>월간</button>
        <button onClick={showWeekly}>주간</button>
      </div>
      {!calType && <Calendar onChange={setCalDate} value={calDate} />}
      {calType && (
        <div className="week">
          <DayPilotCalendar {...config} />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .btns {
    position: absolute;
    top: -10%;
    right: 10%;
    button {
      border: 2px solid #2e78d6;
      background-color: transparent;
      padding: 0.5rem 1rem;
      cursor: pointer;
      margin-left: 0.3rem;
      transition: all 0.3s;
      &:hover {
        background: #2e78d6;
        color: #fff;
      }
    }
  }

  .react-calendar {
    width: 60%;
    height: 100%;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  .react-calendar__navigation button {
    color: #6f48eb;
    min-width: 44px;
    background: none;
    font-size: 16px;
    margin-top: 8px;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #f8f8fa;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #000;
  }
  .react-calendar__month-view__days__day:nth-child(7n) {
    color: #d10000;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #999;
  }
  .react-calendar__month-view__days__day--neighboringMonth:last-child {
    color: #999;
  }
  abbr[title] {
    color: #333;
    text-decoration: none;
  }
  .react-calendar__tile {
    transition: all 0.3s;
  }
  .react-calendar__tile:enabled {
    height: 70px;
    &:hover,
    &:focus {
      background: #d9d9e8;
      color: #7c5bea;
      border-radius: 6px;
    }
  }
  .react-calendar__tile--range {
    background: #8eeeee81;
    color: #6f48eb;
    border-radius: 0;
  }
  .react-calendar__tile--now {
    background: #6f48eb33;
    border-radius: 6px;
    font-weight: bold;
    color: #6f48eb;
  }

  .week {
    width: 80%;
    height: 100%;
    margin-bottom: 2rem;
  }

  .calendar_default_event_inner {
    background: #2e78d6;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 10pt;
    padding: 5px;
    opacity: 0.8;
  }
`;

export default CalendarContainer;
