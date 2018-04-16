import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class SignOut extends Component{
	componentWillMount(){
		this.props.signoutUser();
	}
	render(){
		return(
			<div>

				<h2>Sorry to see you go... </h2>

			</div>
		)
	}
}

export default connect(null, actions)(SignOut)