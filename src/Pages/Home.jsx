import CounterBox from "../Components/CounterBox.jsx";
import HeaderSlider from "../Components/HeaderSlider.jsx";
import BusinessUnitsSlider from "../Components/BusinessUnitsSlider.jsx";
import { useEffect, useState } from "react";
import { useBusinessUnit } from "../data/GetData.jsx";
import LoadingSpinner from "../Components/LoadingSpinner.jsx";
import ResourceSlider from "../Components/ResourceSlider.jsx";

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
    <>
      <HeaderSlider />

      <section className="container py-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="aboutus">
              <span className="linesheading">Introduction</span>
              <h2 className="text-primary-green">
                A Promise of Resolute and Exceptional Cooperation
              </h2>
              <p>
                We are excelling and achieving our objective with 53 years of
                dedicated investments in different business units, aimed at the
                betterment of Army Personnel and strengthening the national
                economy of Pakistan. At the heart of our corporation, lies a
                core value that emphasizes being a trusting, valuable, and
                effective partner. We aspire to sustain productive relationships
                with governments, companies, communities, and customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {data && (
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
                        <i
                          className="fa fa-chevron-left"
                          aria-hidden="true"
                        ></i>
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
      )}
      <section className="spaceupdown">
        <div className="container-md">
          <div className="row">
            <div className="col-lg-12">
              <div className="ourmission">
                <span className="leftlineheading"> Our Contributions</span>
                <h2 className="text-primary-green">
                  Committed Services to Pakistan’s Success
                </h2>
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
        <div className="container-md">
          <div className="row">
            <div className="col-lg-12">
              <div className="container-md">
                <div className="counter-box">
                  {counters.map((counter, index) => (
                    <CounterBox key={index} {...counter} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-lg p-4 d-flex align-items-center flex-xl-row flex-column gap-3 justify-content-between">
        <div className="ourmission relative">
          <span className="leftlineheading">Latest News And Events</span>
          <h2 className="text-primary-green">
            Committed Services to Pakistan&apos;s Success
          </h2>
          <p>
            Army Welfare Trust has been operating tirelessly and devotedly to
            leave a positive imprint in the lives of its Army officers and the
            public of Pakistan as a whole.
          </p>
        </div>

        <div className="max-w-lg">
          <ResourceSlider />
        </div>
      </section>
    </>
  );
};

export default Home;
