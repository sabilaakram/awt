import bod from "../assets/Bod/admin.png";
import trust1 from "../assets/contactus/trust1.png";
import trust2 from "../assets/contactus/trust2.png";
import trust3 from "../assets/contactus/trust3.png";
import trust4 from "../assets/contactus/trust4.png";
import trust5 from "../assets/contactus/trsut5.png";
import trsut6 from "../assets/contactus/trust6.png";
import Slider from "react-slick";
const BOD = () => {
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
      <section className="commonbg">
        <div className="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
                  {" "}
                  Board of <span>Directors </span>{" "}
                </h1>

                <h5>
                  Home | <span> BOD’s </span>{" "}
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
                <span className="linesheading"> AWT</span>
                <h2> Committee of Administration</h2>
                <p>
                  The Army Welfare Trust's administration is based on two tiers
                  of decision making
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row spacepadding ">
            <div className="col-lg-3">
              <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4 sub-b">
                    {" "}
                    <img src={bod} className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3> Chairman</h3>
                <p>Chief of Army Staff</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4 sub-b">
                    {" "}
                    <img src={bod} className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3> Vice Chairman
</h3>
                <p>Adjutant General	</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4 sub-b">
                    {" "}
                    <img src={bod} className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3> Member</h3>
                <p>Chief of General Staff	</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4 sub-b">
                    {" "}
                    <img src={bod} className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3> Member
</h3>
                <p>Quarter Master General	</p>
              </div>
            </div>
          </div>

          <div class="row justify-content-md-center">
    <div class="col col-lg-3">
    <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4 sub-b">
                    {" "}
                    <img src={bod} className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3> Member</h3>
                <p>Chief of Logistics Staff	</p>
              </div>
    </div>
    <div class="col-md-3 ">
    <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4 sub-b">
                    {" "}
                    <img src={bod} className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3> In attendance
</h3>
                <p>Managing Director, AWT</p>
              </div>
    </div>
    <div class="col col-lg-3">
    <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4 sub-b">
                    {" "}
                    <img src={bod} className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3> Secretary
</h3>
                <p>Secretary AWT	</p>
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
                <span className="linesheading"> AWT</span>
                <h2> Board of Directors</h2>
                <p>
                  The Army Welfare Trust's administration is based on two tiers
                  of decision making
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container">
          <div className="row spacepadding ">
            <div className="col-lg-3">
              <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4 sub-b">
                    {" "}
                    <img src={bod} className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3> Chairman</h3>
                <p>Lt Gen Muhammad Asim Malik, HI(M)
Adjutant General, Pakistan Army</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4 sub-b">
                    {" "}
                    <img src={bod} className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3> Vice Chairman & MD

</h3>
                <p>Lt Gen Naveed Mukhtar, HI(M) (Retd)
Managing Director AWT	</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4 sub-b">
                    {" "}
                    <img src={bod} className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3> Member</h3>
                <p>Maj. Gen Azhar Iqbal Abbasi, HI(M)
Director General Welfare & Rehabilitation	</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4 sub-b">
                    {" "}
                    <img src={bod} className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3> Member
</h3>
                <p>Rizwan ullah Khan (COO)
Director	</p>
              </div>
            </div>
          </div>


          <div className="row spacepadding ">
            <div className="col-lg-3">
              <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4 sub-b">
                    {" "}
                    <img src={bod} className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3> Member</h3>
                <p>Air Vice Marshal Muhammad Athar Shams, HI(M) (Retd), ED (A&F)
Director

</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4 sub-b">
                    {" "}
                    <img src={bod} className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3> Member

</h3>
                <p>Maj. Gen Muhammad Imtiaz Khan, HI(M) (Retd), ED(Medask)
Director	</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4 sub-b">
                    {" "}
                    <img src={bod} className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3> Member</h3>
                <p>Maj Gen Fida Hussain Malik, HI(M) (Retd), ED(IF&T)
Director	</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4 sub-b">
                    {" "}
                    <img src={bod} className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3> Member
</h3>
                <p>Maj Gen Muhammad Samrez Salik, HI(M) (Retd), ED(S)
Director	</p>
              </div>
            </div>
          </div>


          <div className="row spacepadding ">
            <div className="col-lg-3">
              <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4 sub-b">
                    {" "}
                    <img src={bod} className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3> Member</h3>
                <p>Brig. Farooq Zaman (Retd), DIR (HR) Director




</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4 sub-b">
                    {" "}
                    <img src={bod} className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3> Member

</h3>
                <p>Malik Riffat Mahmood

Director	</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4 sub-b">
                    {" "}
                    <img src={bod} className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3> Member</h3>
                <p>Brig Musharaf khan, (Retd) SI(M)

Director	</p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="fourimgsbox">
                <div class="block">
                  <div class="hovicon effect-4 sub-b">
                    {" "}
                    <img src={bod} className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="adminbox">
                <h3> Member
</h3>
                <p>Brig Mukhtar Ahmed, (Retd) SI(M)

                Secretary AWT

</p>
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

export default BOD;
