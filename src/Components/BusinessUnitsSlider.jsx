import { Link } from "react-router-dom";
import Slider from "react-slick";

const BusinessUnitsSlider = ({ businessUnitsSliderData, activeTabId }) => {
  let filteredData;

  if (activeTabId === "v-tabs-allunits") {
    filteredData = businessUnitsSliderData;
  } else {
    filteredData = businessUnitsSliderData.filter(
      (item) => item.sliderTabId === activeTabId
    );
  }
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <div className="business-slider">
      <Slider {...settings}>
        {filteredData.map((item, index) => (
          <div key={index}>
            <div className="unitmain-box slider__card">
              <div className="slider_card-wrapper">
                <h5>{item.sliderTabTitle}</h5>
                <img
                  src={item.sliderImage}
                  className="img-fluid"
                  alt={item.sliderTitle}
                />
                <h3>{item.sliderTitle}</h3>
                <p>{item.sliderText}</p>
              </div>

              <div className="unitbtnss">
                <Link to={item.sliderLink}>Explore More</Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BusinessUnitsSlider;
