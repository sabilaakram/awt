import AboutTimeline from "../Components/AboutTimeline.jsx";

import visionarmyhelp from "../assets/Aboutus/visionarmyhelp.png";
import trust1 from "../assets/contactus/trust1.png";
import trust2 from "../assets/contactus/trust2.png";
import trust3 from "../assets/contactus/trust3.png";
import trust4 from "../assets/contactus/trust4.png";
import trust5 from "../assets/contactus/trsut5.png";
import trsut6 from "../assets/contactus/trust6.png";
import Slider from "react-slick";

const AboutUs = () => {
  var settingsllogo = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <section className="commonbg">
        <div className="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
                  About <span>Us </span>
                </h1>

                <h5>
                  Home | <span>About Us </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutusbox">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="aboutus">
                <span className="linesheading"> AWT</span>
                <h2> A Legacy of Service, Support, and Progress </h2>
                <p>
                  Army Welfare Trust was founded on noble principles, and over
                  the years, it has persistently grown and evolved. Along with
                  fulfilling the objective of the welfare of our Army Soldiers
                  through funds generation, we are making progress of paramount
                  importance in all of our businesses. AWT is contributing to
                  the economy of Pakistan by opening doors to career
                  opportunities for its people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section >
        <div className="container">
          <div className="row spacepadding ">
            <div className="col-lg-3">
              <div className="fourboxmain">
                <div className="fourimgsbox">
                  <img src={partner} className="img-fluid" />
                </div>
                <div className="fourinfo">
                  <h3> 97+</h3>
                  <p> Partners</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="fourboxmain">
                <div className="fourimgsbox">
                  <img src={careothers} className="img-fluid" />
                </div>
                <div className="fourinfo">
                  <h3> 8945+</h3>
                  <p> Employees</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="fourboxmain">
                <div className="fourimgsbox">
                  <img src={shinstars} className="img-fluid" />
                </div>
                <div className="fourinfo">
                  <h3> 10M+</h3>
                  <p> Funds Generated</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="fourboxmain">
                <div className="fourimgsbox">
                  <img src={countery} className="img-fluid" />
                </div>
                <div className="fourinfo">
                  <h3> 100M+</h3>
                  <p>Country Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section>

<div className="container">
  <div className="row">
    <div className="col-lg-12">
    <div className="container">
      <div className="row">
        {counters.map((counter, index) => (
          <CounterBox key={index} {...counter} />
        ))}
      </div>
    </div>
    </div>
  </div>
</div>

</section> */}

      {/* <section className="aboutusbox">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="ourmission">
                <span className="leftlineheading"> Our Vission </span>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet. Ut alias voluptatibus eum
                  obcaecati sapiente qui harum quibusdam. Est impedit incidunt
                  et ducimus voluptates qui quam maiores qui quae suscipit est
                  assumenda.Lorem ipsum dolor sit amet. Ut alias voluptatibus
                  eum obcaecati sapiente qui harum quibusdam.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <img src={aboutvision} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img src={visionarmy} className="rounded sizesss" />
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="aboutusbox">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="ourmission">
                <span className="leftlineheading"> Our Vission </span>
                <h2>Earning Confidence as a Remarkable Welfare Organization
</h2>
                <p>
                Our vision is crystal clear; AWT envisions emerging as a leading welfare trust that meets high standards, principles, and industry norms with an unshakeable commitment. While setting benchmarks for excellence, we look forward to contributing genuinely to the world.


                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <img src={circlearmyarrow} />
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img src={visionarmyhelp} className="rounded sizesss" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="aboutusbox">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="aboutus">
                <span className="linesheading"> History </span>
                <h2> Milestones in the History of AWT </h2>
                <p>
                  From its inception to the establishment of vital business
                  units in different sectors, the journey of the Army Welfare
                  Trust is a tale of unwavering commitment and transformative
                  impact on countless lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutTimeline />

      <section className="aboutusbox">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="aboutus">
                <span className="linesheading"> Insights About Our </span>
                <h2> Corporate Journey 2022</h2>
                <p>
                  From healthcare initiatives to sustainable development
                  projects, the Army Welfare Trust accomplished significant
                  milestones. 2022 proved to be a year of impressive advancement
                  for the Army Welfare Trust.
                </p>

                <p>
                  {" "}
                  Get a complete picture of the events from our Corporate
                  Profile 2022. Enter your email address to download it now!
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="Corporate">
                <form>
                  <div class="input-group mt-3 ">
                    <input
                      type="emial"
                      class="form-control"
                      placeholder="Email address..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <button type="submit" className="download">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="spaceupdowngray">
        <div className="container-fluid overflow-hidden no-gutters p-0">
          <div className="row">
            <Slider {...settingsllogo}>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust1} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust2} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust3} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust4} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trsut6} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust5} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust2} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust1} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust4} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust5} className="img-fluid" />{" "}
                </div>
              </div>

              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trsut6} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust3} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust3} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust4} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust5} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust3} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust2} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust1} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust4} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust5} className="img-fluid" />{" "}
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
