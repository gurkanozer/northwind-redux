import React, { Component } from "react";
import { Nav, NavDropdown, Badge, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import alertify from 'alertifyjs'

class CartSummary extends Component {
  removeFromCart(cartItem){
    this.props.actions.removeFromCart(cartItem);
    alertify.error(cartItem.product.productName+" remove from cart");
}
  renderEmpty() {
    return <Nav.Link>Cart is Empty</Nav.Link>;
  }
  renderSummary() {
    return (
      <NavDropdown title="Your Cart" id="basic-nav-dropdown">
          {
              this.props.cart.map(cartItem=>(
                <NavDropdown.Item key={cartItem.product.id}>
                    <Badge variant="danger " onClick={()=>this.removeFromCart(cartItem)}>x</Badge>
                    {cartItem.product.productName}     
                    <Badge variant="success">{cartItem.quantity}</Badge>
                    </NavDropdown.Item>
              ))
          }
        <NavDropdown.Divider />
        <NavDropdown.Item><Link to="/cart">Go to Cart</Link></NavDropdown.Item>
      </NavDropdown>
    );
  }
  render() {
    return (
      <Nav className="ml-auto ">
        <Nav.Link ><Link to="/" >Home</Link></Nav.Link>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </Nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
function mapDispatchToProps(dispatch){
    return{
        actions:{
            removeFromCart:bindActionCreators(cartActions.removeFromCart,dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
