import React, { Component, PropTypes } from 'react'; 
import { connect } from 'react-redux';

import * as actions from './../../actions/indexes/User_Home_Index';
import ApplicationLinkItem from './../applications/ApplicationLinkItem';

class ApplicationList extends Component {
    componentWillMount(){
        this.props.userHomeData()
    }
    render() {
        const { user } = this.props;
        if(user.applications){
            return (
                <div>
                    <p>Applications</p>
                    {
                        user.applications.map((application, index) => {
                            return (
                                <ApplicationLinkItem
                                    company={application.companyName}
                                    position={application.position}
                                    id={application.id}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            )
        } else {
            return (
                <p>No Applications</p>
            );
        }
    } 
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
        applications: state.applications
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userHomeData: () => dispatch(actions.userHome())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationList);
