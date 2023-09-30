
import handshaking from "../assets/askerifuel/handshaking.png";
import trust1 from "../assets/contactus/trust1.png";
import trust2 from "../assets/contactus/trust2.png";
import trust3 from "../assets/contactus/trust3.png";
import trust4 from "../assets/contactus/trust4.png";
import trust5 from "../assets/contactus/trsut5.png";
import trsut6 from "../assets/contactus/trust6.png";

import Slider from "react-slick";

const FaujiSecurity = () => {
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
                Fauji Security Services | <span>Pakistan </span>{" "}
                </h1>

                <h5>
                  Home | <span> Fauji Security  </span>{" "}
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
                <span className="leftlineheading"> Fauji Security Services  </span>
                <h2>Pakistan’s Premier Security Providers with a Military Edge</h2>
                <p>
                With 29 years of experience, Fauji Security Services has made its reputable name due to its professionally trained guards and emerged as a trusted security provider. They have recruited retired military officers who are giving their worthwhile contributions. Fauji Security Services has been granted the authorization by Ministry of Interior to train the manpower of private security companies in Pakistan.

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
                <span className="linesheading"> Reliable</span>
                <h2>
                Your Reliable Ally for Protection Services and Security Solutions
                </h2>
                <p>
                Your safety is our commitment and you can count on us for the finest quality security partnership. We continue to impact the lives of many people and strive to make remarkable progress.  
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
                <span class="leftlineheading"> our journey </span>
                <h2>
                How Fauji Security Services Supports AWT
                </h2>
                <p>
                Fauji Security Services is a subsidiary of AWT and benefits it by backing up its main goal of providing support to retired army personnel. By employing these officers, they are not only opening the roads to post-retirement opportunities but also fulfilling the merits of excellence for their respective clients. In addition to this, the revenue generated by them directly assists AWT in its overall welfare initiatives. 
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
                Comprehensive Contributions by Security Services
                </h2>
                <p>
                FSS delivers its promise with its extensive services, ensuring that the lives, assets, and peace of individuals are guarded. 
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
            <h3>Guarding Services</h3>
            <p>
            Our highly trained security personnel are well-equipped to defend our client’s life and property 24/7 in every sensitive situation.
            </p>
          </div>
        </div>

        <div className="col-lg-4">
        <div class="card">
            <div class="icon-wrapper">
            <i class="fa fa-gg" aria-hidden="true"></i>

            </div>
            <h3>Consultancy and Training</h3>
            <p>
            Permitted by the Ministry of Interior, FSS provides training to Pakistan’s private security companies. 
            </p>
          </div>
        </div>

        <div className="col-lg-4">
        <div class="card">
            <div class="icon-wrapper">
            <i class="fa fa-object-ungroup" aria-hidden="true"></i>

            </div>
            <h3>Cash-in-Transit Services:</h3>
            <p>
            Our safe, effective, and budget-friendly cash-in-transit services are offered to companies, financial organizations, and people all around Pakistan. 

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

export default FaujiSecurity