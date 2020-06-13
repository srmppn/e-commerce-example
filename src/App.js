import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import ProductItem from "./components/product-item/ProductItem";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          detail: "Wacoal Panty Set (3 ชิ้น) รูปแบบ Short รุ่น WU4M01 สีดำ-เบจ-ชมพู (BL-BE-CP)",
          rate: 4,
          price: 199,
          province: "กรุงเทพมหานคร"
        },
        {
          detail: "Wacoal Panty Set (3 ชิ้น) รูปแบบ Short รุ่น WU4M01 สีดำ-เบจ-ชมพู (BL-BE-CP)",
          rate: 3,
          price: 130,
          province: "กรุงเทพมหานคร"
        },
        {
          detail: "Wacoal Panty Set (3 ชิ้น) รูปแบบ Short รุ่น WU4M01 สีดำ-เบจ-ชมพู (BL-BE-CP)",
          rate: 3,
          price: 130,
          province: "กรุงเทพมหานคร"
        },
        {
          detail: "Wacoal Panty Set (3 ชิ้น) รูปแบบ Short รุ่น WU4M01 สีดำ-เบจ-ชมพู (BL-BE-CP)",
          rate: 3,
          price: 130,
          province: "กรุงเทพมหานคร"
        }
      ],
    };
  }
  productList = (products) => {
    return products.map((product) => <ProductItem product={product} />);
  };
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
        </Navbar>
        <div className="product-list-container">
          {this.productList(this.state.products)}
        </div>
      </div>
    );
  }
}

export default App;
