// import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">ProStart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/sports">Sports</Nav.Link>
            <NavDropdown title="Training" id="facilities-nav-dropdown">
            <NavDropdown.Item href="/facilities">Facilites</NavDropdown.Item>
            <NavDropdown.Item href="/calendar">Calendar</NavDropdown.Item>
            <NavDropdown.Item href="/camps">Camps</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Us" id="aboutUs-nav-dropdown">
              <NavDropdown.Item href="/ourstaff">Our Staff</NavDropdown.Item>
              <NavDropdown.Item href="/photos">
                Photos
              </NavDropdown.Item>
              <NavDropdown.Item href="/contactus">
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;