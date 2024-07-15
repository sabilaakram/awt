import { Container, Dropdown, NavDropdown, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";
import { useState } from "react";
import { useBusinessUnit } from "../data/GetData";
import LoadingSpinner from "./LoadingSpinner";
import { FaChevronDown } from "react-icons/fa6";

const MegaMenu = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { data, error, isPending } = useBusinessUnit();
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };
  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const publicListedCompanies = data?.filter((item) => item.company_id === 1);
  const publicUnlistedCompanies = data?.filter((item) => item.company_id === 2);
  const privateLimitedCompanies = data?.filter((item) => item.company_id === 3);
  const otherTrustUnits = data?.filter((item) => item.company_id === 4);

  if (error) return "An error occured";
  if (isPending) return <LoadingSpinner />;

  return (
    <NavDropdown
      className="p-0 d-none d-lg-block"
      title={
        <span className="d-flex align-items-center">
          <Link className="navmenu-link" to="/business-units">
            Business Units
          </Link>
          <FaChevronDown className="text-white" />
        </span>
      }
      show={showDropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Container className="mega-menu">
        <Row className="justify-content-center">
          <Col className="text-left">
            <Dropdown.Header>Public Listed Companies</Dropdown.Header>
            {publicListedCompanies.map((item) => (
              <Dropdown.Item key={item.id}>
                <FaCaretRight color="gray" />
                <Link
                  onClick={() => setShowDropdown(false)}
                  className="nav-link"
                  to={`/business-units/${item.id}`}
                >
                  {item.title}
                </Link>
              </Dropdown.Item>
            ))}{" "}
            <Dropdown.Divider />
            <Dropdown.Header>Other Trust Units</Dropdown.Header>
            {otherTrustUnits.map((item) => (
              <Dropdown.Item key={item.id}>
                <FaCaretRight color="gray" />
                <Link
                  onClick={() => setShowDropdown(false)}
                  className="nav-link"
                  to={`/business-units/${item.id}`}
                >
                  {item.title}
                </Link>
              </Dropdown.Item>
            ))}
          </Col>
          <Col className="text-left">
            {" "}
            <Dropdown.Header>Public Unlisted Companies</Dropdown.Header>
            {publicUnlistedCompanies.map((item) => (
              <Dropdown.Item key={item.id}>
                <FaCaretRight color="gray" />
                <Link
                  onClick={() => setShowDropdown(false)}
                  className="nav-link"
                  to={`/business-units/${item.id}`}
                >
                  {item.title}
                </Link>
              </Dropdown.Item>
            ))}{" "}
            <Dropdown.Divider />
            <Dropdown.Header>Private Limited Companies</Dropdown.Header>
            {privateLimitedCompanies.map((item) => (
              <Dropdown.Item key={item.id}>
                <FaCaretRight color="gray" />
                <Link
                  onClick={() => setShowDropdown(false)}
                  className="nav-link"
                  to={`/business-units/${item.id}`}
                >
                  {item.title}
                </Link>
              </Dropdown.Item>
            ))}{" "}
          </Col>
        </Row>
      </Container>
    </NavDropdown>
  );
};

export default MegaMenu;
