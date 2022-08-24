import React from 'react'
import bootstrap from 'bootstrap';
import image1 from '../../assets/png/guide1.png'
import image2 from '../../assets/png/guide2.png'
import image3 from '../../assets/png/guide3.png'
import image4 from '../../assets/png/guide4.png'
import "./guide.css"

const Guide = () => {
  return (
    <>
    <div class="guide__items grid-12 heading_last"  id="guide">
    <div class="heading heading--decorator guide__heading">Quick Start Guide</div>

        <div class="guide__item guide__item--one">
          <div class="guide-item__number">01</div>
          <div class="guide-item__img-wrap">
            <img src={image1} alt="" class="guide-item__img guide-item__img--one" />
          </div>
          <div class="guide-item__heading">Create MetaMask wallet</div>
          <div class="guide-item__text">Create a MetaMask Wallet using either a desktop computer or an
            iOS/Android
            mobile device. That will allow you to buy, sell, send, and receive HRY</div>
        </div>

        <div class="guide__item guide__item--two">
          <div class="guide-item__number">02</div>
          <div class="guide-item__img-wrap">
            <img src={image2} alt="" class="guide-item__img guide-item__img--two" />
          </div>
          <div class="guide-item__heading">Send BNB to your wallet</div>
          <div class="guide-item__text">You can buy Binance Coin (BNB) directly on MetaMask or transfer it to your
            MetaMask Wallet from exchanges like Coinbase, Binance, etc.</div>
        </div>

        <div class="guide__item guide__item--three">
          <div class="guide-item__number">03</div>
          <div class="guide-item__img-wrap">
            <img src={image3} alt="" class="guide-item__img guide-item__img--three" />
          </div>
          <div class="guide-item__heading">Connect your wallet</div>
          <div class="guide-item__text">Access your wallet by clicking ‘Connect to a wallet’ and selecting
            MetaMask.</div>
        </div>

        <div class="guide__item guide__item--four">
          <div class="guide-item__number">04</div>
          <div class="guide-item__img-wrap">
            <img src={image4} alt="" class="guide-item__img guide-item__img--four"/>
          </div>
          <div class="guide-item__heading">Swap BNB for HRY</div>
          <div class="guide-item__text">You can start swapping as soon as you have BNB available! Press ‘Select
            a
            token’ and enter the token address or search for it on the tokens list.</div>
        </div>
      </div>
      <div className="footer">
      <p className='footer_text'>@2022 Happy Rabbit Inu Year. All rights reserved.</p>
      </div>
      </>
  )
}

export default Guide