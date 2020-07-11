import React from 'react';

import sprite from "../../assets/spriteSVG/sprite-medals.svg";

import story1 from "../../assets/img/story-1.jpeg";
import house1 from "../../assets/img/house-1.jpeg";
import house2 from "../../assets/img/house-2.jpeg";
import house3 from "../../assets/img/house-3.jpeg";
import house4 from "../../assets/img/house-4.jpeg";
import house5 from "../../assets/img/house-5.jpeg";
import house6 from "../../assets/img/house-6.jpeg";
import house7 from "../../assets/img/house-1.jpeg";
import house8 from "../../assets/img/house-2.jpeg";
import house9 from "../../assets/img/house-3.jpeg";
import house10 from "../../assets/img/house-4.jpeg";
import house11 from "../../assets/img/house-5.jpeg";
import house12 from "../../assets/img/house-3.jpeg";
import house13 from "../../assets/img/house-2.jpeg";
import house14 from "../../assets/img/house-1.jpeg";
import logo from "../../assets/img/logo.png";
import logoBbc from "../../assets/img/logo-bbc.png";
import logoForbes from "../../assets/img/logo-forbes.png";
import logoTech from "../../assets/img/logo-techcrunch.png";
import logoBi from "../../assets/img/logo-bi.png";
import story2 from "../../assets/img/story-2.jpeg";

import SideNav from "../../components/side-nav/side-nav.component";
import { LandingPageContainer, Main } from "./landingpage.styles";

const LandingPage = () => (
  <LandingPageContainer>
    <SideNav />
    <Main>
      <h1>Hello world!</h1>
      <h3>This is my real website.</h3>
      <br />
      <p>another Big project from AftoflBig5</p>
      <header className="header">
        <img src={logo} alt="logo" className="header__logo" />
        <h3 className="heading-3">Your own home</h3>
        <h1 className="heading-1">BIGGEST HEADER</h1>
        <button className="btn header__btn">View more</button>
        <div className="header__seenon-text">Seen on</div>
        <div className="header__seenon-logos">
          <img src={logoBbc} alt="" />
          <img src={logoBi} alt="" />
          <img src={logoForbes} alt="" />
          <img src={logoTech} alt="" />
        </div>
      </header>

      <div class="realtors">
        <h3 className="heading-3">Top 3 realtors</h3>
        <div className="realtors__list">
          <img src={house1} alt="" className="realtors__img" />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">AftoflBig5</h4>
            <p className="realtors__sold">55555 sold</p>
          </div>

          <img src={house2} alt="" className="realtors__img" />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">AftoflBig5</h4>
            <p className="realtors__sold">55555 sold</p>
          </div>

          <img src={logo} alt="" className="realtors__img" />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">AftoflBig5</h4>
            <p className="realtors__sold">55555 sold</p>
          </div>
        </div>
      </div>
    </Main>
  </LandingPageContainer>
);

export default LandingPage;
