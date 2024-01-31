import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import mainlogo from "../assets/logo.png";

import TopMenu from "./TopMenu";
import MegaMenu from "./MegaMenu";

const Header = () => {
  return (
    <div>
      <TopMenu />
      <section className="mainmenu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-ms-12">
              <Navbar expand="lg">
                <Container>
                  <Navbar.Brand to="/">
                    {" "}
                    <img src={mainlogo} alt="AWT" />{" "}
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                      <Link to="/">Home</Link>

                      <Link to="/aboutus">About Us</Link>

                      <MegaMenu />

                      <Link to="/mdmessage">MD’s Message</Link>
                      <Link to="/bordofdirector">BOD’s</Link>

                      <Link to="/news">News</Link>
                      <Link to="/careers">Careers</Link>
                      <Link to="/media">Media</Link>

                      <Link to="/contactus">Contact Us</Link>
                    </Nav>
                    <Button variant="outline-success">
                      {" "}
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </Button>
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

export default Header;
