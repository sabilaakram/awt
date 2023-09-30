import Slider from "react-slick";
import { Link } from "react-router-dom";
import askarigeneralinsurancecompanylimited from "../assets/Home/AskariGeneralInsuranceCompanyLimitedmin.jpg";
import askarilifeinsurancecompanylimited  from "../assets/Home/AskariLifeInsuranceCompanyLimited-min.jpg";
import aWTinvestmentslimited from "../assets/Home/AWTInvestmentsLimitedmin.jpg"; 
import askarirealstate  from "../assets/Home/AskariRealEstate-min.jpg";
import bluelagoon from "../assets/Home/BlueLagoonandArmyWelfareMess-min.jpg"; 
import askarifarmSeeds from "../assets/Home/AskariFarmsandSeeds-min.jpg";
import askarifuel from "../assets/Home/AskariFuelsmin.jpg";
import armywelfaresugarmills from "../assets/Home/armywelfaresugarmills-min.jpg";
import askariwoolenmills from "../assets/Home/AskariWoolenMills-min.jpg";
import askarishoes from "../assets/Home/AskariShoesmin.jpg";
import malpaklimited from "../assets/Home/malpakistanimited-min.jpg";
import askariaviation from "../assets/Home/AskariAviationmin.jpg";
import askariguards from "../assets/Home/askariguardsprivateimitedmin.jpg";
import medask from "../assets/Home/MedAsk-min.jpg";
import askarienterprise from "../assets/Home/AskariEnterprisesPvtLtd-min.jpg";
import faujisecurity from "../assets/Home/FaujiSecurityServicesPvtLtdmin.jpg";
import askaridevelopment from "../assets/Home/AskariDevelopmentHoldingsPvtltd-min.jpg";
import jolidays from "../assets/Home/Jolidays-min.jpg";
const BusinessUnits = () =>{

    const settingsmiddle = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
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
    return(
        <div>
    <section className="commonbg">
        <div className="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
               
                Business Units    <span>Supporting Welfare </span>
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
                <h2>Supporting the Recovery of Veterans and Prosperity of Pakistan 
 </h2>
                <p>
                We initiated our business units with the ultimate goal of boosting avenues of funds for the care of our Armymen. While also uplifting the economy of Pakistan by creating new employment opportunities. Army Welfare Trust continues to serve as a bridge to the military’s welfare and civilian empowerment. 

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
                <div className="tabsheadingsmove">  <span className="leftlineheading rightsss">
                  {" "}
                  Welfare Units{" "}
                </span></div>
               
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
                  >
                    <span>Other Trust Units</span>
                    <i class="fa fa-chevron-left" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-8 col-md-8 col-ms-12">
              <div class="tab-content" id="v-tabs-tabContent">

              <div
                  class="tab-pane fade show active"
                  id="v-tabs-allunits"
                  role="tabpanel"
                  aria-labelledby="v-tabs-home-allunits"
                >
                  <Slider {...settings}>
                    <div>
                      <div className="unitmain-box">
                        <h5> Public Listed Companies </h5>
                        <img src={askarigeneralinsurancecompanylimited} className="img-fluid" />
                        <h3> Askari General Insurance Company Limited </h3>
                        <p>
                          {" "}
                          Ranked among the top ten Pakistan insurers in terms of
                          gross premium, Askari General Insurance Company
                          Limited holds a position in the local insurance
                          industry as a reliable and loyal partner.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="unitmain-box">
                        <h5> Public Listed Companies </h5>
                        <img src={askarilifeinsurancecompanylimited} className="img-fluid" />
                        <h3>Askari Life Insurance Company Limited </h3>
                        <p>
                          {" "}
                          Askari Life Insurance Company Limited has a current
                          capital of Rs. 750 million. Their shares are publicly
                          listed on the Pakistan Stock Exchange.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="unitmain-box">
                        <h5> Other Trust Units</h5>
                        <img src={askarirealstate} className="img-fluid" />
                        <h3>Askari Real Estate </h3>
                        <p>
                          Askari Real Estate is transforming the lives of people
                          by turning their home visions into realities.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="unitmain-box">
                        <h5>Other Trust Units</h5>
                        <img src={bluelagoon} className="img-fluid" />
                        <h3>Blue Lagoon and Army Welfare Mess </h3>
                        <p>
                          Blue Lagoon and Army Welfare Mess has a centered
                          location in the Rawalpindi Cantt Area and is
                          considered to be one of the most captivating places to
                          visit.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="unitmain-box">
                        <h5>Other Trust Units</h5>
                        <img src={askarifarmSeeds} className="img-fluid" />
                        <h3>Askari Farms and Seeds </h3>
                        <p>
                          Askari Farms and Seeds is the first economic venture
                          of AWT that involves both conventional and modern
                          agriculture.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="unitmain-box">
                        <h5>Other Trust Units</h5>
                        <img src={askarifuel} className="img-fluid" />
                        <h3>Askari Fuels</h3>
                        <p>
                          Askari Fuels has become a giant system comprising 30
                          CNG stations spanning all over Pakistan.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="unitmain-box">
                        <h5>Other Trust Units</h5>
                        <img src={armywelfaresugarmills} className="img-fluid" />
                        <h3>Army Welfare Sugar Mills</h3>
                        <p>
                          Army Welfare Sugar Mills is one of the premier sugar
                          projects in the province of Sindh providing employment
                          to retired army personnel.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="unitmain-box">
                        <h5>Other Trust Units</h5>
                        <img src={askariwoolenmills} className="img-fluid" />
                        <h3> Askari Woolen Mills</h3>
                        <p>
                          Askari Woolen Mills is renowned for being the greatest
                          producer of woolen products in Pakistan.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="unitmain-box">
                        <h5>Other Trust Units</h5>
                        <img src={askarishoes} className="img-fluid" />
                        <h3> Askari Shoes</h3>
                        <p>
                          Askari Shoes manufactures strong and durable DNS boots
                          with the best missionary from DESMA. Along with this,
                          it designs footwear for the civil market as well.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                     <div>
                      <div className="unitmain-box">
                        <h5> Public Unlisted Companies</h5>
                        <img src={malpaklimited} className="img-fluid" />
                        <h3> Mal Pakistan Limited </h3>
                        <p>
                          {" "}
                          Mal Pakistan Limited is a state-of-the-art oil
                          lubricant company established by a strategic
                          partnership with the Largest oil company Mobil
                          Lubricants.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="unitmain-box">
                        <h5>Public Unlisted Companies</h5>
                        <img src={aWTinvestmentslimited} className="img-fluid" />
                        <h3>
                          AWT Investments Limited (Non-Banking Finance Company){" "}
                        </h3>
                        <p>
                          {" "}
                          Licensed by the Securities and Exchange Commission of
                          Pakistan, AWT Investments Limited oversees the
                          management of open and closed-end funds.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="unitmain-box">
                        <h5> Private Limited Companies</h5>
                        <img src={askariaviation} className="img-fluid" />
                        <h3>Askari Aviation </h3>
                        <p>
                          Askari Aviation has prominence in the industry as a
                          leader. They are rendering quality services and are
                          popularly known for their devotion and excellence.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="unitmain-box">
                        <h5>Private Limited Companies</h5>
                        <img src={askariguards} className="img-fluid" />
                        <h3>Askari Guards Private Limited </h3>
                        <p>
                          {" "}
                          Askari Guards Private Limited is rising as a
                          well-recognized provider of guarding services
                          throughout Pakistan and offering holistic security to
                          both national and international companies.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="unitmain-box">
                        <h5>Private Limited Companies</h5>
                        <img src={medask} className="img-fluid" />
                        <h3>MedAsk </h3>
                        <p>
                          MedAsk by Pakistan Army is the leading healthcare
                          provider serving its Army personnel and their
                          families.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="unitmain-box">
                        <h5>Private Limited Companies</h5>
                        <img src={askarienterprise} className="img-fluid" />
                        <h3>Askari Enterprises Pvt Ltd</h3>
                        <p>
                          Askari Enterprises Private Limited is a special unit
                          responsible for the distribution of weapons,
                          ammunition, vehicles, and additional equipment.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="unitmain-box">
                        <h5>Private Limited Companies</h5>
                        <img src={faujisecurity} className="img-fluid" />
                        <h3>Fauji Security Services Pvt Ltd</h3>
                        <p>
                          Fauji Security Services Private Limited has the best
                          reputation as a security company in Pakistan.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="unitmain-box">
                        <h5>Private Limited Companies</h5>
                        <img src={askaridevelopment} className="img-fluid" />
                        <h3> Askari Development Holdings Pvt Ltd</h3>
                        <p>
                          Askari Development Holdings Private Limited is a 100%
                          owned trust unit of AWT.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="unitmain-box">
                        <h5>Private Limited Companies</h5>
                        <img src={jolidays} className="img-fluid" />
                        <h3> Jolidays</h3>
                        <p>
                          Jolidays is dedicated to providing quality travel
                          arrangements to its clients that make their experience
                          a true value for money.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
                <div
                  class="tab-pane fade  "
                  id="v-tabs-home"
                  role="tabpanel"
                  aria-labelledby="v-tabs-home-tab"
                >
                  <Slider {...settings}>
                    <div>
                      <div className="unitmain-box">
                        <h5> Public Listed Companies </h5>
                        <img src={askarigeneralinsurancecompanylimited} className="img-fluid" />
                        <h3> Askari General Insurance Company Limited </h3>
                        <p>
                          {" "}
                          Ranked among the top ten Pakistan insurers in terms of
                          gross premium, Askari General Insurance Company
                          Limited holds a position in the local insurance
                          industry as a reliable and loyal partner.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="unitmain-box">
                        <h5> Public Listed Companies </h5>
                        <img src={askarilifeinsurancecompanylimited} className="img-fluid" />
                        <h3>Askari Life Insurance Company Limited </h3>
                        <p>
                          {" "}
                          Askari Life Insurance Company Limited has a current
                          capital of Rs. 750 million. Their shares are publicly
                          listed on the Pakistan Stock Exchange.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                    
                   
                  </Slider>
                </div>







                <div
                  class="tab-pane fade"
                  id="v-tabs-profile"
                  role="tabpanel"
                  aria-labelledby="v-tabs-profile-tab"
                >
                  <Slider {...settings}>
                    <div>
                      <div className="unitmain-box">
                        <h5> Public Unlisted Companies</h5>
                        <img src={malpaklimited} className="img-fluid" />
                        <h3> Mal Pakistan Limited </h3>
                        <p>
                          {" "}
                          Mal Pakistan Limited is a state-of-the-art oil
                          lubricant company established by a strategic
                          partnership with the Largest oil company Mobil
                          Lubricants.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="unitmain-box">
                        <h5>Public Unlisted Companies</h5>
                        <img src={aWTinvestmentslimited} className="img-fluid" />
                        <h3>
                          AWT Investments Limited (Non-Banking Finance Company){" "}
                        </h3>
                        <p>
                          {" "}
                          Licensed by the Securities and Exchange Commission of
                          Pakistan, AWT Investments Limited oversees the
                          management of open and closed-end funds.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                    
                   
                  </Slider>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-tabs-messages"
                  role="tabpanel"
                  aria-labelledby="v-tabs-messages-tab"
                >
                  <Slider {...settings}>
                    <div>
                      <div className="unitmain-box">
                        <h5> Private Limited Companies</h5>
                        <img src={askariaviation} className="img-fluid" />
                        <h3>Askari Aviation </h3>
                        <p>
                          Askari Aviation has prominence in the industry as a
                          leader. They are rendering quality services and are
                          popularly known for their devotion and excellence.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="unitmain-box">
                        <h5>Private Limited Companies</h5>
                        <img src={askariguards} className="img-fluid" />
                        <h3>Askari Guards Private Limited </h3>
                        <p>
                          {" "}
                          Askari Guards Private Limited is rising as a
                          well-recognized provider of guarding services
                          throughout Pakistan and offering holistic security to
                          both national and international companies.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="unitmain-box">
                        <h5>Private Limited Companies</h5>
                        <img src={medask} className="img-fluid" />
                        <h3>MedAsk </h3>
                        <p>
                          MedAsk by Pakistan Army is the leading healthcare
                          provider serving its Army personnel and their
                          families.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="unitmain-box">
                        <h5>Private Limited Companies</h5>
                        <img src={askarienterprise} className="img-fluid" />
                        <h3>Askari Enterprises Pvt Ltd</h3>
                        <p>
                          Askari Enterprises Private Limited is a special unit
                          responsible for the distribution of weapons,
                          ammunition, vehicles, and additional equipment.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="unitmain-box">
                        <h5>Private Limited Companies</h5>
                        <img src={faujisecurity} className="img-fluid" />
                        <h3>Fauji Security Services Pvt Ltd</h3>
                        <p>
                          Fauji Security Services Private Limited has the best
                          reputation as a security company in Pakistan.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="unitmain-box">
                        <h5>Private Limited Companies</h5>
                        <img src={askaridevelopment} className="img-fluid" />
                        <h3> Askari Development Holdings Pvt Ltd</h3>
                        <p>
                          Askari Development Holdings Private Limited is a 100%
                          owned trust unit of AWT.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="unitmain-box">
                        <h5>Private Limited Companies</h5>
                        <img src={jolidays} className="img-fluid" />
                        <h3> Jolidays</h3>
                        <p>
                          Jolidays is dedicated to providing quality travel
                          arrangements to its clients that make their experience
                          a true value for money.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>

                <div
                  class="tab-pane fade"
                  id="v-tabs-trust"
                  role="tabpanel"
                  aria-labelledby="v-tabs-trust-unit"
                >
                  <Slider {...settings}>
                    <div>
                      <div className="unitmain-box">
                        <h5> Other Trust Units</h5>
                        <img src={askarirealstate} className="img-fluid" />
                        <h3>Askari Real Estate </h3>
                        <p>
                          Askari Real Estate is transforming the lives of people
                          by turning their home visions into realities.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="unitmain-box">
                        <h5>Other Trust Units</h5>
                        <img src={bluelagoon} className="img-fluid" />
                        <h3>Blue Lagoon and Army Welfare Mess </h3>
                        <p>
                          Blue Lagoon and Army Welfare Mess has a centered
                          location in the Rawalpindi Cantt Area and is
                          considered to be one of the most captivating places to
                          visit.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="unitmain-box">
                        <h5>Other Trust Units</h5>
                        <img src={askarifarmSeeds} className="img-fluid" />
                        <h3>Askari Farms and Seeds </h3>
                        <p>
                          Askari Farms and Seeds is the first economic venture
                          of AWT that involves both conventional and modern
                          agriculture.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="unitmain-box">
                        <h5>Other Trust Units</h5>
                        <img src={askarifuel} className="img-fluid" />
                        <h3>Askari Fuels</h3>
                        <p>
                          Askari Fuels has become a giant system comprising 30
                          CNG stations spanning all over Pakistan.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="unitmain-box">
                        <h5>Other Trust Units</h5>
                        <img src={armywelfaresugarmills} className="img-fluid" />
                        <h3>Army Welfare Sugar Mills</h3>
                        <p>
                          Army Welfare Sugar Mills is one of the premier sugar
                          projects in the province of Sindh providing employment
                          to retired army personnel.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="unitmain-box">
                        <h5>Other Trust Units</h5>
                        <img src={askariwoolenmills} className="img-fluid" />
                        <h3> Askari Woolen Mills</h3>
                        <p>
                          Askari Woolen Mills is renowned for being the greatest
                          producer of woolen products in Pakistan.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="unitmain-box">
                        <h5>Other Trust Units</h5>
                        <img src={askarishoes} className="img-fluid" />
                        <h3> Askari Shoes</h3>
                        <p>
                          Askari Shoes manufactures strong and durable DNS boots
                          with the best missionary from DESMA. Along with this,
                          it designs footwear for the civil market as well.
                        </p>

                        <div className="unitbtnss">
                          <Link> Explore More </Link>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 m-auto"> 
                <Slider {...settingsmiddle}>
          <div>
            <div className="middlebox">
            <h3>1</h3>
            </div>
       
          </div>
          <div>
          <div className="middlebox">
            <h3>2</h3>  </div>
          </div>
          <div>
          <div className="middlebox">
            <h3>3</h3>  </div>
          </div>
          <div>
          <div className="middlebox">
            <h3>4</h3>  </div>
          </div>
          <div>
          <div className="middlebox">
            <h3>5</h3>  </div>
          </div>
          <div>
          <div className="middlebox">
            <h3>6</h3>  </div>
          </div>
        </Slider>
                
                </div>
            </div>
            </div>
      </section> */}
        </div>
    )
}

export default BusinessUnits