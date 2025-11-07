import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PromotionImage from '../../assets/promotion/pro.png';

function Section4() {
  return (
    <>
      {/* Promotion Section */}
      <section className='promotion_section py-5'>
        <Container>
          <Row className='align-items-center'>
            {/* Image Column */}
            <Col lg={6} className='mb-4 mb-lg-0 text-center'>
              <img 
                src={PromotionImage} 
                alt='Promotion' 
                className='img-fluid promotion-img rounded shadow-sm' 
              />
            </Col>

            {/* Text Column */}
            <Col lg={6}>
              <div className='promotion-text'>
                <h2 className='mb-4'>
                  Nothing brings people together like a good burger
                </h2>
                <p>
                  Semper lacus cursus porta primis ligula risus tempus and sagittis ipsum 
                  mauris lectus laoreet purus ipsum tempor enim ipsum porta justo integer 
                  ultrice aligula lectus aenean magna and pulvinar purus at pretium gravida.
                </p>
                <ul className='promotion-list'>
                  <li>Fringilla risus, luctus mauris orci auctor purus euismod pretium ligula rutrum tempor sapien.</li>
                  <li>Quaerat sodales sapien euismod purus blandit.</li>
                  <li>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium a purus mauris.</li>
                </ul>
                <Button variant='warning' className='mt-3 px-4 py-2 text-dark'>
                  Learn More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Parallax Section */}
      <section className='bg_parallax_scroll'>
        
      </section>
    </>
  );
}

export default Section4;
