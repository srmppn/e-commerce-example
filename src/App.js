import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import ProductItem from "./components/product-item/ProductItem";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import Advertise from "./components/advertise/Advertise";
import Header from "./components/header/Header";
import CartModal from "./components/modal/CartModal";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { connect } from "react-redux";
import LoginModal from "./components/modal/LoginModal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showCart: false,
      showLogin: false
    };
  }
  onCloseHandle = (target) => {
    this.setState({[target]:false});
  }
  onShowHandle = (target) => {
    this.setState({[target]:true});
  }
  productList = (products) => {
    return products.map((product,idx) => <ProductItem key={idx} product={product} />);
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header handleShow={() => this.onShowHandle('showLogin')}/>
          <Route path="/">
            <Advertise />
            <div style={{margin: '0 auto', width: '87%'}}>
              <div className="product-list-container">
                {this.productList(this.props.product)}
              </div>
            </div>
          </Route>
          <Route exact path="/product-view">
          </Route>
          <Cart handleShow={() => this.onShowHandle('showCart')}/>
          <CartModal show={this.state.showCart} handleClose={() => this.onCloseHandle('showCart')}/>
          <LoginModal show={this.state.showLogin} handleClose={() => this.onCloseHandle('showLogin')}/>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product.productList
})

export default connect(mapStateToProps)(App);
