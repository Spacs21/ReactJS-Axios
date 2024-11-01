import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Features.scss";
import house from "../../assets/house.svg";
import moto from "../../assets/moto.png";
import smile from "../../assets/smile.png";

const FEATURES_DATA = [
    {
        image: house,
        id: 1,
        title: "Quality Food",
        descp: "It can be a very secure path to earn good money and make you a very successful creative entrepreneur."
    },
    {
        image: moto,
        id: 2,
        title: "Food Delivery",
        descp: "It can be a very secure path to earn good money and make you a very successful creative entrepreneur."
    },
    {
        image: smile,
        id: 3,
        title: "Super Taste",
        descp: "It can be a very secure path to earn good money and make you a very successful creative entrepreneur."
    },
];

const Features = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, 
            easing: 'ease-in-out-cubic',
        });
    }, []);

    const data = FEATURES_DATA.map((item, inx) => (
        <div
            className="box"
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={inx * 100}
        >
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.descp}</p>
        </div>
    ));

    return (
        <section>
            <div className="container" data-aos="fade-up" data-aos-duration="600">
                <div className="title">
                    <p data-aos="fade-up" data-aos-duration="600" className='tag'>F E A T U R E S</p>
                    <h2 data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">Food with a New Passion</h2>
                </div>
                <div className="features">
                    <div className="boxes">
                        {data}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
