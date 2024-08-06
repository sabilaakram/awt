import { Link } from "react-router-dom";
import footerlogo from "../assets/footerlogonew.png";

const FooterItems = [
  { label: "About Us", href: "/aboutus" },
  { label: "MD's message", href: "/mdmessage" },
  { label: "BODs", href: "/boardofdirector" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/Careers" },
  { label: "Media", href: "/media" },
  { label: "Contact Us", href: "/contactus" },
];

const Footer = () => {
  return (
    <div>
      <section id="footerbox">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-4 col-xl-3">
              <div className="footer-logo">
                <Link to="/">
                  <img src={footerlogo} className="img-fluid" alt="" />
                </Link>
                <p>
                  With 53 years of dedicated investments in the industries, the
                  Army Welfare Trust generates maximum funds for soldiers’
                  well-being and contributes to Pakistan’s economic growth.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-xl-3">
              <div className="getintouch">
                <h3>Get in Touch</h3>
                <ul>
                  <li>
                    {" "}
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <button className="link-button footer-link-button">
                      ARMY WELFARE TRUST. AWT Plaza The Mall Rawalpindi
                    </button>
                  </li>
                  <li>
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    <a href="mailto:infoawt@awt.com.pk">infoawt@awt.com.pk</a>
                  </li>
                  <li>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <a href="tel:92-51-9272400-4">92-51-9272400-4</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-xl-3 align-self-end">
              <div className="getintouch">
                <h3>Our Links</h3>
                <ul>
                  {FooterItems.map((item, index) => (
                    <li className="w-100" key={index}>
                      <Link className="mx-0 text-capitalize" to={item.href}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-xl-3">
              <div className="footerform">
                <h3 className="text-white">Join Our Newsletter</h3>
                <form onClick={(e) => e.preventDefault()}>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Your Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Your Email"
                    />
                  </div>

                  <button className="subscribebtns">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center ">
              <div className="bottomlinee">
                <p>All Rights Reserved By CXS-2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
