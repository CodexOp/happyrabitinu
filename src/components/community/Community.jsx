import React from 'react'
import './community.css'
import telegram from "../../assets/png/tw.png"
import checked from "../../assets/png/checked.png"
import discord from "../../assets/png/discord.png"
import tg from "../../assets/png/tg.png"
import ceo from "../../assets/png/ceo.jpg"
const Community = () => {
  return (
    <>
              <div className='container' id="community">
              <div class="join--community_the_inner grid-12 ">
              <div class="heading heading--decorator guide__heading">Join the Rabbitons Community!</div>
              <div class="join-the-community__items grid-12">
              <div class="grid-12 join-the-community__item join-the-community__item--telegram owner_section">
                  <div class="join-the-community__header">
                    <span class="join-the-community__header-name">EminsoN - CEO</span>
                    <span class="join-the-community__header-name-socmedia">Twitter</span>
                    <span class="join-the-community__header-cheked"><img src={checked} alt="" class="join-the-community__header-checked-img"/></span>
                  </div>
                  <div class="join-the-community__nick-name">@Emins0N</div>
                  <div class="join-the-community__title">I am EminsoN, Founder and CEO of Happy Rabbit Inu Year.</div>
                  <div class="join-the-community__follow">
                    <span class="follow__amount">1.3K+</span>
                    <span class="follow__followers">followers</span>
                    <div class="follow__bttn">
                      <a target="_blank" href="https://twitter.com/Emins0N" class="bttn__follow">Follow</a>
                    </div>
                  </div>
                  <div class="ceo_image_section">
                    <img src={ceo} class="join-the-community__socmedia-img join-the-community__socmedia-img--telegram" alt=""/>
                  </div>
                  </div>
                <div class="grid-12 join-the-community__item join-the-community__item--twiter">
                  <div class="join-the-community__header">
                    <span class="join-the-community__header-name">Happy Rabbit Inu Year</span>
                    <span class="join-the-community__header-name-socmedia">Twitter</span>
                    <span class="join-the-community__header-cheked"><img src={checked} alt="" class="join-the-community__header-checked-img"/></span>
                  </div>
                  <div class="join-the-community__nick-name">@HRY2023</div>
                  <div class="join-the-community__title">I am HRY. Happy Rabbit Inu Year. Join Rabbitons Army and we will climb the moon...</div>
                  <div class="join-the-community__follow">
                    <span class="follow__amount">60K+</span>
                    <span class="follow__followers">followers</span>
                    <div class="follow__bttn">
                      <a target="_blank" rel='noreferrer' href="https://twitter.com/HRY2023" class="bttn__follow">Follow</a>
                    </div>
                  </div>
                  <div class="join-the-community__socmedia-img-wrap">
                    <img src={telegram} class="join-the-community__socmedia-img join-the-community__socmedia-img--twiter" alt=""/>
                  </div>
                </div>
                <div class="grid-12 join-the-community__item join-the-community__item--telegram">
                  <div class="join-the-community__header">
                    <span class="join-the-community__header-name">Happy Rabbit Inu Year</span>
                    <span class="join-the-community__header-name-socmedia">Telegram</span>
                    <span class="join-the-community__header-cheked"><img src={checked} alt="" class="join-the-community__header-checked-img"/></span>
                  </div>
                  <div class="join-the-community__nick-name">@HRY2023</div>
                  <div class="join-the-community__title">I am HRY. Happy Rabbit Inu Year. Join Rabbitons Army and we will climb the moon...</div>
                  <div class="join-the-community__follow">
                    <span class="follow__amount">14K+</span>
                    <span class="follow__followers">followers</span>
                    <div class="follow__bttn">
                      <a target="_blank" href="https://t.me/HRY2023" class="bttn__follow">Follow</a>
                    </div>
                  </div>
                  <div class="join-the-community__socmedia-img-wrap">
                    <img src={tg} class="join-the-community__socmedia-img join-the-community__socmedia-img--telegram" alt=""/>
                  </div>
                </div>
   
             
              </div>
              
            </div>
            </div>
            </>
              )
}

export default Community;