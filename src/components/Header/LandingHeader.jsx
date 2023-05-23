import React from 'react';
import styled from 'styled-components';
import { links } from '../../utils/links.js';
import { Link } from 'react-router-dom';

const LandingHeader = () => {
  return (
    <Wrapper>
      <h1>Selody</h1>
      <div className="menu">
        <ul>
          {links.map((link) => {
            return (
              <Link to={link.route} key={link.name}>
                {link.name}
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="auth-btn">
        <Link to="/login">Login</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 5rem;
  max-width: 100vw;
  background: #ffffff;
  h1 {
    font-size: 2.5rem;
    color: #3f72af;
  }
  .menu {
    a {
      color: #112d4e;
      margin: 0 1rem;
      padding-bottom: 0.5rem;
      font-size: 1.15rem;
      font-weight: 500;
      text-transform: uppercase;
      transition: all 0.3s;
      border-bottom: 4px solid transparent;
      &:hover {
        color: #3f72af;
        border-color: #3f72af;
      }
    }
  }
  .auth-btn {
    a {
      font-size: 1.25rem;
      font-weight: 700;
      color: #3f72af;
      transition: all 0.3s;
      &:hover {
        color: #112d4e;
      }
    }
  }
`;

export default LandingHeader;
