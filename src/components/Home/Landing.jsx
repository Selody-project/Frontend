import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

import { BG02, P01, P02, P03, P04 } from "../../img/index.js";
import styled from "styled-components";

const Landing = () => {
  const [elIsVisible, setElIsVisible] = useState(false);
  const bg = {
    true: {
      left: "7rem",
    },
    false: {
      left: "19rem",
    },
  };
  const musicPlayer = {
    true: {
      left: "295px",
    },
    false: {
      left: "235px",
    },
  };
  const rect = {
    true: {
      left: "11rem",
    },
    false: {
      left: "13rem",
    },
  };
  const heart = {
    true: {
      left: "9rem",
    },
    false: {
      left: "12.5rem",
    },
  };

  return (
    <ReactVisibilitySensor
      onChange={(isVisible) => setElIsVisible(isVisible)}
      minTopValue={300}
    >
      <Wrapper>
        <div className="left">
          <span>
            그룹간의 <b>일정</b>을 공유해보세요
          </span>
          <span className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit atque sed aliquid,
            <br /> error illum facere veniam explicabo ea, facilis in nulla ex
            possimus.
            <br /> Facilis minima, neque alias dicta porro error!
          </span>
        </div>
        <div className="right">
          <motion.img
            transition={{ duration: 2, type: "ease-out" }}
            variants={bg}
            animate={`${elIsVisible}`}
            src={BG02}
          />
          <img src={P01} />
          <motion.img
            variants={musicPlayer}
            animate={`${elIsVisible}`}
            transition={{
              duration: 2,
              type: "ease-out",
            }}
            src={P02}
          />
          <motion.img
            variants={rect}
            animate={`${elIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 2,
            }}
            src={P03}
          />
          <motion.img
            variants={heart}
            animate={`${elIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 2,
            }}
            src={P04}
          />
        </div>
      </Wrapper>
    </ReactVisibilitySensor>
  );
};

const Wrapper = styled.div`
  background: #081730;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
  max-width: 100vw;
  height: calc(100vh - 5rem);
  position: relative;
  overflow: hidden;
  .left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 2rem;
  }
  .info {
    font-size: 1rem;
    color: #525d6e;
    margin-top: 1rem;
  }
  .right {
    position: relative;
    width: 50%;
    img {
      position: absolute;
      &:nth-child(1) {
        width: 100%;
        top: -8rem;
        left: 19rem;
      }
      &:nth-child(2) {
        top: -15rem;
        left: 13rem;
        height: 34rem;
      }
      &:nth-child(3) {
        top: 94px;
        left: 235px;
        width: 175px;
      }
      &:nth-child(4) {
        top: 12rem;
        left: 13rem;
        width: 5rem;
      }
      &:nth-child(5) {
        top: 12rem;
        left: 12.5rem;
        width: 5rem;
      }
    }
  }
`;

export default Landing;
