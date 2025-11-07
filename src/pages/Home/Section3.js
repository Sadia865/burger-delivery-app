import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cards from '../../component/Cards';

import Image1 from '../../assets/menu/burger-11.jpg';
import Image2 from '../../assets/menu/burger-12.jpg';
import Image3 from '../../assets/menu/burger-13.jpg';
import Image4 from '../../assets/menu/burger-14.jpg';
import Image5 from '../../assets/menu/burger-15.jpg';
import Image6 from '../../assets/menu/burger-16.jpg';
import Image7 from '../../assets/menu/burger-17.jpg';
import Image8 from '../../assets/menu/burger-18.jpg';

const mockData = [
  { id: '0001', image: Image1, title: 'Crispy Chicken', paragraph: 'Chicken breast, chilli sauce, tomatoes, pickles, coleslaw', rating: 5, price: 99.15 },
  { id: '0002', image: Image2, title: 'Ultimate Bacon', paragraph: 'House patty, cheddar cheese, bacon, onion, mustard', rating: 4.5, price: 99.32 },
  { id: '0003', image: Image3, title: 'Black Sheep', paragraph: 'American cheese, tomato relish, avocado, lettuce, red onion', rating: 4, price: 69.15 },
  { id: '0004', image: Image4, title: 'Vegan Burger', paragraph: 'House patty, cheddar cheese, bacon, onion, mustard', rating: 3.5, price: 99.25 },
  { id: '0005', image: Image5, title: 'Double Burger', paragraph: '2 patties, cheddar cheese, mustard, pickles, tomatoes', rating: 3, price: 59.25 },
  { id: '0006', image: Image6, title: 'Turkey Burger', paragraph: 'Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles', rating: 3, price: 79.18 },
  { id: '0007', image: Image7, title: 'Smokey House', paragraph: 'Patty, cheddar cheese, onion, lettuce, tomatoes, pickles', rating: 2.5, price: 99.19 },
  { id: '0008', image: Image8, title: 'Classic Burger', paragraph: 'Cheddar cheese, ketchup, mustard, pickles, onion', rating: 2, price: 89.12 },
];

// Rating stars function
const renderRatingIcons = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating >= 1) {
      stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
      rating--;
    } else if (rating >= 0.5) {
      stars.push(<i key={i} className="bi bi-star-half text-warning"></i>);
      rating = 0;
    } else {
      stars.push(<i key={i} className="bi bi-star text-warning"></i>);
    }
  }
  return stars; // ✅ return the array
};

function Section3() {
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>Our Crazy Burgers</h2>
            <p className="para">
              Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus
            </p>
          </Col>
        </Row>

        <Row>{mockData.map((cardData, index) => (
          <Cards key={index} {...cardData} renderRatingIcons={renderRatingIcons} />
        ))}</Row>

        <Row className="pt-5 gy-4">
          <Col xs={12} md={6}>
            <div className="ads_box ads_img1">
              <h4 className="mb-0">GET YOUR FREE FRIES</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">Learn More</Link>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">BUY 1 GET 1 FREE</h4>
              <h5>DOUBLE BURGER</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">Learn More</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section3;
