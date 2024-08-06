import { useNavigate, useParams } from "react-router-dom";
import ImagesSlider from "../Components/ImagesSlider";
import { BusinessUnitDataBySlug } from "../data/GetData";
import LoadingSpinner from "../Components/LoadingSpinner";
import { Col, Container, Row } from "react-bootstrap";
import { getStrapiURL } from "../lib/utils";

const baseurl = getStrapiURL();

const ServiceCard = ({ card }) => {
  return (
    <Col lg={4} md={6} xs={12} className="mb-4">
      <div className="card p-0 overflow-hidden">
        {card.Image !== "" && (
          <img
            src={`${baseurl}${card.Image.url}`}
            alt=""
            className="w-100"
            width={card.Image.width}
            height={card.Image.height}
          />
        )}

        <div className="p-3">
          <h3>{card?.Title}</h3>
          <p>{card?.Description}</p>
        </div>
      </div>
    </Col>
  );
};

const BusinessUnit = () => {
  const { id } = useParams();
  // const { data, isPending, error } = useBusinessUnitById(id);
  const { data, error, isPending } = BusinessUnitDataBySlug(id);
  const navigate = useNavigate();

  if (error) {
    navigate("/");
    return null;
  }

  if (isPending) return <LoadingSpinner />;

  return (
    <>
      <section
        className="feulaskeri"
        style={{
          backgroundImage: `url(${baseurl}${data.BannerImage.url})`,
        }}
      >
        <div className="container">
          <div class="row text-center">
            <h1 className="service-title">
              {data.Title} | <span>Pakistan </span>
            </h1>
          </div>
        </div>
      </section>

      <section class="spaceupdown">
        <div className="container">
          <div className="row justify-content-start align-items-center gap-3 flex-lg-nowrap flex-wrap">
            <div className="col-lg-6">
              <div className="ourmission">
                <span className="leftlineheading">{data.Title}</span>
                <h2>{data.PageTitle}</h2>
                <p>{data.PageDescription}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={`${baseurl}${data.Image1.url}`}
                alt={data.Image1.alternativeText || ""}
                className="w-100 rounded-4"
              />
            </div>
          </div>
        </div>
      </section>
      {data.Partners !== null && (
        <section class="spaceupdown">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="aboutus">
                  <span className="linesheading"> Trusted Partners</span>
                  <h2>{data.Partners.PartnerSectionTitle}</h2>
                  <p>{data.Partners?.PartnerSectionDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {data.Partners !== null && data.Partners.Partner.length > 0 && (
        <Container>
          <Row>
            {data.Partners.Partner.map((partner) => (
              <Col lg={4} md={6} xs={12} className="p-3" key={partner.id}>
                <div className="card">
                  <div className="position-relative d-flex flex-column text-center align-items-center gap-3 w-100">
                    {partner.image !== "" && (
                      <div className="ms-3">
                        <img
                          src={`${baseurl}${partner.Image.url}`}
                          alt={partner.Image.alternativeText || ""}
                          className="w-100"
                        />
                      </div>
                    )}
                    <div className="title-area">
                      <h3>{partner.Title}</h3>
                      <p className="fs-5">{partner.Description}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      )}

      <section class="spaceupdown">
        <Container>
          <div class="row  d-flex justify-content-start align-items-center">
            <div class="col-lg-6">
              <img
                src={`${baseurl}${data.Image2.url}`}
                class="img-fluid rounded-4"
                alt={data.Image2.alternativeText || ""}
              />
            </div>
            <div class="col-lg-6">
              <div class="ourmission">
                <span class="leftlineheading">Support</span>
                <h2>{data.SupportTitle}</h2>
                <p>{data.SupportDescription}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {data.Services !== null && data.Services.Service.length > 0 && (
        <section class="spaceupdown">
          <Container>
            <div className="row spacebottom">
              <div className="col-lg-12">
                <div className="aboutus">
                  <span className="linesheading">Our services</span>
                  <h2>{data.ServiceSectionTitle}</h2>
                  <p>{data.ServiceSectionDescription}</p>
                </div>
              </div>
            </div>

            {data.Services.Service.length > 0 && (
              <div class="row">
                {data.Services.Service.map((card, index) => (
                  <ServiceCard key={index} card={card} />
                ))}
              </div>
            )}
          </Container>
        </section>
      )}

      <section class="spaceupdown">
        <Container>
          <div class="ourmission">
            <h2>Get in Touch</h2>
            <p>
              Explore AWT&apos;s services and projects. Connect with us through
              the credentials provided below.
            </p>
          </div>

          <div className="servicebottommenulinks">
            <ul>
              <li>
                {" "}
                <i class="fa fa-phone" aria-hidden="true"></i>
                <a href={`tel:${data.contact.number}`}>
                  {" "}
                  {data.contact.number}{" "}
                </a>
              </li>
              <li>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <a href={`mailto:${data.contact.email}`}>
                  {" "}
                  {data.contact.email}{" "}
                </a>
              </li>
              <li>
                {" "}
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <a>{data.contact.address}</a>
              </li>
            </ul>
          </div>
        </Container>
      </section>

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

export default BusinessUnit;
