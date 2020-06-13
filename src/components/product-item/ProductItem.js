import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./ProductItem.css";
import Rating from "../product-rate/Rating";

class ProductItem extends Component {
  render() {
    return (
      <div className="product-container">
          <img src="https://cf.shopee.co.th/file/9ab89f657f9b27362f8ca82bd79a0f7f" width="180" height="200"/>
          <div className="product-detail">
            <span>
              {this.props.product.detail}
            </span>
            <div className="product-schema">
              <Rating rate={this.props.product.rate}/>
              <span className="product-price">{this.props.product.price} B</span>
            </div>
            <span>{this.props.product.province}</span>
          </div>
      </div>
    );
  }
}

export default ProductItem;
