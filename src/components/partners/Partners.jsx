import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import partner1 from "../../assets/png/partner1.png"
import partner2 from "../../assets/png/partner2.png"
import partner3 from "../../assets/png/partner3.png"
import partner4 from "../../assets/png/partner4.png"
import partner5 from "../../assets/png/partner5.png"
import partner6 from "../../assets/png/TokensByGEN.png"
import './partner.css'

const Partners = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear"
      };
  return (
    <div id="partners">
         <div className='container'>
              <div class="heading heading--decorator guide__heading">Our Partners</div>
        <div className="partners">
        <Slider {...settings}>
      <div>
      <img src={partner1} alt='partners' />
      </div>
      <div>
      <img src={partner2} alt='partners' />
      </div>
      <div>
      <img src={partner3} alt='partners' />
      </div>
      <div>
      <img src={partner4} alt='partners' />
      </div>
      <div>
      <img src={partner5} alt='partners' />
      </div>
      <div>
      <img src={partner6} alt='partners' />
      </div>
      
    </Slider>
            </div>
    </div>
    </div>
  )
}

export default Partners