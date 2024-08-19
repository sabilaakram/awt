import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import ImagesSlider from "../Components/ImagesSlider";
import LoadingSpinner from "../Components/LoadingSpinner";
import { GetMdMessage } from "../data/GetData";
import { getStrapiURL } from "../lib/utils";

const MDmessage = () => {
  const { data, error, isPending } = GetMdMessage();
  const apiurl = getStrapiURL();
  if (isPending) return <LoadingSpinner />;

  if (error) return "An error occured!!!";

  return (
    <div>
      <section className="commonbg">
        <div className="container">
          <div class="row dark-overlay">
            <div class="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
                  {" "}
                  MD's <span>MESSAGE </span>{" "}
                </h1>

                {/* <Breadcrumb>
                  <Breadcrumb.Item href="/" className="">
                    Home
                  </Breadcrumb.Item>

                  <Breadcrumb.Item active>MD's Message</Breadcrumb.Item>
                </Breadcrumb> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutusbox">
        <Container>
          <Row className="gap-4 gap-lg-5 justify-content-between flex-lg-nowrap">
            <Col lg={4} className="p-0">
              <img
                src={apiurl + data.Image.url}
                className="img-fluid mx-auto mx-lg-0 w-100"
                alt={data.Image.alternativeText}
                width={data.Image.width}
                height={data.Image.height}
              />
            </Col>
            <Col lg={8} className="p-0 px-8 md:px-32">
              <div className="ourmission mdmessage p-0">
                <span className="leftlineheading text-uppercase">
                  {data.Rank}
                </span>
                <h2>{data.Post}</h2>

                <pre className="md-message-pre">{data.Message}</pre>
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
