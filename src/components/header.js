import { Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import './header.css';

function Header() {
  return (
    <div className="Header">
      
        <Row>
          <Col md={1} className="logoCol">
          <img src="/images/cdc.png" className="logo" alt="logo"/>
          </Col>
          <Col md={11}>
            <Navbar>
              <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <NavDropdown title="What we do" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/doctor">The Company Doctor</NavDropdown.Item>
                      <NavDropdown.Item href="/debt-management">Debt Management</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/page3">Separated Thing</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/case-studies">Case Studies</Nav.Link>
                    <Nav.Link href="/links">Links</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      
    </div>
  );
}

export default Header;
