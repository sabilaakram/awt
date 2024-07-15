import { Link } from "react-router-dom";
import Slider from "react-slick";

const BusinessUnitsSlider = ({ businessUnitsSliderData, activeTabId }) => {
  const filteredData =
    activeTabId === "v-tabs-allunits"
      ? businessUnitsSliderData
      : businessUnitsSliderData.filter(
          (item) =>
            item.company_id === parseInt(activeTabId.replace("v-tabs-", ""))
        );

  const getCompanyIdLabel = (companyId) => {
    switch (companyId) {
      case 1:
        return "Public Listed Companies";
      case 2:
        return "Public Unlisted Companies";
      case 3:
        return "Private Limited Companies";
      case 4:
        return "Other Trust Units";
      default:
        return "Unknown";
    }
  };

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
  return (
    <div className="business-slider">
      <Slider {...settings}>
        {filteredData.map((item, index) => (
          <div key={index}>
            <div className="unitmain-box slider__card">
              <div className="">
                <h5>{getCompanyIdLabel(item.company_id)}</h5>
                <img
                  src={item?.images[0].image}
                  className="img-fluid"
                  alt={item.title}
                />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <div className="unitbtnss">
                <Link
                  className="text-center d-block w-100"
                  to={`/business-units/${item.id}`}
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
