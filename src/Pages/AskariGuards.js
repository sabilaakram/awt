import handshaking from "../assets/askerifuel/handshaking.png";
import trust1 from "../assets/contactus/trust1.png";
import trust2 from "../assets/contactus/trust2.png";
import trust3 from "../assets/contactus/trust3.png";
import trust4 from "../assets/contactus/trust4.png";
import trust5 from "../assets/contactus/trsut5.png";
import trsut6 from "../assets/contactus/trust6.png";

import Slider from "react-slick";

const AskariGuards = () =>{

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
            
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <div>
             <section className="feulaskeri">
        <div className="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
                Askari Guards Private Limited  | <span>Pakistan </span>{" "}
                </h1>

                <h5>
                  Home | <span>  Askari Guards  </span>{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="spaceupdown">
        <div className="container">
          <div className="row d-flex justify-content-start align-items-center">
            <div className="col-lg-6">
              <div className="ourmission">
                <span className="leftlineheading">Askari Guards  </span>
                <h2>Askari Guards: Your Ultimate Defenders of Security </h2>
                <p>
                Askari Guards (Pvt) Limited (AGL), a subsidiary of the Army Welfare Trust, embarked on its mission in 1996. Since its inception, AGL has maintained a robust presence throughout Pakistan delivering an unparalleled standard of security, armed with excellent equipment. Askari Guards provides guarding services to well-recognized national and multi-national companies. 

                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={handshaking} className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section class="spaceupdown">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="aboutus">
                <span className="linesheading"> Trusted Partners</span>
                <h2>
                Your Trusted Provider for Finest Guarding Solutions
                </h2>
                <p>
                We are dedicated to your safety and you can rely on us for top-notch security collaboration. Our ongoing efforts positively influence numerous lives, and we are committed to achieving significant advancements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
      <div class="container">
        <div className="row">
        <div className="col-lg-4">
        <div class="service-box">
            <div class="content">
                <div class="icons">
                    <i class="fa-solid fa-code"></i>
                </div>
                <div class="title-area">
                    <h3> Established in                 
   
</h3>
                    <span> 2014 </span>
                </div>
            </div>
        </div>
        </div>

        <div className="col-lg-4">
        <div class="service-box">
            <div class="content">
                <div class="icons">
                    <i class="fa-solid fa-code"></i>
                </div>
                <div class="title-area">
                    <h3> Public and Retired Personnel Employment
</h3>
                    <span>(Lives Impacted) </span>
                </div>
            </div>
        </div>
        </div>

        <div className="col-lg-4">
        <div class="service-box">
            <div class="content">
                <div class="icons">
                    <i class="fa-solid fa-code"></i>
                </div>
                <div class="title-area">
                    <h3>Revenue Generated
 </h3>
                    <span> 10 Happy Clients </span>
                </div>
            </div>
        </div>
        </div>
        </div>
      
    
     
    </div>
      </section>

     

      <section class="spaceupdown">
        <div class="container">
          <div class="row  d-flex justify-content-start align-items-center">
            <div class="col-lg-6">
              <img
                src="/static/media/ourvision.7e9da7429f1c3934276c.png"
                class="img-fluid"
              />
            </div>
            <div class="col-lg-6">
              <div class="ourmission">
                <span class="leftlineheading"> Support </span>
                <h2>
                How Askari Guards Support AWT
                </h2>
                <p>
                As a subsidiary of Army Welfare Trust, Askari Guards contributes to its noble goal by rendering employement opportunities to veterans. This ensures that they are playing their part in the well-being of retired army personnel and recruiting the best guarding manpower. Also, the capital made is utilized in the activities of Army’s welfare.  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="spaceupdown">
        <div className="container">
          <div className="row spacebottom" >
            <div className="col-lg-12">
              <div className="aboutus">
                <span className="linesheading"> Our services</span>
                <h2>
                All-Inclusive Security Services for Your Protection
                </h2>
                <p>
                Askari Guards presents comprehensive services to guard the lives and properties of our clients. We assure that your safety is our top commitment. 
                </p>
              </div>
            </div>
          </div>

          <div class="row  ">
        <div className="col-lg-4">
        <div class="card">
            <div class="icon-wrapper">
            <i class="fa fa-rebel" aria-hidden="true"></i>

            </div>
            <h3>Security Services
</h3>
            <p>
            As a pioneer in Pakistan's security services industry, AGL provides world-class, customized security solutions.
            </p>
          </div>
        </div>

        <div className="col-lg-4">
        <div class="card">
            <div class="icon-wrapper">
            <i class="fa fa-gg" aria-hidden="true"></i>

            </div>
            <h3>Cash-In Transit Services
</h3>
            <p>
            AGL is a top cash transportation operator in Pakistan, known for secure, efficient, and reliable CIT services.
            </p>
          </div>
        </div>

        <div className="col-lg-4">
        <div class="card">
            <div class="icon-wrapper">
            <i class="fa fa-object-ungroup" aria-hidden="true"></i>

            </div>
            <h3>Technical Security
</h3>
            <p>
            AGL takes pride to be one of the leading providers of comprehensive technical security solutions.

            </p>
          </div>
        </div>
      </div>
        </div>
      </section>
     
      <section class="spaceupdown">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                <div class="ourmission">
                
                <h2>
                Get in Touch
                </h2>
                <p>
                Explore AWT’s services and projects. Connect with us through the credentials provided below. 

                </p>
              </div>

              <div className="servicebottommenulinks">
                <ul>
                  <li>
                    {" "}
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <a href="tel:92-51-9272400-4"> +92-51-9272400-4 </a>
                  </li>
                  <li>
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    <a href="mailto:infoawt@awt.com.pk"> infoawt@awt.com.pk </a>
                  </li>
                  <li> <i class="fa fa-map-marker" aria-hidden="true"></i><a>ARMY WELFARE TRUST. AWT Plaza The Mall Rawalpindi</a></li>
                </ul>
              </div>
                </div>

                <div className="col-lg-6">
                  <div className="formbox">
               
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
           

               
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                

             
                

            
                  <input
                    type="text"
                    class="form-control"
                    placeholder="message"
                    aria-label="message"
                    aria-describedby="basic-addon1"
                  />
              

                <button type="submit" class="sendmessage mb-3">Sent Message</button>
                  </div>
                  </div>
            </div>
        </div>
      </section>

      <section className="spaceupdowngray">
        <div className="container-fluid overflow-hidden no-gutters p-0">
  <div className="row">
  <Slider {...settingsllogo }>
    
    <div>
      <div className="trsutimages">    <img src={trust1} className="img-fluid" />  </div>
        
          </div>
          <div>
          <div className="trsutimages">       <img src={trust2} className="img-fluid" /> </div>
          </div>
          <div>
          <div className="trsutimages">       <img src={trust3} className="img-fluid" /> </div>
          </div>
          <div>
          <div className="trsutimages">       <img src={trust4} className="img-fluid" /> </div>
          </div>
          <div>
          <div className="trsutimages">        <img src={trsut6} className="img-fluid" /> </div>
          </div>
          <div>
          <div className="trsutimages">      <img src={trust5} className="img-fluid" /> </div>
          </div>
          <div>
          <div className="trsutimages">         <img src={trust2} className="img-fluid" /> </div>
          </div>
          <div>
          <div className="trsutimages">         <img src={trust1} className="img-fluid" /> </div>
          </div>
          <div>
          <div className="trsutimages">          <img src={trust4} className="img-fluid" /> </div>
          </div>
          <div>
          <div className="trsutimages">        <img src={trust5} className="img-fluid" /> </div>
          </div>
   
          <div>
          <div className="trsutimages">           <img src={trsut6} className="img-fluid" /> </div>
          </div>
          <div>
          <div className="trsutimages">        <img src={trust3} className="img-fluid" /> </div>
          </div>
          <div>
          <div className="trsutimages">         <img src={trust3} className="img-fluid" /> </div>
          </div>
          <div>
          <div className="trsutimages">        <img src={trust4} className="img-fluid" /> </div>
          </div>
          <div>
          <div className="trsutimages">         <img src={trust5} className="img-fluid" /> </div>
          </div>
          <div>
          <div className="trsutimages">      <img src={trust3} className="img-fluid" /> </div>
          </div>
          <div>
          <div className="trsutimages">           <img src={trust2} className="img-fluid" /> </div>
          </div>
          <div>
          <div className="trsutimages">     <img src={trust1} className="img-fluid" /> </div>
          </div>
          <div>
          <div className="trsutimages">      <img src={trust4} className="img-fluid" /> </div>
          </div>
          <div>
          <div className="trsutimages">  <img src={trust5} className="img-fluid" /> </div>
          </div>
        
        </Slider>
    </div>
</div>
    </section>
        </div>
    )
}

export default AskariGuards