import { Link } from "react-router-dom";
import Slider from "react-slick";
import { strapiUrl } from "../lib/utils";

const BusinessUnitsSlider = ({ businessUnitsSliderData, activeTabId }) => {
  const filteredData =
    activeTabId === "All"
      ? businessUnitsSliderData
      : businessUnitsSliderData.filter(
          (item) => item.WelfareUnit === activeTabId
        );

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  const baseurl = strapiUrl();

  return (
    <div className="business-slider">
      <Slider {...settings}>
        {filteredData.map((item) => (
          <div key={item.id}>
            <div className="unitmain-box slider__card">
              <div>
                <img
                  src={`${baseurl}${item.CardImage.url}`}
                  className="img-fluid"
                  loading="lazy"
                  alt={item.CardImage.alternativeText || ""}
                />
                <h3>{item.Title}</h3>
                <p>{item.SliderCardDescription}</p>
              </div>

              <div className="unitbtnss">
                <Link
                  className="text-center d-block w-100"
                  to={`/business-units/${item.slug}`}
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BusinessUnitsSlider;
