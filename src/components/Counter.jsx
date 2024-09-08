import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import CountUp from 'react-countup';

const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const countUpRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

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

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    if (sectionRef.current) {
      animateObserver.observe(sectionRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
      if (sectionRef.current) {
        animateObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Wrapper>
      <section className={`counter p-tb-5 ${animate ? 'animate' : ''}`} ref={sectionRef}>
        <div className="container d-flex usp" ref={countUpRef}>
          {isVisible && (
            <>
              <div className="usp_con">
                <CountUp start={0} end={2} duration={5} delay={0}>
                  {({ countUpRef }) => (
                    <span ref={countUpRef} />
                  )}
                </CountUp>+
                <span>Years of <br />Experience</span>
              </div>
              <div className="usp_con bdr">
                <CountUp start={0} end={12} duration={5} delay={0}>
                  {({ countUpRef }) => (
                    <span ref={countUpRef} />
                  )}
                </CountUp>+
                <span>Project<br />Completed</span>
              </div>
              <div className="usp_con">
                <CountUp start={0} end={16} duration={5} delay={0}>
                  {({ countUpRef }) => (
                    <span ref={countUpRef}  /> 
                  )}
                </CountUp>+
                <span>Happy <br />Clients</span>
              </div>
            </>
          )}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
background:#fff;
margin: 15px 0;
border-radius:15px;
  .usp_con {
    display: flex;
    font-size: 64px;
    font-weight: 700;
    align-items: center;
    gap: 1rem;
    flex:1;
    color:var(--primary);
    justify-content: center;
  }
      .usp_con.bdr{
    border: 1px solid #f8f8f8;
    border-style: none solid;
}
  .container.usp {
    gap: 1rem;
  }
.usp_con span:first-child {
    font-size: 49px;
    line-height: 0.8;
    font-weight: 700;
    background: #f8f8f8;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    color: var(--primary);
    /* font-weight: 900; */
    font-family: 'Anton', sans-serif;
}
  .usp_con span:nth-child(2) {
    font-size: 20px;
  }
  .usp_con > span:last-child {
    font-weight: normal;
  }

  .counter .usp > * {
    transform: translateY(30px);
    opacity: 0;
    transition: transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1.2s ease-out;
    will-change: transform, opacity;
  }

  .counter.animate .usp > * {
    transform: translateY(0);
    opacity: 1;
  }



  .counter.animate .usp > *:nth-child(2) {
    transition-delay: 0.4s;
  }

  .counter.animate .usp > *:nth-child(3) {
    transition-delay: 0.8s;
  }

  .counter.animate .usp > *:nth-child(4) {
    transition-delay: 1.2s;
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
  }
`;

export default Counter;
