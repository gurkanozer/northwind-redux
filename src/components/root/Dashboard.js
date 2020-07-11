import React, { Component } from 'react'
import ProductList from '../products/ProductList'
import CategoryList from '../categories/CategoryList'

export default class extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <CategoryList></CategoryList>
                </div>
                <div className="col-md-9">
                    <ProductList></ProductList>
                </div>
            </div>
        )
    }
}
