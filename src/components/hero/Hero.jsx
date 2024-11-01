import React from 'react'
import "./Hero.scss"
import banner from "../../assets/banner.jpg"

const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
            <div className="content">
                <div className="content__text">
                    <h1>Making time a good time by making food the good food.</h1>
                    <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
                    <div className="content__text__btn">
                        <button>Order Now</button>
                        <button>Food Details</button>
                    </div>
                </div>
                <div className="content__image">
                    <img src={banner}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero