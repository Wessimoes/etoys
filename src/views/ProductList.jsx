import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import ProductDetail from "./ProductDetail";
import {Col, Row} from 'react-flexbox-grid';
import '../css/card.css'

const products = [
    {
        id: 1,
        name: 'Batman',
        description: 'Boneco colecionável do Batman edição clássica',
        price: '127,90',
        photo: 'https://imgur.com/a/bD2Z6qS'
    },
    {
        id: 2,
        name: 'Harry Potter',
        description: 'Boneco colecionável do Harry Potter',
        price: '134,40',
        photo: 'https://imgur.com/a/PWeSiUk'
    },
    {
        id: 3,
        name: 'Tony Stark',
        description: 'Boneco colecionável do Tony Stark',
        price: '99,90',
        photo: 'https://imgur.com/a/hvporoY'
    },
];

class ProductList extends Component {
    render() {
        return (
            <div>
                <div className="card-area">
                    <div className="arrow-slider">
                        <i className="fas fa-arrow-left icon"/>
                    </div>

                    <Row className="toy-slider-area">
                        {products.map(product => {
                            return (
                                <Col md={4} key={product.id}>
                                    <div className="card">
                                        <div className="card-media">
                                            <img src={product.photo} alt="pop funko"/>
                                        </div>

                                        <div className="card-title">
                                            {product.name}
                                        </div>

                                        <div className="card-body">
                                            {product.description}
                                        </div>

                                        <div className="price">
                                            {product.price}
                                        </div>

                                        <Link to={`/products/${product.id}`} style={{textDecoration: "none"}}>
                                            <button className="mdc-button card-actions">
                                                Ver detalhes
                                            </button>
                                        </Link>
                                    </div>
                                    <Route path={`/products/${product.id}`}
                                           render={(props) => <ProductDetail {...props}/>}/>
                                </Col>
                            );
                        })}
                    </Row>

                    <div className="arrow-slider">
                        <i className="fas fa-arrow-right icon"/>
                    </div>
                </div>

                {this.props.children}
            </div>
        );
    }
}

export default ProductList;
