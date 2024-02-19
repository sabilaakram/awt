import { Container, Dropdown, NavDropdown, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";
import { useState } from "react";

const publicListedMenu = [
  {
    menuLinkTitle: "Askari General Insurance Co Ltd",
    menuLink: "general-insurance",
  },
  {
    menuLinkTitle: "Askari Life Assurance",
    menuLink: "life-assurance",
  },
];

const privateLimitedMenu = [
  {
    menuLinkTitle: "Askari Guards",
    menuLink: "askari-guards",
  },
  {
    menuLinkTitle: "MedAsk",
    menuLink: "medask",
  },
  {
    menuLinkTitle: "Askari Enterprises",
    menuLink: "askari-enterprises",
  },
  {
    menuLinkTitle: "Fauji Security Services",
    menuLink: "fauji-security",
  },
  {
    menuLinkTitle: "Askari Aviation",
    menuLink: "askari-aviation",
  },
  {
    menuLinkTitle: "Askari Development & Holding",
    menuLink: "askari-developement-and-holding",
  },
  {
    menuLinkTitle: "Jolidays",
    menuLink: "jolidays",
  },
];

const publicUnlistedCompaniesMenu = [
  {
    menuLinkTitle: "MAL Pakistan Ltd",
    menuLink: "mal-pakistan-ltd",
  },
  {
    menuLinkTitle: "AWT investments Ltd",
    menuLink: "awt-investments-ltd",
  },
];

const otherBusinessUnitsMenu = [
  {
    menuLinkTitle: "Askari Fuels",
    menuLink: "askari-fuel",
  },
  {
    menuLinkTitle: "AWT Real Estate",
    menuLink: "askari-realestate",
  },
  {
    menuLinkTitle: "Askari Shoes",
    menuLink: "askari-shoes",
  },
  {
    menuLinkTitle: "Askari Woolen Mills",
    menuLink: "askari-woolen-mills",
  },
  {
    menuLinkTitle: "Askari Travel Wing",
    menuLink: "askari-travel-wing",
  },
  {
    menuLinkTitle: "Askari Seeds",
    menuLink: "askari-seeds",
  },
  {
    menuLinkTitle: "Army Welfare Sugar Mills",
    menuLink: "army-welfare-sugar-mills",
  },
  {
    menuLinkTitle: "Blue Lagoon & Army Welfare Mess",
    menuLink: "blue-lagoon-and-army-welfare-mess",
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
                <Link
                  className="nav-link"
                  to={`business-unit/${item.menuLink}`}
                >
                  {item.menuLinkTitle}
                </Link>
              </Dropdown.Item>
            ))}
            <Dropdown.Divider />

            <Dropdown.Header>Private Limited Companies</Dropdown.Header>
            {privateLimitedMenu.map((item, index) => (
              <Dropdown.Item key={index}>
                <FaCaretRight color="gray" />{" "}
                <Link
                  className="nav-link"
                  to={`business-unit/${item.menuLink}`}
                >
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
                <Link
                  className="nav-link"
                  to={`business-unit/${item.menuLink}`}
                >
                  {item.menuLinkTitle}
                </Link>
              </Dropdown.Item>
            ))}
            <Dropdown.Divider />

            <Dropdown.Header>Other Business Units</Dropdown.Header>
            {otherBusinessUnitsMenu.map((item, index) => (
              <Dropdown.Item key={index}>
                <FaCaretRight color="gray" />
                <Link
                  className="nav-link"
                  to={`business-unit/${item.menuLink}`}
                >
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
