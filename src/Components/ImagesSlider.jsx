import Slider from "react-slick";

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

const trustImages = [
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

const ImagesSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 100,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="logo-slider">
      {trustImages.map((image, index) => (
        <div key={index}>
          <div className="trsutimages">
            <img src={image} className="img-fluid" alt="" />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImagesSlider;
