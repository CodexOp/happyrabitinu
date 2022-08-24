import React from 'react'
import "../galaxy/galaxy.css"
import {ReactSVG} from 'react-svg';


function Homepagebuttons({svgButton,whitepaper}) {
  return (
  
      <>
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
          <a
            href="https://github.com/AuditRateTech/Smart-Contract-Audits/blob/main/Happy_Rabbit_Inu_Year_0xC27629fB38a0021e9aAc3C6f107b9Baec0E576eb.pdf">
            <div className="wrapperButton">
              <img src={svgButton} className="customButton" alt="images"/>
              <h1 className={'chartText'}>AUDIT</h1>
            </div>
          </a>

          <a
            href="https://auditrate.tech/certificate/certificate_Happy_Rabbit_Inu_Year.html">
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
        </>
      
  )
}

export default Homepagebuttons