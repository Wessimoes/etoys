import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <div>
                Não encontramos o que você estava procurando, voltar para a lista de brinquedos?

                <Link to='/products'>Voltar a lista</Link>

            </div>);
    }
}

export default NotFound;