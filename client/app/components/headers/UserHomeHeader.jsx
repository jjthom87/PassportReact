import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../../actions/indexes/User_Home_Index';

class UserHomeHeader extends Component {
    componentWillMount(){
        this.props.userHomeData()
    }
	render() {
		const { user } = this.props;
		if(user != undefined){
			return (
				<div>
					<p>Welcome {this.props.user.name}</p>
				</div>
			);
		} else {
			return (
				<div></div>
			)
		}
	}
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userHomeData: () => dispatch(actions.userHome())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHomeHeader);