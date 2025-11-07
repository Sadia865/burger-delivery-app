import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cards({ image, title, paragraph, rating, price, renderRatingIcons }) {
  return (
    <Col sm={6} md={4} xl={3} className="mb-4">
      <Card className="overflow-hidden shadow-sm border-0">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} className="img-fluid" alt={title} />
        </div>

        <Card.Body>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wish_list">
              <i className="bi bi-heart"></i>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-muted">{paragraph}</Card.Text>

          <div className="d-flex align-items-center justify-content-between mt-3">
            <div className="menu_price">
              <h5 className="mb-0">${price}</h5>
            </div>
            <div className="add_to_card">
              <Link to="/">
                <i className="bi bi-bag me-2"></i> Add to Cart
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;
