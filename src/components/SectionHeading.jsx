import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";

const SectionHeading = (props) => {
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
      <div className={`container sec_heading ${animate ? 'animate' : ''}`} ref={sectionRef}>
        <h2 className="heading">{props.heading}</h2>
        <p className="subheading">{props.subheading}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sec_heading {
    text-align: left;
  }
  h2 {
    font-size: 70px
  }


  .sec_heading > * {
    transform: translateY(30px);
    opacity: 0;
    transition: transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1.2s ease-out;
    will-change: transform, opacity;
  }

  .sec_heading.animate > * {
    transform: translateY(0);
    opacity: 1;
  }



.sec_heading.animate  > *:nth-child(2) {
    transition-delay: 0.4s;
  }

  @keyframes slide {
    0% {
      transform: translateY(30px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
`;

export default SectionHeading;
