import React, { PropsTypes } from 'react';
import { connect } from 'react-redux';
import { closeModal } from './actions';
import './styles.less';

class Modal extends React.Component {
	static propTypes = {
		dispatch: PropsTypes.func.isRequired,
		modal: PropsTypes.object.isRequired
	};
	constructor(props) {
		super(props);
		this.close = this.close.bind(this);
	}
	close() {
		this.props.dispatch( closeModal() );
	}
	render() {
		const { isOpen, title, content } = this.props.modal;
		if (!isOpen) return null;
		return (
			<div className='modal fade in' tabindex='-1' role='dialog'>
				<div className='modal-dialog' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title'>{ title }</h5>
							<button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={ this.close }>
								<span aria-hidden='true'>&times;</span>
							</button>							
						</div>
						{ content }												
					</div>
				</div>
			</div>
		);
	};
}

function mapStateToProps(state) {
	return {
		modal: state.modal
	};
}

export default connect(mapStateToProps)(Modal);