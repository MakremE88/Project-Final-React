import React, { Component } from "react";
import products from "../data.js";
import { Col, Container } from 'react-bootstrap';
import { HashRouter as Router, Link } from 'react-router-dom';

class DetailsProducts extends Component {
    render() {
        const productsNewId = parseInt(this.props.match.params.id);
         const productsNew = products.filter(productsNew => {
            if (productsNew.id === productsNewId) {
               return productsNew;
            }
            return false;
});


    return (
        <>
        <Container className="mt-5">
        <div className="details-product">
        <Router>
          <Link to="/" className="btn btn-primary btn-movie">
            <i className="fa fa-arrow-left" /> Back to Product List
          </Link>
        </Router> 
        <div className="d-flex flex-details">
          <Col xs={12} sm= {6} md={4} className="boxcard-img">
            <img src={`products/${productsNew[0].sku}_2.jpg`} alt={productsNew[0].title} className="imgMovie" />
          </Col>
          <Col xs={12} sm= {6} md={8} className="details-card">
          <div className="white-card-details">
            <p className="tile-details">{productsNew[0].title}</p>
            <p className="sku-details">Reference : {productsNew[0].sku}</p>
            <p className="price-details">Price :{productsNew[0].price}</p>
            <p className="desc-card">
                Description: <br />
            {productsNew[0].description}
            </p>
          </div>
          
      </Col>
      </div>
      </div>
      </Container>
      </>
         );

}
}
export default DetailsProducts;