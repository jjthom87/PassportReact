import React, { Component, PropTypes } from 'react'; 
import { connect } from 'react-redux';

import * as actions from './../../actions/indexes/User_Home_Index';
import ApplicationLinkItem from './../applications/ApplicationLinkItem';

class ApplicationList extends Component{
    componentWillMount(){
        this.props.dispatch(actions.userHome())
    }
    render() {
        console.log(this.props)
        const { user } = this.props;
        var renderApplications = () => {
            return user.applications.map((application, index) => {
                return (
                    <ApplicationLinkItem
                        company={application.companyName}
                        position={application.position}
                        id={application.id}
                        key={index}
                    />
                );
            });
        }
        var noApplications = () => {
            if (user.applications.length == 0){
                return (
                    <p>No Applications</p>
                );
            }
        }
        return (
            <div>
                <p>Applications</p>
                {noApplications()}
                {renderApplications()}
            </div>
        );
    } 
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
        applications: state.applications
    };
};

export default connect(mapStateToProps)(ApplicationList);
