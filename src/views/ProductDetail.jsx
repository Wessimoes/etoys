import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/card.css'

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.setState({value: event.target.value});
        event.preventDefault();
    }

    render() {
        return (
            <div className="card detail-card">
                <h2>Detalhes</h2>

                <div className="name-store">
                    Você encontra esse produto na loja Guarapiranga
                </div>

                <div className="address">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.3051395572147!2d-46.72374948544017!3d-23.665043384631467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51bb23f348e3%3A0xaebbbfc63f1956bc!2sAv.+Guarapiranga%2C+752+-+Jardim+S%C3%A3o+Lu%C3%ADs%2C+S%C3%A3o+Paulo+-+SP%2C+04762-001!5e0!3m2!1spt-PT!2sbr!4v1529269619884"
                        width="100%" height="auto" frameBorder="0" allowFullScreen>
                    </iframe>
                </div>

                {this.state.value && <div className="comment-box">
                    <div className="mdc-chip__text comment">{this.state.value}</div>
                </div>}

                <form onSubmit={this.handleSubmit}>
                    <div className="mdc-text-field" style={{display: "flex"}}>
                        <input type="text" value={this.state.value} onChange={this.handleChange}
                               id="my-text-field" className="mdc-text-field__input"/>
                        <div className="mdc-line-ripple"></div>
                        <input type="submit" value="Submit" className="mdc-button" style={{marginTop: 20}}/>
                    </div>
                </form>

                <Link to='/products' style={{textDecoration: "none"}}>
                    <button className="mdc-button">
                        Fechar
                    </button>
                </Link>
            </div>
        );
    }
}

export default ProductDetail;
