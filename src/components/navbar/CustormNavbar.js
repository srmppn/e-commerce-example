import React, { Component } from "react";
import { Button, Navbar, NavDropdown, Form, FormControl } from "react-bootstrap";

class CustormNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">
            <h2>E-commerce</h2>
        </Navbar.Brand>
        <Form inline>
            <FormControl type="text" placeholder="ค้นหาสินค้าและร้านค้า" className="mr-sm-6"/>
            <Button variant="outline-success">Search</Button>
        </Form>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    );
  }
}

export default CustormNavbar;
