import { useEffect, useState } from "react";
import CounterBox from "../Components/CounterBox.jsx";
import HeaderSlider from "../Components/HeaderSlider.jsx";
import BusinessUnitsSlider from "../Components/BusinessUnitsSlider.jsx";
import { BusinessUnitsData } from "../data/GetData.jsx";
import ResourceSlider from "../Components/ResourceSlider.jsx";
import HomeLogoSlider from "../Components/HomeLogoSlider.jsx";

const Home = () => {
  const [activeTab, setActiveTab] = useState("All");
  const { data, error, isPending } = BusinessUnitsData();
  const [uniqueCategories, setUniqueCategories] = useState([]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    if (data) {
      const categories = [...new Set(data.map((unit) => unit.WelfareUnit))];
      setUniqueCategories([
        "All",
        ...categories.filter((cat) => cat !== "All"),
      ]);
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
  if (isPending) return <div>Fetching...</div>;

  return (
    <>
      <HeaderSlider />
      <HomeLogoSlider />

      <section className="container pb-4 pt-5">
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
              <div class="col-lg-3 col-md-4 col-sm-12">
                <div className="lefttabsss">
                  <div className="tabsheadingsmove">
                    <span className="leftlineheading rightsss">
                      Welfare Units
                    </span>
                  </div>

                  <div
                    class="nav flex-column nav-tabs text-center"
                    id="v-tabs-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    {uniqueCategories.map((category) => (
                      <a
                        key={category}
                        className={`nav-link ${
                          activeTab === category ? "active" : ""
                        }`}
                        id={`v-tabs-${category}`}
                        data-bs-toggle="tab"
                        href={`#v-tabs-${category}`}
                        role="tab"
                        aria-controls={`v-tabs-${category}`}
                        aria-selected={activeTab === category}
                        onClick={() => handleTabChange(category)}
                      >
                        <span>
                          {category === "All" ? "All Companies" : category}
                        </span>
                        <i
                          className="fa fa-chevron-left"
                          aria-hidden="true"
                        ></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-md-9">
                <div className="tab-content" id="v-tabs-tabContent">
                  {uniqueCategories.map((category) => (
                    <div
                      key={`category-${category}`}
                      className={`tab-pane fade ${
                        activeTab === category ? "show active" : ""
                      }`}
                      id={`v-tabs-${category}`}
                      role="tabpanel"
                      aria-labelledby={`v-tabs-${category}-tab`}
                    >
                      <BusinessUnitsSlider
                        businessUnitsSliderData={
                          category === "All"
                            ? data
                            : data.filter(
                                (item) => item.WelfareUnit === category
                              )
                        }
                        activeTabId={activeTab}
                      />
                    </div>
                  ))}
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

      <section className="container-lg p-4 d-flex align-items-center flex-xl-row flex-column gap-3 justify-content-between position-relative">
        <div className="ourmission relative p-0">
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
