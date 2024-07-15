import LoadingSpinner from "./LoadingSpinner";
import { useHeadersData } from "../data/GetData";
import { Carousel } from "react-bootstrap";

const HeaderSlider = () => {
  const { data, error, isPending } = useHeadersData();

  if (isPending) return <LoadingSpinner />;

  if (error) return "Cannot fetch data";

  return (
    <section className="">
      <Carousel className="vh-100" controls={false} fade>
        {data.map((slide, index) => (
          <Carousel.Item key={slide.id}>
            <div
              style={{
                background: `url(https://api.zalimburgers.com/${slide?.image}) no-repeat`,
                height: "100vh",
                width: "100vw",
                backgroundSize: "cover",
                animation: "zoomIn 20s ease-in-out infinite alternate",
              }}
              className="header d-flex flex-column justify-content-center align-items-center text-white"
            >
              <div className="dark-overlay"></div>
              <div className="headerpage">
                {index > 0 ? (
                  <h2 className="text-center">{slide.title}</h2>
                ) : (
                  <h1 className="text-center">{slide.title}</h1>
                )}
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
