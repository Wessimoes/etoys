import React, {Component} from 'react';
import '../css/App.css';

class App extends Component {

    render() {
        const {children} = this.props;

        return (
            <div className="App">
                <header className="mdc-toolbar">
                    <div className="mdc-toolbar__row">
                        <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                            <span className="mdc-toolbar__title">Etoys</span>
                        </section>
                    </div>
                </header>

                <div className="content">
                    {children}
                </div>
            </div>
        );
    }
}

export default App;
