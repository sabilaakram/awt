import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import ImagesSlider from "../Components/ImagesSlider";
import { useBod } from "../data/GetData";
import LoadingSpinner from "../Components/LoadingSpinner";

const CommitteeOfAdministration = () => {
  const { data, error, isPending } = useBod();
  if (isPending) return <LoadingSpinner />;

  if (error) return "An error occured!!!";

  const committeOfAdministration = data.filter(
    (item) => item.category === "Committee of Administration"
  );
  return (
    <>
      <section className="commonbg">
        <div className="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
                  {" "}
                  Committee of <span>Administration </span>{" "}
                </h1>
                <Breadcrumb>
                  <Breadcrumb.Item href="/" className="">
                    Home
                  </Breadcrumb.Item>

                  <Breadcrumb.Item active>
                    Committee of Administration
                  </Breadcrumb.Item>
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
                <h2> Committee of Administration</h2>
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
          {committeOfAdministration.map((item, index) => (
            <Col key={index} md={index < 2 ? 5 : 4} className="card-col">
              <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4 sub-b">
                    <img
                      src={`https://api.zalimburgers.com/${item.image}`}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3>{item.post}</h3>
                <h5>{item.role}</h5>
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
    </>
  );
};

export default CommitteeOfAdministration;
