import React from "react";

import logo1 from "../assets/Logos/Transparent/Png/Asset 22.png";
import logo2 from "../assets/Logos/Transparent/Png/Asset 23.png";
import logo3 from "../assets/Logos/Transparent/Png/Asset 24.png";
import logo4 from "../assets/Logos/Transparent/Png/Asset 25.png";
import logo5 from "../assets/Logos/Transparent/Png/Asset 26.png";
import logo6 from "../assets/Logos/Transparent/Png/Asset 27.png";
import logo7 from "../assets/Logos/Transparent/Png/Asset 28.png";
import logo8 from "../assets/Logos/Transparent/Png/Asset 29.png";
import logo9 from "../assets/Logos/Transparent/Png/Asset 30.png";
import logo10 from "../assets/Logos/Transparent/Png/Asset 31.png";
import logo11 from "../assets/Logos/Transparent/Png/Asset 32.png";
import logo12 from "../assets/Logos/Transparent/Png/Asset 33.png";
import logo13 from "../assets/Logos/Transparent/Png/Asset 34.png";
import logo14 from "../assets/Logos/Transparent/Png/Asset 35.png";
import logo15 from "../assets/Logos/Transparent/Png/Asset 36.png";
import logo16 from "../assets/Logos/Transparent/Png/Asset 37.png";
import logo17 from "../assets/Logos/Transparent/Png/Asset 38.png";
import logo18 from "../assets/Logos/Transparent/Png/Asset 39.png";
import logo19 from "../assets/Logos/Transparent/Png/Asset 40.png";

import Slider from "react-slick";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  logo18,
  logo19,
];

const HomeLogoSlider = () => {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="homeslider-logo">
      <Slider {...settings}>
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="logo-card d-flex align-items-center justify-content-center"
          >
            <img src={logo} alt={`Logo ${idx}`} className="img-fluid mx-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeLogoSlider;
