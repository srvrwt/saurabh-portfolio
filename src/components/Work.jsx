import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import SectionHeading from "./SectionHeading";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import speedy from "../img/Website-Speedy.webp";
import Saas from "../img/1Saas-Agency.webp";
import elektro from "../img/elektro-chopper.webp";
import mammotion from "../img/mammotion.webp";
import collective from "../img/collective-labs.webp";
import RIJAC from "../img/RIJAC.webp";
import she from "../img/she-rebel-fitwear.webp";
import thujor from "../img/thujor-se.webp";
import Nutressa from "../img/Nutressa.webp";
import DoctorSamples from "../img/DoctorSamples-com.webp";
import mushroom from "../img/mushroom-Rise.webp";
import ixsound from "../img/ixsound.webp";

const Work = () => {
  const [activeTab, setActiveTab] = useState("All Projects");
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const projects = [
    { id: 1, category: "scratch", src: speedy, alt: "Website Speedy", content: "This is a project created from scratch.", link: "#" },
    { id: 2, category: "scratch", src: Saas, alt: "1Saas Agency", content: "1Saas Agency project details.", link: "#" },
    { id: 3, category: "shopify", src: elektro, alt: "Website Elektro", content: "Shopify site for Elektro.", link: "#" },
    { id: 4, category: "shopify", src: mammotion, alt: "Website Mammotion", content: "Mammotion Shopify project.", link: "#" },
    { id: 5, category: "shopify", src: collective, alt: "Website Collective", content: "Collective Labs Shopify store.", link: "#" },
    { id: 6, category: "shopify", src: RIJAC, alt: "Website RIJAC", content: "RIJAC Shopify site description.", link: "#" },
    { id: 7, category: "shopify", src: she, alt: "Website She", content: "She Rebel Fitwear project info.", link: "#" },
    { id: 8, category: "shopify", src: thujor, alt: "Website Thujor", content: "Thujor Shopify site details.", link: "#" },
    { id: 9, category: "bigcommerce", src: Nutressa, alt: "Website Nutressa", content: "Nutressa Bigcommerce store.", link: "#" },
    { id: 10, category: "bigcommerce", src: mushroom, alt: "Website Mushroom", content: "Mushroom Rise Bigcommerce project.", link: "#" },
    { id: 11, category: "bigcommerce", src: DoctorSamples, alt: "Website DoctorSamples", content: "DoctorSamples.com Bigcommerce details.", link: "#" },
    { id: 12, category: "shift4shop", src: ixsound, alt: "Website Ixsound", content: "Ixsound Shift4Shop site.", link: "#" },
  ];

  const filteredProjects = activeTab === "All Projects"
    ? projects
    : projects.filter((project) => project.category === activeTab.toLowerCase());

  useEffect(() => {
    const animateObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -30% 0px" }
    );

    if (sectionRef.current) {
      animateObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        animateObserver.unobserve(sectionRef.current);
      }
    };
  }, [activeTab]);

  useEffect(() => {
    const swiper = new Swiper(".work-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      mousewheel: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    return () => {
      if (swiper && swiper.destroy) swiper.destroy();
    };
  }, []);

  return (
    <Wrapper className="project_wrapper">
      <section className="container p-tb" id="work" ref={sectionRef}>
       <div className='work_wrap'>
        <div className="tab_heading">
        <div className="tabber">
          <ul>
            {["All", "Scratch", "Shopify", "Bigcommerce", "Shift4shop"].map((tab) => (
              <li key={tab}>
                <span
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <SectionHeading
          heading="My Recent Works"
          subheading="We bring your ideas to life through innovative web projects."
        />
        </div>
        <div className="swiper work-slider">
          <TransitionGroup className="projects swiper-wrapper">
            {filteredProjects.map((project, index) => (
              <CSSTransition key={project.id} timeout={500} classNames="project">
                <div className={`project swiper-slide ${project.category} ${animate ? 'animate' : ''}`} style={{ transitionDelay: `${index * 0.4}s` }}>
                  <img src={project.src} alt={project.alt} />
                  <div className="project-info">
                    <h3>{project.alt}</h3>
                    <p>{project.content}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                  </div>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
          <div className="swiper-pagination"></div>
        </div>
       </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .tabber li {
    position: relative;
  }

  .tabber li:after {
    position: absolute;
    bottom: -4px;
    left: 0;
    content: "";
    width: 0;
    height: 2px;
    border-radius: 2px;
    background: linear-gradient(42deg, #1d1c1c, #248be7);
    transition: width 0.3s ease-in-out;
  }
  .tabber li:hover:after,
  .tabber li:has(span.active):after {
    width: 100%;
  }

  .project {
    position: relative;
    overflow: hidden;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 0.5rem;
    transition: transform 500ms ease-out, opacity 500ms ease-out;
  }
  .project img {
    width: 100%;
    height: 100%;
    display: block;
    transition: transform 300ms ease-in-out;
  }
  .project-info {
    position: absolute;
    bottom: 0;
    left: 5%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding: 1rem;
    border-radius: 0.5rem;
    background: linear-gradient(42deg, #1d1c1c, #248be7);
    transition: opacity 300ms ease-in-out, visibility 300ms ease-in-out, bottom 300ms ease-in-out;
    opacity: 0;
    visibility: hidden;
  }
  .project-info * {
    color: #fff;
  }
  .project:hover img {
    transform: scale(1.2);
  }
  .project:hover .project-info {
    opacity: 1;
    visibility: visible;
    bottom: 1rem;
  }
  .tabber ul {
    display: flex;
    list-style-type: none;
    justify-content: center;
    gap: 1rem;
  }
  .tabber ul li {
    transition: color 300ms ease-in-out;
  }
  .tabber ul li span {
    cursor: pointer;
  }
  .tabber ul li .active {
    color: #238ce8;
  }
  .work_wrap {
    display: flex;
    gap: 2rem;
  }
  .work_wrap .container {
    padding: 0;
  }
  .project {
    transform: translateY(200px);
    opacity: 0;
    transition: transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1.2s ease-out;
  }
  .project.animate {
    transform: translateY(0);
    opacity: 1;
  }
    .tab_heading{
    flex:1;
    }
    .work-slider{
    flex:3;}
`;

export default Work;
