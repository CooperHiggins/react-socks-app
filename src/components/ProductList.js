import React, { Component } from 'react';
import Product from './Product';
import Title from './title';

export default class ProductList extends Component {

state={
    products:[]
}

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"></Title>
                        <div className="row">
                            <h3>Hello from products</h3>
                        </div>
                    </div>
                </div>
            </React.Fragment>
                // <Product />
           
        )
    }
}
