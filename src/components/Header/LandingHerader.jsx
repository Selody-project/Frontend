import React from "react";

import styled from "styled-components";
import { links } from "../../utils/links.js";
import { Link } from "react-router-dom";

const LandingHerader = () => {
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
  background: #cdd3df;
  h1 {
    font-size: 2.5rem;
  }
  .menu {
    a {
      color: #555;
      margin: 0 1rem;
      padding-bottom: 0.5rem;
      font-size: 1.15rem;
      font-weight: 500;
      text-transform: uppercase;
      transition: all 0.3s;
      border-bottom: 4px solid #cdd3df;
      &:hover {
        color: #000;
        border-color: #162e5e;
      }
    }
  }
  .auth-btn {
    a {
      font-size: 1.25rem;
      font-weight: 700;
      color: #000;
      transition: all 0.3s;
      &:hover {
        color: #3152c1;
        border-color: #162e5e;
      }
    }
  }
`;

export default LandingHerader;
