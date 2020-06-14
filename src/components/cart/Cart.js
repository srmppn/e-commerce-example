import React, { Component } from "react";
import "./Cart.css";

class Cart extends Component {
  render() {
    return <div className="product-cart-container" onClick={this.props.handleShow}>
      <i className="fas fa-shopping-cart"></i>
    </div>;
  }
}

export default Cart;
