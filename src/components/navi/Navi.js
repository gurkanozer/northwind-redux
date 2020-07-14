import React, { Component } from "react";
import { Navbar} from "react-bootstrap";
import CartSummary from "../cart/CartSummary";
import { Link } from "react-router-dom";

export default class Navi extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" >
        <Navbar.Brand>Northwind </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <CartSummary/>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
