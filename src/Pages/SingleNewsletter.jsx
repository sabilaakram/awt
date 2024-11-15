import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetNewsletterBySlug } from "../data/GetData";
import header from "../assets/headers/Media.jpg";
import LoadingSpinner from "../Components/LoadingSpinner";
import { Container, Row } from "react-bootstrap";
import LighthouseGallery from "../Components/LighthouseGallery";
import ImagesSlider from "../Components/ImagesSlider";

const SingleNewsletter = () => {
  const { slug } = useParams();
  const { data, error, isPending } = GetNewsletterBySlug(slug);
  const navigate = useNavigate();

  if (error) {
    navigate("/");
    return null;
  }

  if (isPending) return <LoadingSpinner />;

  return (
    <>
      <section
        className="commonbg"
        style={{
          backgroundImage: `url(${header})`,
        }}
      >
        <Container>
          <Row>
            <div className="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
                  {data.Title} <span>Newsletter</span>
                </h1>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section className="aboutusbox">
        <Container>
          <Row>
            <div className="col-lg-12">
              <div className="aboutus">
                <span className="linesheading">AWT</span>
                <h2>Inspiring Lives with Dignified Service</h2>
                <p>
                  Discover the scenic stories of manpowers’ struggle,
                  resilience, and diligence by exploring the gallery of Army
                  Welfare Trust. Witness the success our subsidiaries have
                  achieved so far!
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <Container>
        <LighthouseGallery galleryItems={data.Pages.data} />
      </Container>

      <section className="spaceupdowngray">
        <ImagesSlider />
      </section>
    </>
  );
};

export default SingleNewsletter;
