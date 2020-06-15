import React, { Component } from "react";
import { Modal, Form, Col, Row, Button } from "react-bootstrap";

class LoginModal extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>เข้าสู่ระบบด้วยบัญชีของคุณ</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-primary">สมัครสมาชิก</Button>
            <Button variant="outline-primary" onClick={() => alert('ระบบตัวอย่าง')}>เข้าสู่ระบบ</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default LoginModal;
