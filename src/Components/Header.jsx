import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import mainlogo from "../assets/logo.png";
import MegaMenu from "./MegaMenu";
import { FaBars } from "react-icons/fa6";
import { useBusinessUnit } from "../data/GetData";
import LoadingSpinner from "./LoadingSpinner";
import { Dropdown } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      {/* <TopMenu /> */}
      <section className="mainmenu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-ms-12">
              <Navbar expand="lg" className="justify-content-center">
                <Container className="px-0 mx-0">
                  <Navbar.Brand to="/">
                    <img src={mainlogo} alt="AWT" />{" "}
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
                      <MegaMenu />
                      <MobileMenu />
                      <Link className="navmenu-link" to="/mdmessage">
                        MD’s Message
                      </Link>
                      <Link className="navmenu-link" to="/boardofdirector">
                        BOD’s
                      </Link>
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
                    {/* <Button variant="outline-success">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </Button> */}
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
  const { data, error, isPending } = useBusinessUnit();
  if (error) return "An error occured";
  if (isPending) return <LoadingSpinner />;

  return (
    <Dropdown className="d-block d-lg-none">
      <Dropdown.Toggle className="border-0 bg-transparent text-white m-0">
        Business Units
      </Dropdown.Toggle>

      <Dropdown.Menu className="bg-transparent border-0 p-0 my-0">
        {data.map((item, index) => (
          <div className="my-2" key={index}>
            <Dropdown.Item
              href={`/business-units/${item.id}`}
              className="text-white"
            >
              {item.title}
            </Dropdown.Item>
          </div>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Header;
