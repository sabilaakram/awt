import { useEffect, useState } from "react";
import BusinessUnitsSlider from "../Components/BusinessUnitsSlider";
import { useBusinessUnit } from "../data/GetData";
import LoadingSpinner from "../Components/LoadingSpinner";

const BusinessUnits = () => {
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

  if (isPending) return <LoadingSpinner />;
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
    </div>
  );
};

export default BusinessUnits;
