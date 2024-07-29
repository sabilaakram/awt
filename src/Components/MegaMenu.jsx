import { Container, NavDropdown, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";
import { useBusinessUnit } from "../data/GetData";
import LoadingSpinner from "./LoadingSpinner";
import { FaChevronDown } from "react-icons/fa6";

const MegaMenu = ({ show, onMouseEnter, onMouseLeave }) => {
  const { data, error, isPending } = useBusinessUnit();

  if (error) return "An error occurred";
  if (isPending) return <LoadingSpinner />;

  const publicListedCompanies = data?.filter((item) => item.company_id === 1);
  const publicUnlistedCompanies = data?.filter((item) => item.company_id === 2);
  const privateLimitedCompanies = data?.filter((item) => item.company_id === 3);
  const otherTrustUnits = data?.filter((item) => item.company_id === 4);

  return (
    <NavDropdown
      id="megamenu"
      // show={show}
      // onMouseEnter={onMouseEnter}
      // onMouseLeave={onMouseLeave}
      className="p-0 d-none d-lg-block"
      title={
        <span className="d-flex align-items-center">
          <Link className="navmenu-link" to="/business-units">
            Business Units
          </Link>
          <FaChevronDown className="text-white" />
        </span>
      }
    >
      <Container className="mega-menu">
        <Row className="justify-content-center">
          <Col className="text-left">
            <NavDropdown.Header>Public Listed Companies</NavDropdown.Header>
            {publicListedCompanies.map((item) => (
              <NavDropdown.Item key={item.id}>
                <FaCaretRight color="gray" />
                <Link
                  onClick={() => onMouseLeave()} // Close the menu when an item is clicked
                  className="nav-link"
                  to={`/business-units/${item.id}`}
                >
                  {item.title}
                </Link>
              </NavDropdown.Item>
            ))}
            <NavDropdown.Divider />
            <NavDropdown.Header>Other Trust Units</NavDropdown.Header>
            {otherTrustUnits.map((item) => (
              <NavDropdown.Item key={item.id}>
                <FaCaretRight color="gray" />
                <Link
                  onClick={() => onMouseLeave()} // Close the menu when an item is clicked
                  className="nav-link"
                  to={`/business-units/${item.id}`}
                >
                  {item.title}
                </Link>
              </NavDropdown.Item>
            ))}
          </Col>
          <Col className="text-left">
            <NavDropdown.Header>Public Unlisted Companies</NavDropdown.Header>
            {publicUnlistedCompanies.map((item) => (
              <NavDropdown.Item key={item.id}>
                <FaCaretRight color="gray" />
                <Link
                  onClick={() => onMouseLeave()} // Close the menu when an item is clicked
                  className="nav-link"
                  to={`/business-units/${item.id}`}
                >
                  {item.title}
                </Link>
              </NavDropdown.Item>
            ))}
            <NavDropdown.Divider />
            <NavDropdown.Header>Private Limited Companies</NavDropdown.Header>
            {privateLimitedCompanies.map((item) => (
              <NavDropdown.Item key={item.id}>
                <FaCaretRight color="gray" />
                <Link
                  onClick={() => onMouseLeave()} // Close the menu when an item is clicked
                  className="nav-link"
                  to={`/business-units/${item.id}`}
                >
                  {item.title}
                </Link>
              </NavDropdown.Item>
            ))}
          </Col>
        </Row>
      </Container>
    </NavDropdown>
  );
};

export default MegaMenu;
