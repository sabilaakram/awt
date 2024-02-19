import { Col, Container, Row } from "react-bootstrap";
import mdmessage from "../assets/MDmessage/mdmessageperson.png";
import stars from "../assets/MDmessage/mdstars.png";
import ImagesSlider from "../Components/ImagesSlider";

const MDmessage = () => {
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

                <span className="leftlineheading">
                  {" "}
                  MANAGING DIRECTOR's COMMUNIQUE{" "}
                </span>
                <h2>Lt Gen Naveed Mukhtar HI (M) (Retd)</h2>
                <p>
                  It is a great honor to take over as Managing Director of Army
                  Welfare Trust. My motivation to join AWT lies in the
                  distinction that this organization holds in providing a
                  platform for the welfare and wellbeing of our troops and the
                  wards of our Shuhada. Allah has bestowed upon me this
                  privilege for which I seek His guidance and assistance so that
                  I may fulfill my responsibility to the best of my abilities. I
                  will do my utmost to uphold the trust and confidence reposed
                  in me. lnshAIIah, you can expect an absolute merit-based
                  approach and an atmosphere of complete professionalism.
                </p>

                <p>
                  To lay the groundwork for our next leap, I expect my team to
                  make a dedicated effort in creating a conducive environment
                  for substantial business growth, and generate a healthy
                  culture based on integrity, trust, credibility and shared
                  success. With collective wisdom, institutional approach and
                  creativity, we can steer this organization towards a much
                  brighter and promising future.
                </p>

                <p>
                  Let us devote all our mental and physical energies in the
                  pursuit of excellence. I am confident that with the blessings
                  of Allah and with our will and hard work, together we shall
                  realize our vision, lnshAIIah.
                </p>

                <p>May Allah be our Helper, Protector and Guide, Ameen.</p>
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
