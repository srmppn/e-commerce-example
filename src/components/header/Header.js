import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap";
import CustormNavbar from "../navbar/CustormNavbar";
import "./Header.css";
import {
  Form,
  FormControl,
  Button,
  Jumbotron,
  Container,
  Breadcrumb,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <Breadcrumb className="float-right">
          <Breadcrumb.Item href="#">ช่วยเหลือ</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            สมัครสมาชิก
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span onClick={this.props.handleShow}>เข้าสู่ระบบ</span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Jumbotron fluid>
          <Container>
            <h3 style={{ color: "white" }}>E-commerce</h3>
            <Form inline>
<<<<<<< HEAD
                <FormControl type="text" placeholder="ค้นหาสินค้าและร้านค้า" className="search-bar"/>
                <i style={{color:'white'}} className="fas fa-search search-btn"></i>
                <NavDropdown title="หมวดหมู่">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="ใหม่">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="โปรโมชัน">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="จัดส่งฟรี">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                </NavDropdown>
=======
              <FormControl
                type="text"
                placeholder="ค้นหาสินค้าและร้านค้า"
                className="search-bar"
              />
              <i
                style={{ color: "white" }}
                className="fas fa-search search-btn"
              ></i>
              <NavDropdown title="หมวดหมู่">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="ใหม่">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="โปรโมชัน">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="จัดส่งฟรี">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
              </NavDropdown>
>>>>>>> feature/login-modal
            </Form>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
