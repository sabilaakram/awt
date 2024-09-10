import { Link } from "react-router-dom";
import footerlogo from "../assets/footerlogonew.png";
import { Col, Row } from "react-bootstrap";
import { BusinessUnitsData } from "../data/GetData";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import LoadingSpinner from "./LoadingSpinner";

const FooterItems = [
  { label: "About Us", href: "/aboutus" },
  { label: "MD's message", href: "/mdmessage" },
  { label: "Board of Directors", href: "/boardofdirector" },
  { label: "Committee of Administration", href: "/committeeofadministration" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/Careers" },
  { label: "Media", href: "/media" },
  { label: "Contact Us", href: "/contactus" },
];

const contactItems = [
  {
    value: "92-51-9272400-4",
    icon: <FaPhone size={24} />,
    href: "tel:925192724004",
  },
  {
    value: "infoawt@awt.com.pk",
    icon: <MdEmail size={24} />,
    href: "mailto:infoawt@awt.com.pk",
  },
  {
    value: "AWT Plaza The Mall Rawalpindi",
    icon: <FaLocationDot size={24} />,
    href: "https://maps.app.goo.gl/suqDQye9BsNQrVJRA",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="m-0">
        <Col className="footer__logo_container" lg={4}>
          <img src={footerlogo} alt="" />

          <p className="footer-text text-white">
            With 53 years of dedicated investments in the industries, the Army
            Welfare Trust generates maximum funds for soldiers&apos; well-being
            and contributes to Pakistan&apos;s economic growth.
          </p>

          <div className="mt-5">
            <h3 className="footer-link-title">Contact Us</h3>

            <ul className="footer__contact-links mt-3">
              {contactItems.map((item, index) => (
                <li key={index}>
                  {item.icon}
                  {item.href ? (
                    <a href={item.href}>{item.value}</a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Col>

        <Col lg={8} className="footer__link_container">
          <div className="z-2 mb-5 position-relative">
            <h3 className="footer-link-title">Our Units</h3>

            <BusinessUnitsLinks />
          </div>

          <div className="z-2 position-relative">
            <h3 className="footer-link-title">Quick Links</h3>

            <ul className="footer__links">
              {FooterItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>

      <p className="footer-copyright p-3 m-0 text-center">
        Copyrights © 2024 Army Welfare Trust, All Rights Reserved.
      </p>
    </footer>
  );
};

const BusinessUnitsLinks = () => {
  const { data, error, isPending } = BusinessUnitsData();

  if (error) return "An error occured fetching data...";

  if (isPending) return <LoadingSpinner />;
  const publicListedItems = data.filter(
    (item) => item.WelfareUnit === "Public Listed Company"
  );
  const publicUnListedItems = data.filter(
    (item) => item.WelfareUnit === "Public Unlisted Company"
  );
  const privateLimitedItems = data.filter(
    (item) => item.WelfareUnit === "Private Limited Company"
  );
  const otherUnitItems = data.filter(
    (item) => item.WelfareUnit === "Other Trust Unit"
  );
  return (
    <div className="d-grid gap-4 w-100 footer footer__links">
      <div className="business_unit">
        <h4>Public Listed Units</h4>

        <ul>
          {publicListedItems.map((unit) => (
            <li key={unit.id}>
              <Link to={`/business-units/${unit.slug}`}>{unit.Title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="business_unit">
        <h4>Public Unlisted Units</h4>

        <ul>
          {publicUnListedItems.map((unit) => (
            <li key={unit.id}>
              <Link to={`/business-units/${unit.slug}`}>{unit.Title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="business_unit">
        <h4>Private Limited Units</h4>

        <ul>
          {privateLimitedItems.map((unit) => (
            <li key={unit.id}>
              <Link to={`/business-units/${unit.slug}`}>{unit.Title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="business_unit">
        <h4>Other Units</h4>

        <ul>
          {otherUnitItems.map((unit) => (
            <li key={unit.id}>
              <Link to={`/business-units/${unit.slug}`}>{unit.Title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
