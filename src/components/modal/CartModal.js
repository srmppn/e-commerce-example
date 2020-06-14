import React, { Component } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import "./CartModal.css";
import { removeItem } from "../../actions/CartAction";

class CartModal extends Component {
  reArrangeString = (str, index) => {
    return str.substring(0, index) + "...";
  };
  productListView = (product) => {
    let totalPrice = 0;
    return product.cartList.map((item, idx) => {
      totalPrice += item.price;
      return (
        <Alert key={idx} variant="primary" className="product-list-view">
          <span>{this.reArrangeString(item.detail, 12)}</span>
          <span>{item.price}</span>
          <span className="remove-item-btn" onClick={() => this.props.removeItem(idx)}>นำออก</span>
        </Alert>
      );
    }).concat(<Alert variant="success" className="product-list-view">ราคารวม {totalPrice} บาท</Alert>);
  };
  onClickRemoveItem = () => {};
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="fas fa-shopping-cart"></i> ตะกร้าสินค้า
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>รายการสินค้า</h5>
          {this.productListView(this.props.productList)}
        </Modal.Body>
        <Modal.Footer>
          <Button>ยืนยันการสั่งซื้อ</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  productList: state.cartList,
});

const mapActionToProps = {
  removeItem: removeItem,
};

export default connect(mapStateToProps, mapActionToProps)(CartModal);
