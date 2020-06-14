import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./Advertise.css";

class Advertise extends Component {
  render() {
    return (
      <Carousel className="advertise-container">
        <Carousel.Item>
          <img
            src={null}
            className="d-block w-100"
            style={{backgroundColor:'red'}}
          />
          <Carousel.Caption>
            <h1>Super Brands Weekend</h1>
            <h3 style={{color:'gold'}}>21:00 - 24:00 เท่านั้น</h3>
            <h2>ลดสูงสุด <span style={{fontSize:'2em'}}>70%</span></h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{backgroundColor:'rgb(0,212,234)'}}
          />
          <Carousel.Caption>
            <h1>BEST DEALS FOR PET LOVER</h1>
            <h3 style={{color:'#0e3447'}}>10 มิ.ย. - 26 มิ.ย. เท่านั้น</h3>
            <h2>ลดสูงสุด <span style={{fontSize:'2em'}}>66%</span></h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{backgroundColor:'rgb(159,198,73)'}}
          />
          <Carousel.Caption>
            <h1>Sticker Shop Now Open</h1>
            <h3 style={{color:'gold'}}>โปรโมชันต้อนรับลูกค้าใหม่</h3>
            <h2>ส่งฟรีขั้นต่ำ <span style={{fontSize:'2em'}}>299</span></h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Advertise;
