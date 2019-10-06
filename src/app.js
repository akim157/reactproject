import React, { Component, PropTypes } from 'react';
import { Header } from './components/index';
import { Modal } from './components/modal/index';


class App extends Component {

    static propTypes = {
        children: PropTypes.any.isRequired
    };

    static path = '/';

    render() {
        return (
            <div className='container-fluid'>
								<Modal />
                <Header />
                { this.props.children }
            </div>
        );
    }
}
