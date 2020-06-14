import React, { Component } from "react";
import Rating from "../product-rate/Rating";
import { addItem } from "../../actions/CartAction";
import { connect } from "react-redux"
import "./ProductItem.css";

class ProductItem extends Component {
  onClickAddItemToCart = (product) => {
    this.props.addItem(product);
    alert('เพิ่มสินค้าในตะกร้าของคุณแล้ว')
  }
  render() {
    return (
      <div className="product-container">
          <img src="https://cf.shopee.co.th/file/9ab89f657f9b27362f8ca82bd79a0f7f" />
          <div className="product-detail">
            <span>
              {this.props.product.detail}
            </span>
            <div className="product-schema">
              <Rating rate={this.props.product.rate}/>
              <span className="product-price">{this.props.product.price}B</span>
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <span>{this.props.product.province}</span>
            <a style={{color:'blue'}} onClick={() => this.onClickAddItemToCart(this.props.product)}>เพิ่มในตะกร้า</a>
            </div>
          </div>
      </div>
    );
  }
}

const mapActionToProps = {
  addItem: addItem
};

export default connect(null,mapActionToProps)(ProductItem);