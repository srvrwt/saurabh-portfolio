import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import SectionHeading from "./SectionHeading";

const Services = () => {

  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const animateObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );

    if (sectionRef.current) {
      animateObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        animateObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Wrapper>
      <section className={`container p-tb ${animate ? 'animate' : ''}`} ref={sectionRef} id="services">
        <SectionHeading
          heading="My Quality Services"
          subheading="We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers."
        />
        <div className="services">
          <div className="d-grid grid-4 p-tb-15 bdr-tb" >
            <h2>01</h2>
            <h2>Web Designing</h2>
            <p>
            Creating visually compelling and user-friendly websites that provide seamless navigation and an immersive user experience.{" "}
            </p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <div className="d-grid grid-4 p-tb-15 bdr-b ">
            <h2>02</h2>
            <h2>Web Development</h2>
            <p>
            Developing robust, responsive, and scalable websites tailored to your specific business needs, ensuring functionality and performance.{" "}
            </p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <div className="d-grid grid-4 p-tb-15 bdr-b ">
            <h2>03</h2>
            <h2>Branding Desing</h2>
            <p>
            Crafting distinctive and impactful brand identities that effectively communicate your brand’s values and resonate with your audience.{" "}
            </p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <div className="d-grid grid-4 p-tb-15 bdr-b ">
            <h2>04</h2>
            <h2>Ui/Ux Desing</h2>
            <p>
            Designing intuitive and engaging interfaces that enhance user satisfaction and drive user engagement through thoughtful, user-centric design.

{" "}
            </p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #fff;
  .services i {
    text-align: right;
    font-size: 24px;
  }
  .d-grid.grid-4 {
    padding-left: 30px;
    padding-right: 30px;
  }
  .d-grid.grid-4:hover {
    background: #238be8;
    transition: all 300ms ease;
    color: #fff;
    border-color:238be8;
  }
  .d-grid.grid-4:hover * {
    color: #fff;
  }


  .services > * {
    transform: translateX(100%);
    opacity: 0;
    transition: transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1.2s ease-out;
    will-change: transform, opacity;
  }

  .container.animate .services > * {
    transform: translateX(0);
    opacity: 1;
  }


  .container.animate .services> *:nth-child(2) {
    transition-delay: 0.4s;
  }
  .container.animate .services> *:nth-child(3) {
    transition-delay: 0.8s;
  }
      .container.animate .services> *:nth-child(4) {
    transition-delay: 1.2s;
  }
  @keyframes slide {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
`;


export default Services;
