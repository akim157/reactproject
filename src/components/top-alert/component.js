import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

class TopAlert extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    };
    removeMargin() {
        document.querySelector('#app').classList.remove('m-t-50');
    }
    addMargin() {
        document.querySelector('#app').classList.add('m-t-50');
    }
    render() {
        const { name, email } = this.props.user;
        if (isEmpty(name) || isEmpty(email)) {
            this.removeMargin();
            return null;
        }
        this.addMargin();
        return (
            <div>

            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(TopAlert);
