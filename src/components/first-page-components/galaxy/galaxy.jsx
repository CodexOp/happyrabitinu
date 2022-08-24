import React from 'react';
import './galaxy.css';
import carrot from '../../../assets/svg/carrot-svgrepo-com.svg';
import {ReactSVG} from 'react-svg';
import moon from '../../../assets/svg/moon.svg';
import astronaut from '../../../assets/png/Astronaut_noback.png';
import useWindowDimensions from '../../window-dimensions/window';
import svgButton from '../../../assets/png/NicePng_white-button-png_2084310.png';
import whitepaper from "../../../assets/whitepaper.pdf";
import Homepagebuttons from '../navbar/Homepagebuttons';

const MyComponent = () => {
  return (
    <div className="firstPage">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div className="treeWay">
        <div className="homePageButtons">
          <Homepagebuttons svgButton={ svgButton} whitepaper={whitepaper} />
        </div>
        <img className="astronaut" src={astronaut} alt={'astronaut'}/>
        <ReactSVG className={'moonSvg'} src={moon}/>
      </div>

      <div id="title">
        <span>Happy Rabbit
          <span><img src={carrot} className="carrot_img" alt="carrot"/>nu Year</span>
        </span>
      </div>
    </div>
  );
};

export default MyComponent;
