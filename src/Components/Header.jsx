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
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleMegaMenuMouseEnter = () => {
    setShowMegaMenu(true);
  };

  const handleMegaMenuMouseLeave = () => {
    setShowMegaMenu(false);
  };

  //Close nav when link is clicked
  const handleNavCollapse = () => setIsNavCollapsed((prevState) => !prevState);
  const closeNav = () => {
    setIsNavCollapsed(true);
    setShowMegaMenu(false);
    // setShowBodsMenu(false);
  };
  return (
    <div>
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
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav border-white"
                    onClick={handleNavCollapse}
                  >
                    <FaBars className="text-white" />
                  </Navbar.Toggle>
                  <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-end"
                    in={!isNavCollapsed}
                  >
                    <Nav className="position-relative gap-3 gap-lg-0">
                      <Link className="navmenu-link" to="/" onClick={closeNav}>
                        Home
                      </Link>
                      <Link
                        className="navmenu-link"
                        to="/aboutus"
                        onClick={closeNav}
                      >
                        About Us
                      </Link>
                      <MegaMenu
                        show={showMegaMenu}
                        onMouseEnter={handleMegaMenuMouseEnter}
                        onMouseLeave={handleMegaMenuMouseLeave}
                      />
                      <MobileMenu closeNav={closeNav} />
                      <Link
                        className="navmenu-link"
                        to="/mdmessage"
                        onClick={closeNav}
                      >
                        MD’s Message
                      </Link>

                      <BodDropdownMenu closeNav={closeNav} />

                      <Link
                        className="navmenu-link"
                        to="/news"
                        onClick={closeNav}
                      >
                        News
                      </Link>
                      <Link
                        className="navmenu-link"
                        to="/careers"
                        onClick={closeNav}
                      >
                        Careers
                      </Link>
                      <Link
                        className="navmenu-link"
                        to="/media"
                        onClick={closeNav}
                      >
                        Media
                      </Link>
                      <Link
                        className="navmenu-link"
                        to="/contactus"
                        onClick={closeNav}
                      >
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

const MobileMenu = ({ closeNav }) => {
  const { data, error, isPending } = BusinessUnitsData();
  if (error) return "An error occurred";
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
              onClick={closeNav}
            >
              {item.Title}
            </Dropdown.Item>
          </div>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const BodDropdownMenu = ({ closeNav }) => {
  const [showBodsMenu, setShowBodsMenu] = useState(false);

  const handleBodsMenuMouseEnter = () => {
    setShowBodsMenu(true);
  };

  const handleBodsMenuMouseLeave = () => {
    setShowBodsMenu(false);
  };

  const handleItemClick = (e) => {
    closeNav();
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
        <NavDropdown.Item
          href="/boardofdirector"
          className="nav-link"
          onClick={handleItemClick}
        >
          Board of Director
        </NavDropdown.Item>

        <NavDropdown.Item
          href="/committeeofadministration"
          className="nav-link"
          onClick={handleItemClick}
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
              onClick={handleItemClick}
            >
              Committee of Administration
            </Dropdown.Item>
          </div>
          <div className="my-2">
            <Dropdown.Item
              href="/boardofdirector"
              className="text-white justify-content-center"
              onClick={handleItemClick}
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
