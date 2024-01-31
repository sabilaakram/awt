import { Container, Dropdown, NavDropdown, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

const publicListedMenu = [
  {
    menuLinkTitle: "Askari General Insurance Co Ltd",
    menuLink: "/general-insurance",
  },
  {
    menuLinkTitle: "Askari Life Assurance",
    menuLink: "/life-assurance",
  },
];

const privateLimitedMenu = [
  {
    menuLinkTitle: "Askari Guards",
    menuLink: "/askari-guard",
  },
  {
    menuLinkTitle: "MedAsk",
    menuLink: "/medask",
  },
  {
    menuLinkTitle: "Askari Enterprises",
    menuLink: "/askari-enterprises",
  },
  {
    menuLinkTitle: "Fauji Security Services",
    menuLink: "/faujisecurity",
  },
];

const MegaMenu = () => {
  return (
    <NavDropdown
      className="p-0"
      title={<Link to="/busniessunits">Business Units</Link>}
      id="basic-nav-dropdown"
    >
      <Container className="mega-menu">
        <Row>
          <Col className="text-left">
            <Dropdown.Header>Public Listed Companies</Dropdown.Header>
            {publicListedMenu.map((item, index) => (
              <Dropdown.Item key={index}>
                <FaCaretRight color="gray" />{" "}
                <Link className="nav-link" to={item.menuLink}>
                  {item.menuLinkTitle}
                </Link>
              </Dropdown.Item>
            ))}

            <Dropdown.Divider />
            <Dropdown.Header>Private Limited Companies</Dropdown.Header>
            <Dropdown.Item>
              <FaCaretRight color="gray" />{" "}
              <Link className="nav-link" to="/askariguard">
                Askari Guards
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <FaCaretRight color="gray" />{" "}
              <Link className="nav-link">MedAsk</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <FaCaretRight color="gray" />{" "}
              <Link className="nav-link">Askari Enterprises</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <FaCaretRight color="gray" />{" "}
              <Link className="nav-link" to="/faujisecurity">
                Fauji Security Services
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <FaCaretRight color="gray" />{" "}
              <Link className="nav-link">Askari Aviation</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <FaCaretRight color="gray" />{" "}
              <Link className="nav-link">Askari Development & Holding</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <FaCaretRight color="gray" />{" "}
              <Link className="nav-link">Jolidays</Link>
            </Dropdown.Item>

            <Dropdown.Divider className="d-md-none" />
          </Col>

          <Col className="text-left">
            <Dropdown.Header>Public Unlisted Companies</Dropdown.Header>
            <Dropdown.Item>
              <FaCaretRight color="gray" />{" "}
              <Link className="nav-link">MAL Pakistan Ltd</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <FaCaretRight color="gray" />{" "}
              <Link className="nav-link">AWT investments Ltd</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Other Business Units</Dropdown.Header>
            <Dropdown.Item>
              <FaCaretRight color="gray" />{" "}
              <Link className="nav-link" to="/askerifuel">
                Askari Fuels
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <FaCaretRight color="gray" />{" "}
              <Link className="nav-link" to="/askarirealstate">
                AWT Real Estate
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <FaCaretRight color="gray" />{" "}
              <Link className="nav-link">Askari Shoes</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <FaCaretRight color="gray" />{" "}
              <Link className="nav-link">Askari Woolen Mills</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <FaCaretRight color="gray" />{" "}
              <Link className="nav-link">Askari Travel Wing</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <FaCaretRight color="gray" />{" "}
              <Link className="nav-link">Askari Seeds</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <FaCaretRight color="gray" />{" "}
              <Link className="nav-link">Army Welfare Sugar Mills</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <FaCaretRight color="gray" />{" "}
              <Link className="nav-link">Blue Lagoon & Army Welfare Mess</Link>
            </Dropdown.Item>
          </Col>
        </Row>
      </Container>
    </NavDropdown>
  );
};

export default MegaMenu;
