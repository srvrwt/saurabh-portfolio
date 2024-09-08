import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import SectionHeading from "./SectionHeading";
import HTML from "../img/html.webp";
import CSS from "../img/css.webp";
import JS from "../img/js.webp";
import jQuery from "../img/jquery.webp";
import Bootstrap from "../img/bootstrap.webp";
import Shopify from "../img/shopify.webp";
import Wordpress from "../img/wordpress.webp";
import Wix from "../img/wix.webp";
import Bigcommerce from "../img/bigcommerce.webp";
import Shift4Shop from "../img/shift4shop.webp";
import Photoshop from "../img/photoshop.webp";

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
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
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { id: 1, name: 'HTML', img: HTML, color: '#e44d26' },
    { id: 2, name: 'CSS', img: CSS, color: '#004ce8' },
    { id: 3, name: 'Javascript', img: JS, color: '#ffdf00' },
    { id: 4, name: 'jQuery', img: jQuery, color: '#0768ac' },
    { id: 5, name: 'Bootstrap', img: Bootstrap, color: '#5e3b7f' },
    { id: 6, name: 'Shopify', img: Shopify, color: '#95bf47' },
    { id: 7, name: 'Wordpress', img: Wordpress, color: '#00769d' },
    { id: 8, name: 'WIX', img: Wix, color: '#020303' },
    { id: 9, name: 'Bigcommerce', img: Bigcommerce, color: '#33313e' },
    { id: 10, name: 'Shift4Shop', img: Shift4Shop, color: '#1171fb' },
    { id: 11, name: 'Adobe Photoshop', img: Photoshop, color: '#1dbdf1' }
  ];

  return (
    <Wrapper>
      <section className="container p-tb skills" id="skills" ref={sectionRef}>
        <SectionHeading
          heading="My Skills"
          subheading="Blending creativity with technical prowess to deliver superior web solutions."
        />
        <div className="skills-container">
          <div className={`skills-con ${animate ? 'animate' : ''}`}>
            {skills.map((skill, index) => (
              <div className="skill" key={skill.id}>
                <div className={`v-line ${index % 2 === 0 ? 'short' : ''}`} style={{ background: skill.color }}></div>
                <div className="skill_img" style={{ borderColor: skill.color, boxShadow: `inset ${skill.color} 0px 0px 60px -40px` }}>
                  <img src={skill.img} alt={skill.name} />
                </div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #e9f7ff;
  .skills-container {
    margin: 0 auto 80px;
  }
  .skills-con {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    text-align: center;
    margin-top: -18px;
  }
  .skill {
    padding: 0 8px;
    border-top: 2px solid #1f4262;
  }
  .skill_img {
    width: max-content;
    margin: auto;
    padding: 16px;
    border-radius: 100%;
    background: #fff;
    transition: transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1.2s ease-out;
    will-change: transform, opacity;
  }
  .v-line {
    width: 2px;
    height: 250px;
    margin: auto;
  }
  .v-line.short {
    height: 100px;
  }
  .skills-con > .skill > .skill_img {
    transform: translateY(100px);
    opacity: 0;
  }
  .skills-con.animate > .skill > .skill_img {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.8s;
  }
  .skills-con.animate > .skill:nth-child(2n) > .skill_img {
    transition-delay: 0.4s;
  }
  .skill img {
    aspect-ratio: 1;
    object-fit: contain;
    max-width: 50px;
    min-width: 40px;
    display: block;
  }
  .skill p {
    margin-top: 8px;
    font-weight: 600;
    font-size: 14px;
  }
`;

export default Skills;
