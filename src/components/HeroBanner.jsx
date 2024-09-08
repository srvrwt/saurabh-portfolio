import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import srv from "../img/saurabh-rawat.webp";

const StarSVG = () => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.451.68339c0,11.57088-3.857,15.42784-15.42785,15.42784,11.57088,0,15.42785,3.857,15.42785,15.42784,0-11.57088,3.857-15.42784,15.42785-15.42784C20.308,16.11123,16.451,12.25427,16.451.68339Z" />
  </svg>
);

const HeroBanner = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => setAnimate(true), []);

  return (
    <Wrapper>
      <section className={`herobanner p-tb ${animate ? 'animate' : ''}`}>
        <div className="container d-flex hi">
          {[1, 2, 3].map(i => <div key={i} className={`star star-${i}`}><StarSVG /></div>)}
          <div className="content">
            <p className="subtext">I am <strong>Saurabh</strong> Rawat</p>
            <h1>Frontend Developer & Web Designer</h1>
            <p className="bnner_content">I break down complex user experience problems to create integrity focused solutions that connect billions of people</p>
            <button className="button" type="button">
              <span className="button__text">Download CV</span>
              <span className="button__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" className="svg">
                  <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z" />
                </svg>
              </span>
            </button>
          </div>
          <div className="img"><img src={srv} alt="Saurabh Rawat" /></div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background:#fff; border-radius:15px;
  .content{flex:1.2;} .img{flex:1; text-align:center; scale:0; opacity:0; transition:all 1.8s ease;}
  .subtext{font-size:40px; font-weight:500;}
  .herobanner{position:relative;}
  .herobanner.animate .img{opacity:1; scale:1;}
  .herobanner .container{position:relative; z-index:1;}
  .herobanner .container.hi:before{position:absolute; top:44%; left:30%; content:"HI"; font-size:360px; transform:translateY(-50%); line-height:1; color:#238be805; font-weight:700; -webkit-text-stroke-width:2px; -webkit-text-stroke-color:#238be80a;}
  .herobanner:after{position:absolute; top:-20%; right:-10%; content:""; width:1000px; height:1000px; background-image:url('data:image/svg+xml,<svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0"><stop id="stop1" stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop><stop id="stop2" stop-color="rgba(204.605, 237.802, 255, 1)" offset="100%"></stop></linearGradient></defs><path fill="url(%23sw-gradient)" d="M20.4,-26.7C27.1,-23.2,33.6,-18.1,37.6,-11C41.5,-3.9,42.9,5.2,40.6,13.5C38.4,21.8,32.4,29.1,25.1,32.3C17.7,35.5,8.8,34.5,0.4,33.9C-8.1,33.4,-16.1,33.4,-23.8,30.3C-31.4,27.2,-38.5,21,-39.3,13.9C-40.1,6.8,-34.5,-1.3,-29.4,-7.3C-24.3,-13.3,-19.8,-17.2,-15,-21.3C-10.2,-25.4,-5.1,-29.8,0.9,-31C6.9,-32.2,13.7,-30.2,20.4,-26.7Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style="transition: all 0.3s ease 0s;"></path></svg>'); background-size:100%; background-position:top; opacity:0.4;}
  .img img{max-width:460px;}
  .button{position:relative; width:100%; max-width:260px; padding:0.8rem 1rem; cursor:pointer; display:flex; align-items:center; justify-content:center; border:1px solid #238be8; background-color:#238be8; overflow:hidden; border-radius:40px; margin-top:40px;}
  .button, .button__icon, .button__text{transition:all 0.3s;}
  .button .button__text{transform:translateX(-25px); color:#fff; font-size:16px;}
  .button .button__icon{position:absolute; transform:translateX(50px); height:100%; display:flex; align-items:center; justify-content:center;}
  .button .svg{width:20px; fill:#fff;}
  .button:hover{background:#1d1c1c; border-color:#1d1c1c;}
  .button:hover .button__text{color:transparent;}
  .button:hover .button__icon{width:148px; transform:translateX(0);}
  .button:active .button__icon{background-color:#146c54;}
  .button:active{border:1px solid #146c54;}
  .herobanner .container > .star{position:absolute; z-index:-1; opacity:0.1;}
  .star.star-1{width:16%; height:auto; left:62px; top:-94px;}
  .star.star-1 svg path{fill:#07428e;}
  .star.star-2{width:8%; left:38%; top:0;}
  .star.star-2 svg path{fill:#006dff;}
  .star.star-3 svg path{fill:#238be8;}
  .star.star-3{bottom:40px; width:10%; left:34%;}
  .content > *{transform:translateX(-130%) scale(0.9) rotate(-2deg); opacity:0; transition:transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1.2s ease-out; will-change:transform, opacity;}
  .herobanner.animate .content > *{transform:translateX(0) scale(1); opacity:1;}
  .herobanner.animate .content > *:nth-child(1){transition-delay:0.1s;}
  .herobanner.animate .content > *:nth-child(2){transition-delay:0.4s;}
  .herobanner.animate .content > *:nth-child(3){transition-delay:0.7s;}
  .herobanner.animate .content > *:nth-child(4){transition-delay:1s;}
  @keyframes slide{0%{transform:translateX(-130%); opacity:0;} 100%{transform:translateX(0); opacity:1;}}
`;

export default HeroBanner;
