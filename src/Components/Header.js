import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import mainlogo from "../assets/logo.png";

import TopMenu from "./TopMenu"

const Header = () => {
    return(

        <div>
            <TopMenu></TopMenu>
            <section className='mainmenu'> 
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-ms-12">
                        <Navbar  expand="lg">
      <Container>
        <Navbar.Brand to="/">         <img src={mainlogo} /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
          <Link to="/"> Home  </Link>
            
            <Link to="/aboutus">  About Us  </Link>
            <Link to="/mdmessage">  MD’s Message </Link>
            <Link to="/bordofdirector">  BOD’s </Link>
            <Link to="/busniessunits">  Business Units </Link>
            <Link to="/news">  News </Link>
            <Link to="/aboutus"> Career </Link>
            <Link to="/aboutus">  Media </Link>

            <Link to="/contactus">  Contact Us </Link>
            
            
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Button variant="outline-success">  <i class="fa fa-search" aria-hidden="true"></i>
</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
</div>
</div>
            </section>
        </div>
    )
}

export default Header