import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import ImagesSlider from "../Components/ImagesSlider";
import { GetBods } from "../data/GetData";
import LoadingSpinner from "../Components/LoadingSpinner";
import { getStrapiURL } from "../lib/utils";

const BOD = () => {
  const { data, error, isPending } = GetBods();
  if (isPending) return <LoadingSpinner />;

  if (error) return "An error occured!!!";

  const boardOfDirectors = data.filter(
    (item) => item.Category.trim() === "Board of Directors"
  );
  const baseUrl = getStrapiURL();
  return (
    <div>
      <section className="commonbg">
        <div className="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
                  Board of <span>Directors </span>{" "}
                </h1>

                <Breadcrumb>
                  <Breadcrumb.Item href="/" className="">
                    Home
                  </Breadcrumb.Item>

                  <Breadcrumb.Item active>BODs</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutusbox">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="aboutus">
                <span className="linesheading"> AWT</span>
                <h2> Board of Directors</h2>
                <p>
                  The Army Welfare Trust's administration is based on two tiers
                  of decision making
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Container>
        <Row className="pb-5 justify-content-center">
          {boardOfDirectors.map((item, index) => (
            <Col key={index} md={4} className="card-col">
              <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4">
                    <img
                      src={`${baseUrl}${item.Image.url}`}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3>{item.Post}</h3>
                {item.Name !== null && <h5>{item.Name}</h5>}
                <p>{item.Role}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <section className="spaceupdowngray">
        <div className="container-fluid overflow-hidden no-gutters p-0">
          <div className="row">
            <ImagesSlider />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BOD;
