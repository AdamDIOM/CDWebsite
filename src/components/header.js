import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './header.css';

function Header() {
  return (
    <div className="Header">
      <Navbar>
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="What we do" id="basic-nav-dropdown">
                <NavDropdown.Item href="/page1">Something</NavDropdown.Item>
                <NavDropdown.Item href="/page2">Something Else</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/page3">Separated Thing</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
