import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  // Show button when scroll is beyond 200px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center footer_box">
                <h5>Location</h5>
                <p>5505 Waterford District</p>
                <p>Dr, Miami, FL 33126</p>
                <p>United States</p>
              </div>
            </Col>

            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center footer_box">
                <h5>Working Hours</h5>
                <p>Mon-Fri: 9:00AM - 10:00PM</p>
                <p>Saturday: 10:00AM - 8:30PM</p>
                <p>Sunday: 12:00PM - 5:00PM</p>
              </div>
            </Col>

            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center footer_box">
                <h5>Order Now</h5>
                <p>Quaerat neque purus ipsum</p>
                <p>
                  <Link to="tel:999-888-7777" className="calling">
                    999-888-7777
                  </Link>
                </p>
              </div>
            </Col>

            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center footer_box">
                <h5>Follow Us</h5>
                <p>Quaerat neque purus ipsum</p>
                <ul className="list-unstyled social_links text-center mt-3">
                  <li>
                    <Link to="/"><i className="bi bi-facebook"></i></Link>
                  </li>
                  <li>
                    <Link to="/"><i className="bi bi-twitter"></i></Link>
                  </li>
                  <li>
                    <Link to="/"><i className="bi bi-instagram"></i></Link>
                  </li>
                  <li>
                    <Link to="/"><i className="bi bi-youtube"></i></Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row className="copy_right mt-4">
            <Col>
              <div>
                <ul className="list-unstyled text-center mb-0">
                  <li>
                    © 2023 <span>Sadia Frontend Developer</span>. All Rights Reserved
                  </li>
                  <li className="footer_links">
                    <Link to="/">About Us</Link>
                    <Link to="/">Terms of Use</Link>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Scroll To Top Button */}
      {showScroll && (
        <button className="scroll_top" onClick={scrollToTop}>
          <i className="bi bi-arrow-up"></i>
        </button>
      )}
    </>
  );
}

export default Footer;
