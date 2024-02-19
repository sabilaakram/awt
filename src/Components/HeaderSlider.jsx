import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./LoadingSpinner";

const CustomArrow = ({ onClick, icon, className }) => (
  <div className={`custom-arrow ${className}`} onClick={onClick}>
    {icon}
  </div>
);

const HeaderSlider = () => {
  const apiURL = "https://api.zalimburgers.com/awt-api/home";

  const { data, isPending, error } = useQuery({
    queryKey: ["headersData"],
    queryFn: () => axios.get(apiURL).then((res) => res.data.data),
  });

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
    <section>
      <Slider {...sliderSettings}>
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
      </Slider>
    </section>
  );
};

export default HeaderSlider;
