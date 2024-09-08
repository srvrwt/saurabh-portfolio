import React from "react";
import styled from "styled-components";
import SectionHeading from "./SectionHeading";

const Resume = () => {
  return (
    <Wrapper>
      <section className="container p-tb" id="resume">
        <div className="d-flex form-container">
          <div className="exprience">
            <SectionHeading
              heading="My Experience"
              subheading="We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers."
            />
            <div className="block m-b-2">
              <h4>july 2022 - june 2024</h4>
              <h3>WEB DESIGNER</h3>
              <p>Makkpress Technologie</p>
            </div>

            <div className="block">
              <h4>jan 2022 - july 2022</h4>
              <h3>WEB DESIGNER</h3>
              <p>Printvanue</p>
            </div>
          </div>
          <div className="exprience">
            <SectionHeading
              heading="My Education"
              subheading="We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers."
            />
            <div className="block m-b-2">
              <h4>2022 - 2024</h4>
              <h3>Master of Computer Appllication</h3>
              <p>INOUG</p>
            </div>

            <div className="block">
              <h4>2018 - 2021</h4>
              <h3>Bachlor of Science in Information Technologies</h3>
              <p>HNB Garhwal University</p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .block {
    background: #fff;
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
  }

  .resume d-flex{
  gap:5rem;}
`;

export default Resume;
