import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import mainlogo from "../assets/footerlogonew.png";
import MegaMenu from "./MegaMenu";
import { FaBars, FaChevronDown } from "react-icons/fa6";
import { BusinessUnitsData } from "../data/GetData";
import LoadingSpinner from "./LoadingSpinner";
import { Dropdown, NavDropdown } from "react-bootstrap";
import { useState } from "react";

const Header = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const handleMegaMenuMouseEnter = () => {
    setShowMegaMenu(true);
  };

  const handleMegaMenuMouseLeave = () => {
    setShowMegaMenu(false);
  };

  return (
    <div>
      {/* <TopMenu /> */}
      <section className="mainmenu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-ms-12">
              <Navbar expand="lg" className="justify-content-center">
                <Container className="px-0 mx-0">
                  <Navbar.Brand>
                    <Link to="/">
                      <img
                        src={mainlogo}
                        alt="AWT"
                        style={{
                          maxWidth: "80px",
                        }}
                      />
                    </Link>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav border-white">
                    <FaBars className="text-white" />
                  </Navbar.Toggle>
                  <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-end"
                  >
                    <Nav className="position-relative gap-3 gap-lg-0">
                      <Link className="navmenu-link" to="/">
                        Home
                      </Link>
                      <Link className="navmenu-link" to="/aboutus">
                        About Us
                      </Link>
                      <MegaMenu
                        show={showMegaMenu}
                        onMouseEnter={handleMegaMenuMouseEnter}
                        onMouseLeave={handleMegaMenuMouseLeave}
                      />
                      <MobileMenu />
                      <Link className="navmenu-link" to="/mdmessage">
                        MD’s Message
                      </Link>

                      <BodDropdownMenu />

                      <Link className="navmenu-link" to="/news">
                        News
                      </Link>
                      <Link className="navmenu-link" to="/careers">
                        Careers
                      </Link>
                      <Link className="navmenu-link" to="/media">
                        Media
                      </Link>
                      <Link className="navmenu-link" to="/contactus">
                        Contact Us
                      </Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const MobileMenu = () => {
  const { data, error, isPending } = BusinessUnitsData();
  if (error) return "An error occured";
  if (isPending) return <LoadingSpinner />;

  return (
    <Dropdown className="d-block d-lg-none p-0">
      <Dropdown.Toggle className="border-0 bg-transparent text-white m-0 mx-auto d-flex align-items-center gap-3">
        Business Units <FaChevronDown className="text-white" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="bg-transparent border-0 p-2 my-0">
        {data.map((item) => (
          <div className="my-2" key={item.id}>
            <Dropdown.Item
              href={`/business-units/${item.slug}`}
              className="text-white justify-content-center"
            >
              {item.Title}
            </Dropdown.Item>
          </div>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const BodDropdownMenu = () => {
  const [showBodsMenu, setShowBodsMenu] = useState(false);

  const handleBodsMenuMouseEnter = () => {
    setShowBodsMenu(true);
  };

  const handleBodsMenuMouseLeave = () => {
    setShowBodsMenu(false);
  };
  return (
    <>
      <NavDropdown
        id="bod-dropdown"
        show={showBodsMenu}
        onMouseEnter={handleBodsMenuMouseEnter}
        onMouseLeave={handleBodsMenuMouseLeave}
        className="bod-menu d-none d-lg-block"
        title={
          <span className="d-flex align-items-center gap-3">
            BODs
            <FaChevronDown className="text-white" />
          </span>
        }
      >
        <NavDropdown.Item href="/boardofdirector" className="nav-link">
          Board of Director
        </NavDropdown.Item>

        <NavDropdown.Item
          href="/committeeofadministration"
          className="nav-link"
        >
          Committee of Administration
        </NavDropdown.Item>
      </NavDropdown>

      <Dropdown className="d-block d-lg-none p-0">
        <Dropdown.Toggle className="border-0 bg-transparent text-white m-0 mx-auto d-flex align-items-center gap-3">
          BODs <FaChevronDown className="text-white" />
        </Dropdown.Toggle>

        <Dropdown.Menu className="bg-transparent border-0 p-2 my-0">
          <div className="my-2">
            <Dropdown.Item
              href="/committeeofadministration"
              className="text-white justify-content-center"
            >
              Committee of Administration
            </Dropdown.Item>
          </div>
          <div className="my-2">
            <Dropdown.Item
              href="/boardofdirector"
              className="text-white justify-content-center"
            >
              Board of Director
            </Dropdown.Item>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default Header;
