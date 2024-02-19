import CounterBox from "../Components/CounterBox.js";
import HeaderSlider from "../Components/HeaderSlider.jsx";
import NewsSlider from "../Components/NewsSlider.jsx";

import businessUnitsSliderData from "../data/businessUnitsSliderData.js";
import BusinessUnitsSlider from "../Components/BusinessUnitsSlider.jsx";
import { useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("v-tabs-allunits");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const counters = [
    {
      icon: "fa-thumbs-o-up",
      value: "40 Billion",
      label: "Well Above 40 Billion Rupees Worth company ",
      colored: true,
    },
    {
      icon: "fa-group",
      value: "28,000",
      label: "Providing 28,000 Direct & Indirect Employments",
    },
    {
      icon: "fa-shopping-cart",
      value: "20 Companies",
      label: "20 Companies And Still Growing",
    },
    {
      icon: "fa-user",
      value: "2 Billion",
      label: "2 Billion Rupees Contributed To National Excequer",
    },
  ];

  return (
    <div>
      <HeaderSlider />

      <section className="spaceupdown">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="aboutus">
                <span className="linesheading">Introduction</span>
                <h2>A Promise of Resolute and Exceptional Cooperation</h2>
                <p>
                  We are excelling and achieving our objective with 53 years of
                  dedicated investments in different business units, aimed at
                  the betterment of Army Personnel and strengthening the
                  national economy of Pakistan. At the heart of our corporation,
                  lies a core value that emphasizes being a trusting, valuable,
                  and effective partner. We aspire to sustain productive
                  relationships with governments, companies, communities, and
                  customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsSlider />

      {/* <section>
        <div className="container">
          <div className="row  d-flex justify-content-start align-items-center">
            <div className="col-lg-6">
              <div className="ourmission">
                <span className="leftlineheading">Our Mission</span>
                <h2> Supporting Our Soldiers, Empowering Our Youth</h2>
                <p>
                  At AWT, we take immense pride in serving our heroes of the
                  nation through rehabilitation, career opportunities after
                  retirement and long-term support for the kins of deceased army
                  officers. Our goal is to generate maximum funds for our
                  soldiers’ welfare. Furthermore, we strive to invest in our
                  youth’s future by opening avenues of employment for a
                  prosperous Pakistan.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <img src={ourmission} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="spaceupdown">
        <div className="container">
          <div className="row  d-flex justify-content-start align-items-center">
            <div className="col-lg-6">
              <img src={ourvisssion} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="ourmission leftspacee">
                <span className="leftlineheading"> Our Vision </span>
                <h2>Earning Confidence as a Remarkable Welfare Organization</h2>
                <p>
                  Our vision is crystal clear; AWT envisions emerging as a
                  leading welfare trust that meets high standards, principles,
                  and industry norms with an unshakeable commitment. While
                  setting benchmarks for excellence, we look forward to
                  contributing genuinely to the welfare of our soldiers and the
                  public of Pakistan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ourmission  spacebottom">
                <span className="leftlineheading"> Our Story </span>
                <h2>We Pledge to Leave No Veteran Without Care and Support</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div class="embed-responsive embed-responsive-21by9">
                <iframe
                  class="embed-responsive-item"
                  width="100%"
                  height="500"
                  allowfullscreen
                  src="https://www.youtube.com/embed/vpl1FyToXck?si=CE93UN35u-siTFA7"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; "
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bggrayy">
        <div className="container-fluid">
          <div class="row">
            <div className="col-lg-1 col-md-0 col-sm-0"></div>
            <div class="col-lg-3 col-md-4 col-sm-12">
              <div className="lefttabsss">
                <div className="tabsheadingsmove">
                  {" "}
                  <span className="leftlineheading rightsss">
                    {" "}
                    Welfare Units{" "}
                  </span>
                </div>

                <div
                  class="nav flex-column nav-tabs text-center"
                  id="v-tabs-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    class="nav-link active"
                    id="v-tabs-home-allunits"
                    data-bs-toggle="tab"
                    href="#v-tabs-allunits"
                    role="tab"
                    aria-controls="v-tabs-allunits"
                    aria-selected="true"
                    onClick={() => handleTabChange("v-tabs-allunits")}
                  >
                    <span>All Companies</span>
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>{" "}
                  </a>
                  <a
                    class="nav-link "
                    id="v-tabs-home-tab"
                    data-bs-toggle="tab"
                    href="#v-tabs-home"
                    role="tab"
                    aria-controls="v-tabs-home"
                    aria-selected="true"
                    onClick={() => handleTabChange("v-tabs-home-tab")}
                  >
                    <span>Public Listed Companies</span>
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>{" "}
                  </a>

                  <a
                    class="nav-link"
                    id="v-tabs-profile-tab"
                    data-bs-toggle="tab"
                    href="#v-tabs-profile"
                    role="tab"
                    aria-controls="v-tabs-profile"
                    aria-selected="false"
                    onClick={() => handleTabChange("v-tabs-profile-tab")}
                  >
                    <span>Public Unlisted Companies </span>
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                  </a>
                  <a
                    class="nav-link"
                    id="v-tabs-messages-tab"
                    data-bs-toggle="tab"
                    href="#v-tabs-messages"
                    role="tab"
                    aria-controls="v-tabs-messages"
                    aria-selected="false"
                    onClick={() => handleTabChange("v-tabs-messages-tab")}
                  >
                    <span>Private Limited Companies</span>
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                  </a>

                  <a
                    class="nav-link"
                    id="v-tabs-trust-unit"
                    data-bs-toggle="tab"
                    href="#v-tabs-trust"
                    role="tab"
                    aria-controls="v-tabs-trust"
                    aria-selected="false"
                    onClick={() => handleTabChange("v-tabs-trust-unit")}
                  >
                    <span>Other Trust Units</span>
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-8">
              <div class="tab-content" id="v-tabs-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="v-tabs-allunits"
                  role="tabpanel"
                  aria-labelledby="v-tabs-home-allunits"
                >
                  <BusinessUnitsSlider
                    businessUnitsSliderData={businessUnitsSliderData}
                    activeTabId={activeTab}
                  />
                </div>
                <div
                  class="tab-pane fade  "
                  id="v-tabs-home"
                  role="tabpanel"
                  aria-labelledby="v-tabs-home-tab"
                >
                  <BusinessUnitsSlider
                    businessUnitsSliderData={businessUnitsSliderData}
                    activeTabId={activeTab}
                  />
                </div>

                <div
                  class="tab-pane fade"
                  id="v-tabs-profile"
                  role="tabpanel"
                  aria-labelledby="v-tabs-profile-tab"
                >
                  <BusinessUnitsSlider
                    businessUnitsSliderData={businessUnitsSliderData}
                    activeTabId={activeTab}
                  />
                </div>
                <div
                  class="tab-pane fade"
                  id="v-tabs-messages"
                  role="tabpanel"
                  aria-labelledby="v-tabs-messages-tab"
                >
                  <BusinessUnitsSlider
                    businessUnitsSliderData={businessUnitsSliderData}
                    activeTabId={activeTab}
                  />
                </div>

                <div
                  class="tab-pane fade"
                  id="v-tabs-trust"
                  role="tabpanel"
                  aria-labelledby="v-tabs-trust-unit"
                >
                  <BusinessUnitsSlider
                    businessUnitsSliderData={businessUnitsSliderData}
                    activeTabId={activeTab}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="spaceupdown">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ourmission">
                <span className="leftlineheading"> Trusted Partners </span>
                <h2>
                  Your Trusted Partner for Automotive and Industrial lubrication
                  Needs
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros Lorem ipsum dolor .Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Suspendisse
                  varius enim in eros Lorem ipsum dolor .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
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
      </section>
    </div>
  );
};

export default Home;
