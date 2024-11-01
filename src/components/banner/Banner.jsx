import React, { useEffect } from 'react';
import "./Banner.scss"
import woman from "../../assets/woman.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out', 
          once: true,
        });
      }, []);
  return (
<article>
  <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-cubic">
    <div className="banner">
      <div className="banner__image" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" data-aos-easing="ease-in-out-cubic">
        <img src={woman} alt="Woman" />
      </div>
      <div className="banner__text" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-easing="ease-in-out-cubic">
        <p className="info" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">ABOUT US</p>
        <h2 data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
          Food Stalls with Persons but to Product marketing plane
          catalogues etc to.
        </h2>
        <p data-aos="fade-up" data-aos-duration="900" data-aos-delay="500">
          There are many things needed to start the Fast Food Business. You need not only just Food Stalls with Persons but also equipment to make your marketing plan effective.
        </p>
        <div className="banner__text__btn" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
          <button>Read More</button>
        </div>
      </div>
    </div>
  </div>
</article>

  )
}

export default Banner