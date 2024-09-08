import React from "react";
import styled from "styled-components";
import logo from "../img/SrvRwt.webp";
import star from "../img/btn_star.webp";

const Header = () => (
  <Wrapper>
    <header>
      <div className="sticky-header">
        <div className="container navigation">
          <img className="logo" src={logo} alt="Saurabh Rawat" />
          <nav>
            <ul>
              {["Services", "Works", "Skills", "Resume", "Contact"].map((item) => (
                <li key={item}><a href={`#${item.toLowerCase()}`}>{item}</a></li>
              ))}
              <li>
                <a className="nav-btn" href="/">
                  Hire Me
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className={`star-${i + 1}`}>
                      <img src={star} alt="Button star" />
                    </div>
                  ))}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </Wrapper>
);

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: #f7fcff;
  border-radius: 15px;
  margin-bottom: 15px;

  .logo { max-width: 200px; }
  .navigation {
    display: flex;
    width: 100%;
    gap: 2rem;
    align-items: center;
    padding: 15px 0;
    justify-content: space-between;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 3rem;
  }
  li {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      border-radius: 2px;
      background: -webkit-linear-gradient(42deg, #1d1c1c, #248be7);
      transition: all 0.3s ease-in-out;
    }
    &:hover:after { width: 100%; }
    &:has(.nav-btn):after { content: none; }
  }
  a {
    transition: all 0.3s ease-in-out;
  }
  .nav-btn {
    position: relative;
    padding: 0.4rem 1rem;
    background: #1d1c1c;
    color: #ffffff;
    border: 2px solid #1d1c1c;
    border-radius: 8px;
    box-shadow: 0 0 0 #fec1958c;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    > div {
      position: absolute;
      height: auto;
      filter: drop-shadow(0 0 0 #fffdef);
      z-index: -5;
      transition: all 0.5s ease-in-out;
    }
  }
  li:hover a.nav-btn,
  li:hover a {
    background: -webkit-linear-gradient(42deg, #1d1c1c, #248be7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .nav-btn:hover {
    background: transparent;
    color: #1d1c1c;
    > div {
      filter: drop-shadow(0 0 10px #fffdef);
      z-index: 2;
    }
  }
  ${[...Array(6)].map((_, i) => `
    .star-${i + 1} {
      top: ${[20, 45, 40, 20, 25, 5][i]}%;
      left: ${[20, 45, 40, 40, 45, 50][i]}%;
      width: ${[25, 15, 5, 8, 15, 5][i]}px;
    }
    .nav-btn:hover .star-${i + 1} {
      top: ${[-40, -25, 55, 30, 25, 5][i]}%;
      left: ${[-30, 10, 25, 80, 115, 60][i]}%;
      width: ${[25, 15, 12, 8, 15, 5][i]}px;
    }
  `).join('')}
`;

export default Header;
