import { useNavigate, useParams } from "react-router-dom";
import ImagesSlider from "../Components/ImagesSlider";
import { useBusinessUnitById } from "../data/GetData";
import LoadingSpinner from "../Components/LoadingSpinner";
import { FaCode } from "react-icons/fa6";

const ServiceCard = ({ card }) => {
  return (
    <div className="col-lg-4 mb-4">
      <div className="card">
        <div className="icon-wrapper">
          <img src={card?.image} alt="" />
        </div>
        <h3>{card?.title}</h3>
        <p>{card?.description}</p>
      </div>
    </div>
  );
};

const BusinessUnit = () => {
  const { id } = useParams();
  const { data, isPending, error } = useBusinessUnitById(id);
  const navigate = useNavigate();

  if (error) {
    navigate("/");
    return null;
  }

  if (isPending) return <LoadingSpinner />;
  console.log(data);
  return (
    <div>
      {data.map((data, index) => {
        return (
          <div key={index}>
            <section
              className="feulaskeri"
              style={{
                backgroundImage: `url(${data?.images[1].image})`,
              }}
            >
              <div className="container">
                <div class="row">
                  <div class="col-lg-12 text-center">
                    <div className="aboutuspage">
                      <h1>
                        {data.title} | <span>Pakistan </span>
                      </h1>

                      <h5>
                        Home | <span> {data.title} </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="spaceupdown">
              <div className="container">
                <div className="row d-flex justify-content-start align-items-center">
                  <div className="col-lg-6">
                    <div className="ourmission">
                      <span className="leftlineheading">{data.title}</span>
                      <h2>{data.page_title1}</h2>
                      <p>{data.page_description1}</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <img src={data?.images[2].image} alt="" />
                  </div>
                </div>
              </div>
            </section>

            <section class="spaceupdown">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="aboutus">
                      <span className="linesheading"> Trusted Partners</span>
                      <h2>{data.partner_title}</h2>
                      <p>{data.partner_description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div class="container">
                <div className="row">
                  {data.partners.map((partner, index) => (
                    <div className="col-lg-4" key={index}>
                      <div className="service-box">
                        <div className="content">
                          <div className="icons">
                            <FaCode />
                          </div>
                          <div className="title-area">
                            <h3>{partner.title}</h3>
                            <span>{partner.description}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section class="spaceupdown">
              <div class="container">
                <div class="row  d-flex justify-content-start align-items-center">
                  <div class="col-lg-6">
                    <img src={data?.images[3].image} class="img-fluid" alt="" />
                  </div>
                  <div class="col-lg-6">
                    <div class="ourmission">
                      <span class="leftlineheading">Support</span>
                      <h2>{data.page_title2}</h2>
                      <p>{data.page_description2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="spaceupdown">
              <div className="container">
                <div className="row spacebottom">
                  <div className="col-lg-12">
                    <div className="aboutus">
                      <span className="linesheading">Our services</span>
                      <h2>{data.service_title}</h2>
                      <p>{data.service_description}</p>
                    </div>
                  </div>
                </div>

                <div class="row">
                  {data.services.map((card, index) => (
                    <ServiceCard key={index} card={card} />
                  ))}
                </div>
              </div>
            </section>

            <section class="spaceupdown">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div class="ourmission">
                      <h2>Get in Touch</h2>
                      <p>
                        Explore AWT’s services and projects. Connect with us
                        through the credentials provided below.
                      </p>
                    </div>

                    <div className="servicebottommenulinks">
                      <ul>
                        <li>
                          {" "}
                          <i class="fa fa-phone" aria-hidden="true"></i>
                          <a href="tel:92-51-9272400-4"> +92-51-9272400-4 </a>
                        </li>
                        <li>
                          <i class="fa fa-envelope-o" aria-hidden="true"></i>
                          <a href="mailto:infoawt@awt.com.pk">
                            {" "}
                            infoawt@awt.com.pk{" "}
                          </a>
                        </li>
                        <li>
                          {" "}
                          <i class="fa fa-map-marker" aria-hidden="true"></i>
                          <a>
                            ARMY WELFARE TRUST. AWT Plaza The Mall Rawalpindi
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="formbox">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />

                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />

                      <input
                        type="text"
                        class="form-control"
                        placeholder="Message"
                        aria-label="message"
                        aria-describedby="basic-addon1"
                      />

                      <button type="submit" class="sendmessage mb-3">
                        Send Message
                      </button>
                    </div>
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
      })}
    </div>
  );
};

export default BusinessUnit;
