import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import SectionHeading from "./SectionHeading";

const ContactDetail = ({ icon, title, content, isEmail }) => (
  <div className="detail mt-24">
    <i className={`fa-solid ${icon}`}></i>
    <div>
      <h4>{title}</h4>
      {isEmail ? (
        <p><a href={`mailto:${content}`} target="_blank" rel="noopener noreferrer">{content}</a></p>
      ) : (
        <p>{content}</p>
      )}
    </div>
  </div>
);

const Contact = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const { current } = sectionRef;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setAnimate(true),
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  const contactDetails = [
    { icon: "fa-phone", title: "Phone Number", content: "+91 9634234248" },
    { icon: "fa-envelope", title: "Email", content: "rwtsrv2112000@gmail.com", isEmail: true },
    { icon: "fa-location-dot", title: "Address", content: "Delhi India 110067" }
  ];

  const formFields = [
    { type: "text", placeholder: "Enter your First Name" },
    { type: "text", placeholder: "Enter your Last Name" },
    { type: "email", placeholder: "Enter your Email" },
    { type: "tel", placeholder: "Enter your phone number" }
  ];

  return (
    <Wrapper>
      <section className={`container p-tb ${animate ? 'animate' : ''}`} id="contact" ref={sectionRef}>
        <div className="d-flex form-container">
          <div className="details">
            <SectionHeading
              heading="Let's work together!"
              subheading="We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers."
            />
            <div className="detail_con">
              {contactDetails.map((detail, index) => (
                <ContactDetail key={index} {...detail} />
              ))}
            </div>
          </div>
          <div className="form">
            <form className="contact-form">
              {formFields.map((field, index) => (
                <input key={index} {...field} required />
              ))}
              <select required>
                <option value="">Select Services</option>
                {["Web Designing", "Web Development", "Branding Design", "UI/UX Design"].map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
              <textarea placeholder="Write Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: #1f2e3d url("../img/contact.png");
  .contact-form > * {
    background: none;
    border: 1px solid grey;
    display: block;
    margin-bottom: 1.5rem;
    padding: 0.8rem 1rem;
    border-radius: 2px;
    width: 100%;
    outline-color: #fff;
    color: #fff;
  }
  .form {
    background: #00000059;
    padding: 2rem;
    border-radius: 1rem;
    max-width: 550px;
    margin: auto;
    opacity: 0;
    scale:0;
    transition: all 1s ease;
      }

  .container.animate   .form {
      opacity: 1;
    scale:1;
  }
  .form button {
    background: #238be8;
    font-size: 16px;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 40px;
  }
  .d-flex.form-container > div { width: 50%; }
  .detail {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .detail i {
    background: #238be8;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .details .sec_heading *, .detail * {
    color: #f7fcff;
    background: transparent;
    -webkit-text-fill-color: #f7fcff;
  }
  .details .sec_heading {
    text-align: left;
    margin-left: 0;
    padding-left: 0;
  }
  .detail_con > * {
    transform: translateX(-130%) scale(0.9) rotate(-2deg);
    opacity: 0;
    transition: transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1.2s ease-out;
    will-change: transform, opacity;
  }
  .container.animate .detail_con > * {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
  .container.animate .detail_con > *:nth-child(2) { transition-delay: 0.4s; }
  .container.animate .detail_con > *:nth-child(3) { transition-delay: 0.7s; }
  @keyframes slide {
    0% { transform: translateX(-130%); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }
`;

export default Contact;
