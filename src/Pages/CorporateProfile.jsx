import React from "react";
import { Breadcrumb, Container, Row } from "react-bootstrap";
import ImagesSlider from "../Components/ImagesSlider";
import pdfURL from "../assets/AWT-Corporate-Profile.pdf";

const CorporateProfile = () => {
  return (
    <>
      <section className="commonbg">
        <Container>
          <Row>
            <div className="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
                  Our <span>Gallery</span>
                </h1>

                <Breadcrumb>
                  <Breadcrumb.Item href="/" className="">
                    Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item href="/media" className="">
                    Gallery
                  </Breadcrumb.Item>

                  <Breadcrumb.Item active>Corporate Profile</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <Container>
        <Row>
          <div className="col-lg-12 text-center">
            <object
              data={pdfURL}
              type="application/pdf"
              width="100%"
              height="600px"
            >
              <p>
                Your browser does not support PDFs. You can download the PDF
                file <a href={pdfURL}>here</a>.
              </p>
            </object>
          </div>
        </Row>
      </Container>

      <section className="spaceupdowngray">
        <ImagesSlider />
      </section>
    </>
  );
};

export default CorporateProfile;
