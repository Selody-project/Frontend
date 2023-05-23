import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';
import styled from 'styled-components';

const Landing = () => {
  const bounceAnimation = {
    y: ['0px', '20px', '0px'],
    transition: {
      y: {
        duration: 1,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <Wrapper>
      <div className="left">
        <motion.img
          src="/logo.svg"
          animate={bounceAnimation}
          width={500}
          height={500}
        />
      </div>
      <div className="right">
        <h1>Selody와 함께 그룹 일정 공유 및 관리를 해보세요 !</h1>
        <div className="typing-animation">
          <ReactTypingEffect
            text={[
              'Selody는 개인 일정 관리 및 그룹 일정을 관리하는 플랫폼입니다. 프로젝트 공동 작업에서 이벤트 계획에 이르기까지 Selody는 일정을 단순화하여 더 쉽고 체계적으로 관리할 수 있습니다. 오늘 Selody와 함께 시작하세요!',
            ]}
            speed={40}
            eraseSpeed={30}
            typingDelay={500}
            eraseDelay={5000}
          />
        </div>
        <Link to="/login" className="auth-btn">
          시작하기
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5rem;
  background: #fff;
  color: #383838;
  height: calc(100vh - 5rem);
  max-width: 100vw;

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
  }

  .right {
    .typing-animation {
      min-height: 100px;
    }

    max-width: 50%;
  }

  h1 {
    font-size: 2.5rem;
    color: #3f72af;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.2rem;
    color: #112d4e;
    margin-bottom: 2rem;
  }

  .auth-btn {
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
    background-color: #3f72af;
    padding: 1rem 2rem;
    border-radius: 0.25rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #112d4e;
    }
  }
`;

export default Landing;
