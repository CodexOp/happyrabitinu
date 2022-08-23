import React from 'react';
import './roadmap.css';
import carrot from './../../../assets/svg/carrot-svgrepo-com.svg';
import {ReactSVG} from 'react-svg';
import rocket from './../../../assets/gif/rocket-joypixels.gif';
import SolarSystem from '../solar-system/solar';

const MyComponent = () => {
  return (
      <div className="secondPage">
        <div className="roadmapTitle">
          <h1>Roadmap</h1>
        </div>
        <div className={'solarSystemDiv'}>
          {/*<SolarSystem/>*/}
        </div>
        <img className={'rocket'} src={rocket}/>
        <section id="cd-timeline" className="cd-container lineDone">
          <div className="cd-timeline-block">
            <div className="circleWrapper">
              <div className="cd-timeline-img done"><ReactSVG
                  className="carrotRoadmap" src={carrot}/></div>
            </div>

            <div className="cd-timeline-content"><h2>Carrot 1</h2>
              <ol>
                <li>Smart contract creation</li>
                <li>Website Developing</li>
                <li>KYC</li>
                <li>WHITEPAPER V1</li>
                <li>MARKETING CAMPAIGN</li>
                <li>Presale on Pinksale</li>
              </ol>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="circleWrapper">
              <div className="cd-timeline-img"><ReactSVG
                  className="carrotRoadmap" src={carrot}/></div>
            </div>


            <div className="cd-timeline-content">
              <h2>Carrot 2</h2>
              <ol>
                <li>Listing Decentralized exchange</li>
                <li>Community development</li>
                <li>Marketing 2nd Campaign</li>
                <li>Listing on CoinMarketCap</li>
                <li>Listing on CoinGecko</li>
                <li>Christmas Lottery 5000$</li>
              </ol>

            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="circleWrapper">
              <div className="cd-timeline-img"><ReactSVG
                  className="carrotRoadmap" src={carrot}/></div>
            </div>

            <div className="cd-timeline-content">
              <h2>Carrot 3</h2>
              <ol>
                <li>Happy Rabbit New Year Party</li>
                <li>Contract Audited by Certik</li>
                <li>Marketing 3rd session</li>
                <li>StepFather taking care of Rabbitons</li>
                <li>Listing on Centralized exchanges</li>
              </ol>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="circleWrapper">
              <div className="cd-timeline-img"><ReactSVG
                  className="carrotRoadmap" src={carrot}/></div>
            </div>

            <div className="cd-timeline-content">
              <h2>Carrot 4</h2>
              <ol>
                <li>Game Play to Earn BETA</li>
                <li>Partnerships</li>
                <li>Game P2E Launch</li>
                <li>Payment System Integrated</li>
                <li>Tesla Lottery</li>
                <li>Deflationary Burn Process</li>
              </ol>
            </div>
          </div>


        </section>
      </div>
  );
};

export default MyComponent;
