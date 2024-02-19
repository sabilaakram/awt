import jobseeker from "../assets/contactus/partnership.png";
import handss from "../assets/contactus/user.png";
import quries from "../assets/contactus/question.png";
import contact from "../assets/contactus.png";

import ImagesSlider from "../Components/ImagesSlider";
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

                <h5>
                  Home | <span>Contact Us </span>
                </h5>
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
                          <i class="fa fa-phone" aria-hidden="true"></i>
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
                          <i class="fa fa-phone" aria-hidden="true"></i>
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
                          <i class="fa fa-phone" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className="icon-info">
                          <h5> Address to</h5>
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
                    Sent Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="threeboxxx">
        <div className="container bggg">
          <div className="row">
            <div className="col-lg-4">
              <div className="fourboxmaingreen">
                <div className="fourimgsbox ">
                  <img src={handss} className="img-fluid" alt="" />
                </div>
                <div className="fourinfogreen">
                  <h3> Collaboration</h3>
                  <p> Looking for a Strategic Partnership?</p>
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
        <div className="container-fluid overflow-hidden no-gutters p-0 ">
          <div className="row">
            <div className="col-lg-12">
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    title="AWT Location"
                    width="100%"
                    height="510"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=ARMY WELFARE TRUST. AWT Plaza The Mall Rawalpindi&t=&z=10&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </div>
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
};

export default ContactUs;
