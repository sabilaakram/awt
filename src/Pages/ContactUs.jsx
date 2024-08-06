import jobseeker from "../assets/contactus/partnership.png";
import handss from "../assets/contactus/user.png";
import quries from "../assets/contactus/question.png";
import contact from "../assets/contactus.png";
import { MdMailOutline } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import ImagesSlider from "../Components/ImagesSlider";
import { Breadcrumb, Container } from "react-bootstrap";
import ContactInfoCard from "../Components/ContactInfoCard";

const ContactUs = () => {
  return (
    <div>
      <section className="commonbg">
        <div className="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
                  Contact <span>Us </span>
                </h1>

                <Breadcrumb>
                  <Breadcrumb.Item href="/" className="">
                    Home
                  </Breadcrumb.Item>

                  <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="connectingalways">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 ">
              <div className="alwaybox">
                <div className="ourmission">
                  <span className="leftlineheading"> Connecting Always</span>
                  <h2>Hear by Our Heart</h2>
                  <p>
                    Our team is available to help with your enquiries on email &
                    phone, or visit our place.
                  </p>
                </div>

                <div className="shadowww-box">
                  <div className="borderr-box">
                    <h3> Quick Contact </h3>
                    <div className="row  inlinebox">
                      <div className="col-lg-2">
                        <div className="icon-box">
                          <FaPhone color="#fff" size={22} />
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className="icon-info">
                          <h5> Main Office</h5>
                          <ul>
                            <li>
                              <a href="tel:92-51-9272400-4">
                                {" "}
                                +92-51-9272400-4{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="borderr-box">
                    <h3>Email Address </h3>
                    <div className="row  inlinebox">
                      <div className="col-lg-2">
                        <div className="icon-box">
                          <MdMailOutline color="#fff" size={22} />{" "}
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className="icon-info">
                          <h5> Mail to</h5>
                          <ul>
                            <li>
                              <a href="mailto:infoawt@awt.com.pk">
                                {" "}
                                infoawt@awt.com.pk{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="borderr-box">
                    <h3>Mailing Address </h3>
                    <div className="row  inlinebox">
                      <div className="col-lg-2">
                        <div className="icon-box">
                          <FaLocationDot color="#fff" size={22} />
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className="icon-info">
                          <h5> Address to</h5>
                          <ul>
                            <li>
                              <button className="link-button">
                                AWT Plaza The Mall Rawalpindi
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4">
              <img src={contact} className="img-fluid" alt="" />
            </div>

            <div className="col-lg-4 col-md-4">
              <div className="alwaybox">
                <div className="ourmission">
                  <span className="leftlineheading"> Drop a Line </span>
                  <h2>Leave us Message</h2>
                  <p>
                    Please feel free to get in touch using the form below. We'd
                    love to hear for you.
                  </p>
                </div>

                <div className="shadowww-box">
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa fa-user-o" aria-hidden="true"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </span>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      <i
                        class="fa fa-volume-control-phone"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <input
                      class="form-control"
                      placeholder="Phone"
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    />
                  </div>

                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa fa-commenting-o" aria-hidden="true"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="message"
                      aria-label="message"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <button type="submit" class="sendmessage mb-3">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-contact">
        <Container>
          <div className="text-center">
            <span className="leftlineheading">Connect</span>
            <h2 className="m-0 ">AWT Team Members</h2>
          </div>
          <div className="team-contact-grid">
            <ContactInfoCard />
          </div>
        </Container>
      </section>

      <section className="threeboxxx p-3 p-sm-0">
        <div className="container bggg">
          <div className="row">
            <div className="col-lg-4">
              <div className="fourboxmaingreen">
                <div className="fourimgsbox ">
                  <img src={handss} className="img-fluid" alt="" />
                </div>
                <div className="fourinfogreen">
                  <h3>Collaboration</h3>
                  <p>Looking for a Strategic Partnership?</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="fourboxmaingreen">
                <div className="fourimgsbox">
                  <img src={jobseeker} className="img-fluid" alt="" />
                </div>
                <div className="fourinfogreen">
                  <h3> Job Seekers</h3>
                  <p> Want to become a part of our business team?</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="fourboxmaingreen">
                <div className="fourimgsbox">
                  <img src={quries} className="img-fluid" alt="" />
                </div>
                <div className="fourinfogreen">
                  <h3> Queries</h3>
                  <p> Have questions in your mind?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mappb0x">
        <div className="container-fluid overflow-hidden no-gutters p-0">
          <div className="row">
            <div className="col-lg-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.335508796949!2d73.04483477440903!3d33.596598241654355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948409da2c3b%3A0xbdeea01d5f91f54a!2sAWT%20(Army%20Welfare%20Trust)%20Plaza!5e0!3m2!1sen!2s!4v1722922177880!5m2!1sen!2s"
                width="100%"
                height="550"
                allowFullScreen
                title="map"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
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

export default ContactUs;
