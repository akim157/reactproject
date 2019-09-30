import React, { Component, PropTypes } from 'react';
import { Header } from './components/index';

class App extends Component {

    static propTypes = {
        children: PropTypes.any.isRequired
    };

    static path = '/';

    render() {
        return (
            <div>
                <Header />
                { this.props.children }
            </div>
        );
    }
}
