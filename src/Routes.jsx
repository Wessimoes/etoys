import React, {Component} from 'react';
import App from './views/App';
import NotFound from './views/NotFound';
import ProductList from './views/ProductList';
import ProductDetail from './views/ProductDetail';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class Routes extends Component {
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path='/' component={ProductList}/>
                        <Route path='/products' component={ProductList}/>
                        <Route path='/products/:id' render={(props) => <ProductDetail {...props}/>}/>
                        <Route path='*' component={NotFound}/>
                    </Switch>
                </App>
            </Router>
        );
    }
}

export default Routes;
