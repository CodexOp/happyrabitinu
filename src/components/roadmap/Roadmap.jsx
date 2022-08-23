import React from 'react';
import './roadmap.css'
import { AiFillStar } from 'react-icons/ai';
import elon from "../../assets/png/elon.png"

const Roadmap = () => {
  return (
    <>
             <div className='container' id="roadmap">
                  <div class="heading heading--decorator guide__heading">Roadmap</div>
            </div>
<div class='wrapper'>
<div class='steps' id='steps'>
  <div class='step'>
    <div class='number completed'>
      <svg viewBox="0 0 512 512" width="100" title="check">
        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
      </svg>
    </div>
    <div class='info'>
      <p class='title'>
      Carrot 1 
      </p>
      <p class='text'>  
    <p>  <AiFillStar className='icon_list'/>Smart contract creation</p>
        <p><AiFillStar className='icon_list'/>Website developing</p>
        <p><AiFillStar className='icon_list'/>KYC</p>
        <p><AiFillStar className='icon_list'/>Whitepaper V1</p>
        <p><AiFillStar className='icon_list'/>Marketing 1st Campaign</p>
        <p><AiFillStar className='icon_list'/>Presale on Pinksale</p>
        </p>
    </div>
  </div>

  <div class='step'>
    <div class='number'>2</div>
    <div class='info'>
      <p class='title'>
      Carrot 2
      </p>
      <p class='text'>  
        <p><AiFillStar className='icon_list'/>Listing Decentralized exchange</p>
        <p><AiFillStar className='icon_list'/>Community development</p>
        <p><AiFillStar className='icon_list'/>Marketing 2nd Campaign</p>
        <p><AiFillStar className='icon_list'/>Listing on CoinMarketCap</p>
        <p><AiFillStar className='icon_list'/>Listing on CoinGecko</p>
        <p><AiFillStar className='icon_list'/>Christmas Lottery 5000$+</p>
        </p>
    </div>
  </div>
  <div class='step'>
    <div class='number'>3</div>
    <div class='info'>
      <p class='title'>
      Carrot 3
      </p>
      <p class='text'>  
        <p><AiFillStar className='icon_list'/>Happy Rabbit New Year Party</p>
        <p><AiFillStar className='icon_list'/>Contract Audited by Certik</p>
        <p><AiFillStar className='icon_list'/>Marketing 3rd Campaign</p>
        <p><AiFillStar className='icon_list'/>StepFather taking care of Rabbitons</p>
        <p><AiFillStar className='icon_list'/>Listing on Centralized exchanges </p>
        </p>
    </div>
  </div>
  <div class='step'>
    <div class='number'>4</div>
    <div class='info'>
      <p class='title'>
      Carrot 4
      </p>
      <p class='text'>  
        <p><AiFillStar className='icon_list'/>Game Play to Earn BETA</p>
        <p><AiFillStar className='icon_list'/>Partnerships</p>
        <p><AiFillStar className='icon_list'/>Tesla Lottery</p>
        <p><AiFillStar className='icon_list'/>Payment System Integrated</p>
        <p><AiFillStar className='icon_list'/>Deflationary Burn Process</p>
        </p>
    </div>
  </div>
</div> 

</div>
<div className="elonimage">
<img src={elon} alt='elon' />
</div>
</>

  )
}

export default Roadmap