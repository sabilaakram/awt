import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import LoadingSpinner from "./LoadingSpinner";
import { useHeadersData } from "../data/GetData";
import { Carousel } from "react-bootstrap";

const CustomArrow = ({ onClick, icon, className }) => (
  <div className={`custom-arrow ${className}`} onClick={onClick}>
    {icon}
  </div>
);

const HeaderSlider = () => {
  const { data, error, isPending } = useHeadersData();

  if (isPending) return <LoadingSpinner />;

  if (error) return "Cannot fetch data";

  const sliderSettings = {
    infinite: true,
    speed: 1500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <CustomArrow icon={<FaArrowLeft />} className="prev-arrow" />,
    nextArrow: <CustomArrow icon={<FaArrowRight />} className="next-arrow" />,
  };

  return (
    <section className="">
      {/* <Slider {...sliderSettings}>
        {data.map((slide) => (
          <div key={slide.id}>
            <div
              style={{
                background: `url(https://api.zalimburgers.com/${slide?.image}) no-repeat`,
                minHeight: "400px",
                width: "100vw",
                backgroundSize: "cover",
              }}
              className="header d-flex flex-column justify-content-center align-items-center text-white h-100"
            >
              <div className="dark-overlay"></div>
              <div className="headerpage">
                <h1 className="text-center">{slide.title}</h1>
                <p className="text-center">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider> */}
      <Carousel className="vh-100" controls={false}>
        {data.map((slide) => (
          <Carousel.Item key={slide.id}>
            <div
              style={{
                background: `url(https://api.zalimburgers.com/${slide?.image}) no-repeat`,
                height: "100vh",
                width: "100vw",
                backgroundSize: "cover",
              }}
              className="header d-flex flex-column justify-content-center align-items-center text-white"
            >
              <div className="dark-overlay"></div>
              <div className="headerpage">
                <h1 className="text-center">{slide.title}</h1>
                <p className="text-center">{slide.description}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default HeaderSlider;
