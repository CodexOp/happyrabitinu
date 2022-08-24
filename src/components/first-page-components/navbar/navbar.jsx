import React from 'react';
import "./navbar.css"
import logo from "../../../assets/png/STRAIGHT_LOGO.png";
import bootstrap from 'bootstrap'
import svgButton from '../../../assets/png/NicePng_white-button-png_2084310.png';
import whitepaper from "../../../assets/whitepaper.pdf";
import Homepagebuttons from '../navbar/Homepagebuttons';

const MyComponent = () => {
  return (
    <div className="nav_outer">
      <div class="nav">
        <input type="checkbox" id="nav-check"/>
        <div class="nav-header">
          <div class="nav-title">
            <img src={logo} className="logo" alt="logo"/>
            HRY
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#roadmap">CarrotMap</a>
          <a href="#partners">Rabbitners</a>
          <a href="#community">Rabbitons</a>
          <a href="#guide">Guide</a>
          <div className="Homepagebuttons">
          <Homepagebuttons
            svgButton={svgButton}
            whitepaper={whitepaper}/>
          </div>
          </div>

      </div>
    </div>

  );
};

export default MyComponent;
