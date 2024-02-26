import { Col, Container, Row } from "react-bootstrap";
import mdmessage from "../assets/MDmessage/mdmessageperson.png";
import stars from "../assets/MDmessage/mdstars.png";
import ImagesSlider from "../Components/ImagesSlider";
import LoadingSpinner from "../Components/LoadingSpinner";
import { useMdMessage } from "../data/GetData";

const MDmessage = () => {
  const { data, error, isPending } = useMdMessage();
  if (isPending) return <LoadingSpinner />;

  if (error) return "An error occured!!!";

  return (
    <div>
      <section className="commonbg">
        <div className="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
                  {" "}
                  MD <span>MESSAGE </span>{" "}
                </h1>

                <h5>
                  Home | <span>MD's Message </span>{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutusbox">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="ourmission mdmessage">
                <div className="starimgebox">
                  <img src={stars} className="img-fluid" alt="" />
                </div>

                <span className="leftlineheading text-uppercase">
                  {data?.ranking}
                </span>
                <h2>{data?.post}</h2>

                <pre className="md-message-pre">{data?.message}</pre>
              </div>
            </Col>

            <Col className="col-lg-4">
              <div className="mdmessagepersonimages">
                <img src={mdmessage} className="img-fluid" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ourmission"></div>
            </div>
          </div>
        </div>
      </section>

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

export default MDmessage;
