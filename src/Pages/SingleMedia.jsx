import React, { useState } from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { GetGalleryItemsBySlug } from "../data/GetData";
import LoadingSpinner from "../Components/LoadingSpinner";
import { getStrapiURL } from "../lib/utils";
import ImagesSlider from "../Components/ImagesSlider";
import LighthouseGallery from "../Components/LighthouseGallery";
import header from "../assets/headers/media.png";

const SingleMedia = () => {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { slug } = useParams();
  const baseurl = getStrapiURL();
  const { data, error, isPending } = GetGalleryItemsBySlug(slug);
  const navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
    setSelectedItem(null);
  };
  const handleShow = (item) => {
    setShow(true);
    setSelectedItem(item);
  };
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
        <div className="container">
          <div class="row">
            <div class="col-lg-12 text-center">
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
                  <Breadcrumb.Item active>{data.title}</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </div>
        </div>
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
        <Row>
          {data.GalleryItems.data.map((item) => (
            <Col
              key={item.id}
              lg={4}
              md={6}
              xs={12}
              className="mb-4"
              onClick={() => handleShow(item)}
            >
              <img
                src={`${baseurl}${item.url}`}
                alt={item.alternativeText || ""}
                className="w-100 h-100 gallery-card rounded-3"
                loading="lazy"
                width={item.width}
                height={item.height}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <LighthouseGallery show={show} onHide={handleClose} item={selectedItem} />

      <section className="spaceupdowngray">
        <ImagesSlider />
      </section>
    </>
  );
};

export default SingleMedia;
