import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";
import { HashRouter as Router, Link } from 'react-router-dom';
class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
   
    const { cartItems } = this.props;
    const productItems = this.props.products.map((product) => (
      <div className="col-md-4 my-5" key={product.id}>
        <div className="thumbnail text-center">
          <a
            href={`#${product.id}`}
            onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
          >
            <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
            <p>{product.title}</p>
          </a>
          <b>{util.formatCurrency(product.price)}</b>
          <div className="flex-button">
          <button
            className="btn btn-primary"
            onClick={(e) => this.props.addToCart(cartItems, product)}
          >
            Add to cart
          </button>
          <Router>
            <Link to={`/${product.id}`} className="btn btn-primary btn-movie">
                See Details
            </Link>
        </Router>
        </div>
        </div>
      </div>
    ));

    return <div className="row">{productItems}</div>;
  }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);