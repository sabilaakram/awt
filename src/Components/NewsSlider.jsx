import { Link } from "react-router-dom";
import Slider from "react-slick";
import LoadingSpinner from "./LoadingSpinner";
import { useNews } from "../data/GetData";

const NewsSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  const { data, error, isPending } = useNews();

  if (isPending) return <LoadingSpinner />;
  if (error) return "An error occured!!";

  return (
    <section className="mb-5 container">
      <div className="mb-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="aboutus">
              <span className="linesheading">Latest News and Events</span>
              {/* <h2>Our Contemporary Projects and Recent Updates</h2> */}
            </div>
          </div>
        </div>
      </div>
      <Slider {...sliderSettings}>
        {data.map((slide, index) => (
          <div key={index} className="col-lg-3 col-md-2 col-sm-12 news-slide">
            <div className="image rounded-2">
              <img
                src={`https://api.zalimburgers.com/${slide.image}`}
                alt={`${slide.title}`}
                style={{
                  objectFit: "cover",
                  height: "220px",
                  width: "100%",
                }}
                loading="lazy"
              />
              <div className="overlay news-overlay">
                <h2 className="news-title">{slide.title}</h2>

                <Link to="/news" className="news-link">
                  View More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default NewsSlider;
