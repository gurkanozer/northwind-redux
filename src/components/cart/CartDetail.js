import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cartActions';
import { Table } from 'react-bootstrap';
import alertify from 'alertifyjs'

class CartDetail extends Component {
    removeFromCart(cartItem){
        this.props.actions.removeFromCart(cartItem);
        alertify.error(cartItem.product.productName+" remove from cart");
    }
    render() {
        return (
            <Table striped bordered hover >
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Quantity Per Unit</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map((cartItem) => (
                  <tr key={cartItem.product.id}>
                  <td>{cartItem.product.id}</td>
                  <td>{cartItem.product.productName}</td>
                  <td>{cartItem.product.unitPrice}</td>
                  <td>{cartItem.quantity}</td>
                  <td><button class="btn btn-outline-danger "
                        onClick={()=>this.removeFromCart(cartItem)}
                    >Remove</button></td>
                  </tr>
              ))}
            </tbody>
          </Table>
        )
    }
}
function mapStateToProps(state){
    return{
        cart:state.cartReducer
    }
}
function mapDispatchToProps(dispatch){
    return{
        actions:{
            removeFromCart:bindActionCreators(cartActions.removeFromCart,dispatch)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartDetail);