import CounterBox from "../Components/CounterBox.js";
import HeaderSlider from "../Components/HeaderSlider.jsx";
import NewsSlider from "../Components/NewsSlider.jsx";
import BusinessUnitsSlider from "../Components/BusinessUnitsSlider.jsx";
import { useEffect, useState } from "react";
import { useBusinessUnit } from "../data/GetData.jsx";
import LoadingSpinner from "../Components/LoadingSpinner.jsx";

const Home = () => {
  const [activeTab, setActiveTab] = useState("v-tabs-allunits");
  const { data, error, isPending } = useBusinessUnit();
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const getCompanyIdLabel = (companyId) => {
    switch (companyId) {
      case 1:
        return "Public Listed Companies";
      case 2:
        return "Public Unlisted Companies";
      case 3:
        return "Private Limited Companies";
      case 4:
        return "Other Trust Units";
      default:
        return "Unknown";
    }
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    if (data) {
      const categories = [...new Set(data.map((unit) => unit.company_id))];
      // Filter out the "Unknown" category
      const filteredCategories = categories.filter(
        (category) => category !== 0
      );
      // Sort the categories in ascending order
      filteredCategories.sort((a, b) => a - b);
      setUniqueCategories(filteredCategories);
    }
  }, [data]);

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

  if (error) return "An error occured";
  if (isPending) return <LoadingSpinner />;

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
                    className={`nav-link ${
                      activeTab === "v-tabs-allunits" ? "active" : ""
                    }`}
                    id="v-tabs-allunits"
                    data-bs-toggle="tab"
                    href="#v-tabs-allunits"
                    role="tab"
                    aria-controls="v-tabs-allunits"
                    aria-selected={activeTab === "v-tabs-allunits"}
                    onClick={() => handleTabChange("v-tabs-allunits")}
                  >
                    <span>All Companies</span>
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                  </a>

                  {uniqueCategories.map((categoryId) => (
                    <a
                      key={categoryId}
                      className={`nav-link ${
                        activeTab === `v-tabs-${categoryId}` ? "active" : ""
                      }`}
                      id={`v-tabs-${categoryId}`}
                      data-bs-toggle="tab"
                      href={`#v-tabs-${categoryId}`}
                      role="tab"
                      aria-controls={`v-tabs-${categoryId}`}
                      aria-selected={activeTab === `v-tabs-${categoryId}`}
                      onClick={() => handleTabChange(`v-tabs-${categoryId}`)}
                    >
                      <span>{getCompanyIdLabel(categoryId)}</span>
                      <i className="fa fa-chevron-left" aria-hidden="true"></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div class="col-md-8">
              <div class="tab-content" id="v-tabs-tabContent">
                {activeTab === "v-tabs-allunits" ? (
                  <div
                    className="tab-pane fade show active"
                    id="v-tabs-allunits"
                    role="tabpanel"
                    aria-labelledby="v-tabs-allunits-tab"
                  >
                    <BusinessUnitsSlider
                      businessUnitsSliderData={data} // Render all data here
                      activeTabId={activeTab}
                    />
                  </div>
                ) : (
                  uniqueCategories.map((categoryId) => (
                    <div
                      key={`category-${categoryId}`}
                      className={`tab-pane fade ${
                        activeTab === `v-tabs-${categoryId}`
                          ? "show active"
                          : ""
                      }`}
                      id={`v-tabs-${categoryId}`}
                      role="tabpanel"
                      aria-labelledby={`v-tabs-${categoryId}-tab`}
                    >
                      <BusinessUnitsSlider
                        businessUnitsSliderData={data.filter(
                          (item) => item.company_id === categoryId
                        )}
                        activeTabId={activeTab}
                      />
                    </div>
                  ))
                )}
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
                <span className="leftlineheading"> Our Contributions</span>
                <h2>Committed Services to Pakistan’s Success</h2>
                <p>
                  Army Welfare Trust has been operating tirelessly and devotedly
                  to leave a positive imprint in the lives of its Army officers
                  and the public of Pakistan as a whole.
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
