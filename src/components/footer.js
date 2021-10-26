import { Col, Container, Row } from 'react-bootstrap';
import './footer.css';


function Footer() {
  return (
    <div className="Footer">
      <Container>
        <Row>
          <Col md={4} sm={12}>
            <h4>Contact Us</h4>
            <Row>
              <Col sm={2}>
                p
              </Col>
              <Col sm={10} className="footerBullet">
              +447624 341757
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                e
              </Col>
              <Col sm={10} className="footerBullet">
              <a href="mailto:craig@cdc.org" className="email">craig@cdc.org</a>
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                a
              </Col>
              <Col sm={10} className="footerBullet">
              address
              </Col>
            </Row>
          </Col>
          <Col md={4} sm={12}>
            <h4>Debt Management</h4>
            <Row>
              <Col sm={2}>
                a
              </Col>
              <Col sm={10} className="footerBullet">
                text
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                b
              </Col>
              <Col sm={10} className="footerBullet">
                text
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                c
              </Col>
              <Col sm={10} className="footerBullet">
                text
              </Col>
            </Row>
          </Col>
          <Col md={4} sm={12}>
            <h4>Company Doctor</h4>
            <Row>
              <Col sm={2}>
                d
              </Col>
              <Col sm={10} className="footerBullet">
                text
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                e
              </Col>
              <Col sm={10} className="footerBullet">
                text
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                f
              </Col>
              <Col sm={10} className="footerBullet">
                text
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
