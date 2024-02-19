import { useState } from "react";
import BusinessUnitsSlider from "../Components/BusinessUnitsSlider";
import businessUnitsSliderData from "../data/businessUnitsSliderData";

const BusinessUnits = () => {
  const [activeTab, setActiveTab] = useState("v-tabs-allunits");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <section className="commonbg">
        <div className="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
                  Business Units <span>Supporting Welfare </span>
                </h1>

                <h5>
                  Home | <span>BusinessUnits </span>
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
                <span className="linesheading"> Business Units</span>
                <h2>
                  Supporting the Recovery of Veterans and Prosperity of Pakistan
                </h2>
                <p>
                  We initiated our business units with the ultimate goal of
                  boosting avenues of funds for the care of our Armymen. While
                  also uplifting the economy of Pakistan by creating new
                  employment opportunities. Army Welfare Trust continues to
                  serve as a bridge to the military’s welfare and civilian
                  empowerment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default BusinessUnits;
