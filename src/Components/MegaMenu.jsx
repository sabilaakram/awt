import { Container, Dropdown, NavDropdown, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";
import { useState } from "react";

const publicListedMenu = [
  {
    menuLinkTitle: "Askari General Insurance Co Ltd",
    menuLink: "askari-guards",
  },
  {
    menuLinkTitle: "Askari Life Assurance",
    menuLink: "askari-guards",
  },
];

const privateLimitedMenu = [
  {
    menuLinkTitle: "Askari Guards",
    menuLink: "askari-guards",
  },
  {
    menuLinkTitle: "MedAsk",
    menuLink: "askari-guards",
  },
  {
    menuLinkTitle: "Askari Enterprises",
    menuLink: "askari-guards",
  },
  {
    menuLinkTitle: "Fauji Security Services",
    menuLink: "askari-guards",
  },
  {
    menuLinkTitle: "Askari Aviation",
    menuLink: "askari-guards",
  },
  {
    menuLinkTitle: "Askari Development & Holding",
    menuLink: "askari-guards",
  },
  {
    menuLinkTitle: "Jolidays",
    menuLink: "askari-guards",
  },
];

const publicUnlistedCompaniesMenu = [
  {
    menuLinkTitle: "MAL Pakistan Ltd",
    menuLink: "askari-guards",
  },
  {
    menuLinkTitle: "AWT investments Ltd",
    menuLink: "askari-guards",
  },
];

const otherBusinessUnitsMenu = [
  {
    menuLinkTitle: "Askari Fuels",
    menuLink: "askari-guards",
  },
  {
    menuLinkTitle: "AWT Real Estate",
    menuLink: "askari-guards",
  },
  {
    menuLinkTitle: "Askari Shoes",
    menuLink: "askari-guards",
  },
  {
    menuLinkTitle: "Askari Woolen Mills",
    menuLink: "askari-guards",
  },
  {
    menuLinkTitle: "Askari Travel Wing",
    menuLink: "askari-guards",
  },
  {
    menuLinkTitle: "Askari Seeds",
    menuLink: "askari-guards",
  },
  {
    menuLinkTitle: "Army Welfare Sugar Mills",
    menuLink: "askari-guards",
  },
  {
    menuLinkTitle: "Blue Lagoon & Army Welfare Mess",
    menuLink: "askari-guards",
  },
];

const MegaMenu = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <NavDropdown
      className="p-0"
      title={<Link to="/business-units">Business Units</Link>}
      id="basic-nav-dropdown"
      show={showDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Container className="mega-menu">
        <Row>
          <Col className="text-left">
            <Dropdown.Header>Public Listed Companies</Dropdown.Header>
            {publicListedMenu.map((item, index) => (
              <Dropdown.Item key={index}>
                <FaCaretRight color="gray" />{" "}
                <Link className="nav-link" to={`/${item.menuLink}`}>
                  {item.menuLinkTitle}
                </Link>
              </Dropdown.Item>
            ))}
            <Dropdown.Divider />

            <Dropdown.Header>Private Limited Companies</Dropdown.Header>
            {privateLimitedMenu.map((item, index) => (
              <Dropdown.Item key={index}>
                <FaCaretRight color="gray" />{" "}
                <Link className="nav-link" to={`/${item.menuLink}`}>
                  {item.menuLinkTitle}
                </Link>
              </Dropdown.Item>
            ))}
            <Dropdown.Divider className="d-md-none" />
          </Col>

          <Col className="text-left">
            <Dropdown.Header>Public Unlisted Companies</Dropdown.Header>
            {publicUnlistedCompaniesMenu.map((item, index) => (
              <Dropdown.Item key={index}>
                <FaCaretRight color="gray" />
                <Link className="nav-link" to={`/${item.menuLink}`}>
                  {item.menuLinkTitle}
                </Link>
              </Dropdown.Item>
            ))}
            <Dropdown.Divider />

            <Dropdown.Header>Other Business Units</Dropdown.Header>
            {otherBusinessUnitsMenu.map((item, index) => (
              <Dropdown.Item key={index}>
                <FaCaretRight color="gray" />
                <Link className="nav-link" to={`/${item.menuLink}`}>
                  {item.menuLinkTitle}
                </Link>
              </Dropdown.Item>
            ))}
          </Col>
        </Row>
      </Container>
    </NavDropdown>
  );
};

export default MegaMenu;
