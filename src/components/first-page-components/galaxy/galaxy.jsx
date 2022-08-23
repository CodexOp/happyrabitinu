import React from 'react';
import './galaxy.css';
import carrot from '../../../assets/svg/carrot-svgrepo-com.svg';
import {ReactSVG} from 'react-svg';
import moon from '../../../assets/svg/moon.svg';
import astronaut from '../../../assets/png/Astronaut_noback.png';
import useWindowDimensions from '../../window-dimensions/window';
import svgButton from '../../../assets/png/NicePng_white-button-png_2084310.png';
import whitepaper from "../../../assets/whitepaper.pdf";

const MyComponent = () => {
  return (
      <div className="firstPage">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <div className="treeWay">
          <div className="homePageButtons">
          <a href='https://poocoin.app/tokens/0xc27629fb38a0021e9aac3c6f107b9baec0e576eb'>
            <div className="wrapperButton">
              <img src={svgButton} className="customButton" alt="images"/>
              <h1 className={'buyNowText'}>BUY NOW</h1>
            </div>
            </a>
            <a href='https://poocoin.app/tokens/0xc27629fb38a0021e9aac3c6f107b9baec0e576eb'>
            <div className="wrapperButton">
              <img src={svgButton} className="customButton" alt="images"/>
              <h1 className={'chartText'}>CHART</h1>
            </div>
            </a>
            <a href="https://github.com/AuditRateTech/Smart-Contract-Audits/blob/main/Happy_Rabbit_Inu_Year_0xC27629fB38a0021e9aAc3C6f107b9Baec0E576eb.pdf">
            <div className="wrapperButton">
              <img src={svgButton} className="customButton" alt="images"/>
              <h1 className={'chartText'}>AUDIT</h1>
            </div>
            </a>

            <a href="https://auditrate.tech/certificate/certificate_Happy_Rabbit_Inu_Year.html">
            <div className="wrapperButton">
              <img src={svgButton} className="customButton" alt="images"/>
              <h1 className={'kycText'}>KYC</h1>
            </div>
            </a>
            <a href={whitepaper} target="_blank" rel="noreferrer">
            <div className="wrapperButton">
              <img src={svgButton} className="customButton" alt="images"/>
              <h1 className={'whitePaperText'}>WHITEPAPER</h1>
            </div>
            </a>
          </div>
          <img className="astronaut" src={astronaut} alt={'astronaut'}/>
          <ReactSVG className={'moonSvg'} src={moon}/>
        </div>

        <div id="title">
          <span>Happy Rabbit <span><img src={carrot} className="carrot_img" alt="carrot"/>nu Year</span></span>
        </div>
      </div>
  );
};

export default MyComponent;
