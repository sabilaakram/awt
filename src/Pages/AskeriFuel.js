import handshaking from "../assets/askerifuel/handshaking.png";
import trust1 from "../assets/contactus/trust1.png";
import trust2 from "../assets/contactus/trust2.png";
import trust3 from "../assets/contactus/trust3.png";
import trust4 from "../assets/contactus/trust4.png";
import trust5 from "../assets/contactus/trsut5.png";
import trsut6 from "../assets/contactus/trust6.png";
import Slider from "react-slick";
const AskeriFuel = () => {

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
  return (
    <div>
      <section className="feulaskeri">
        <div className="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
                Askari Fuels| <span>Pakistan </span>{" "}
                </h1>

                <h5>
                  Home | <span> Askari Fuels </span>{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="spaceupdown">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="ourmission">
                <span className="leftlineheading"> Askari Fuels </span>
                <h2>Fuel Performance and Efficiency with Askari Fuels</h2>
                <p>
                Askari Fuels stands out in the petroleum market due to its competence, quality-driven, and customer-oriented approach. We have gained the trust of the private and public institutions. 
Since the inception of Askari CNG and its nationwide stations, Askari Fuels has been developing and diversifying. Askari Fuels is rendering top-graded lubricants and has added Multifuels by integrating Petrol (PMG) and Diesel (HSD) to its existing CNG sites. 

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
                Your Reliable Partner for Trustworthy Energy Solutions
                </h2>
                <p>
                With a track record of excellence, Askari Fuels delivers energy solutions that are effective in empowering a sustainable future. 
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
                How Askari Fuels Supports AWT
                </h2>
                <p>
                As a subsidiary of the Army Welfare Trust, Askari Fuels is a chief company in the Petroleum sector due to its high-class standards. It supports the mission of AWT by earning massive revenue that is utilized for the welfare of retired soldiers and martyrs' families. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="spaceupdown">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="aboutus">
                <span className="linesheading"> Our services</span>
                <h2>
                Discover the Diverse Fuel Choices
                </h2>
                <p>
                Our varied options at Askari Fuels will cater to your unique energy needs. Get the right fuel solutions for your vehicles and machinery.
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
            <h3>CNG 

</h3>
            <p>
            Initiated in 2002, Askari CNG’s first station became functional in 2003. Currently, it has 35 stations operating in different areas of Pakistan.
            </p>
          </div>
        </div>

        <div className="col-lg-4">
        <div class="card">
            <div class="icon-wrapper">
            <i class="fa fa-gg" aria-hidden="true"></i>

            </div>
            <h3>Multi Fuel


</h3>
            <p>
            As a rapidly growing multi-fuel supplier, Askari Fuels provides the finest petroleum products to its consumers. 

            </p>
          </div>
        </div>

        <div className="col-lg-4">
        <div class="card">
            <div class="icon-wrapper">
            <i class="fa fa-object-ungroup" aria-hidden="true"></i>

            </div>
            <h3>Lubricant


</h3>
            <p>
            With the changing demands of the market, Askari Fuels has adapted to the customer needs, offering automotive and industrial lubricants.


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
  );
};

export default AskeriFuel;
