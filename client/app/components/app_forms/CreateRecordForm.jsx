import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/indexes/User_Home_Index';

export var CreateRecordForm = React.createClass({
	getInitialState: function(){
		return {
            resumeSubmitted: '',
            replied: ''
		}
	},
    handleResumeRadio: function(e){
        this.setState({
            resumeSubmitted: e.target.value
        })
    },
    handleRepliedRadio: function(e){
        this.setState({
            replied: e.target.value
        })
    },
	onCreateRecord: function(e){
		e.preventDefault();

		const { resumeSubmitted, replied } = this.state;
		//companyName, position, dateApplied, replied, nextEvent, notes, resumeSubmitted
		var companyName = this.refs.companyName.value;
		var position = this.refs.position.value;
		var dateApplied = this.refs.dateApplied.value;
		var nextEvent = this.refs.nextEvent.value;
		var notes = this.refs.notes.value;

		var {dispatch} = this.props;

		dispatch(actions.createNewRecord(companyName, position, dateApplied, replied, nextEvent, notes, resumeSubmitted));
	},
	render: function() {
		return (
			<div className="grid-x">
				<div className="small-4 cell">
				</div>
				<div className="small-4 cell">
					<form onSubmit={this.onCreateRecord}>
							<label>
								Company Name
								<input type="text" ref="companyName"/>
							</label>
							<label>
								Position Applied For
								<input type="text" ref="position"/>
							</label>
							<label>
								Date Applied
								<input type="text" ref="dateApplied"/>
							</label>
		                    <div>
		                        <span>
			                        <p>Did employer reply?</p>
			                            <p>Yes
			                            <input 
			                                className="yesReplied" 
			                                type="radio" 
			                                value="Yes" 
			                                name="repliedChoice"
			                                checked={this.state.replied === "Yes"} 
			                                onChange={this.handleRepliedRadio.bind(this)}
			                            />
			                            No
			                            <input 
			                                className="noReplied" 
			                                type="radio" 
			                                value="No" 
			                                name ="repliedChoice"
			                                checked={this.state.replied === "No"} 
			                                onChange={this.handleRepliedRadio.bind(this)}
			                            />
			                            </p>
		                        </span>
		                    </div>
		                    <label>
								Next Event
								<input type="text" ref="nextEvent"/>
							</label>
		                    <label>
								Notes
								<textarea type="text" ref="notes"/>
							</label>
		                    <div>
		                        <span>
			                        <p>Did you submit your resume?</p>
			                            <p>Yes
			                            <input 
			                                className="yesResume" 
			                                type="radio" 
			                                value="Yes" 
			                                name="resumeChoice"
			                                checked={this.state.resumeSubmitted === "Yes"} 
			                                onChange={this.handleResumeRadio.bind(this)}
			                            />
			                            No
			                            <input 
			                                className="noResume" 
			                                type="radio" 
			                                value="No" 
			                                name ="resumeChoice"
			                                checked={this.state.resumeSubmitted === "No"} 
			                                onChange={this.handleResumeRadio.bind(this)}
			                            />
			                            </p>
		                        </span>
		                    </div>
							<div className="text-center">
								<input className="button success expanded" type="submit" value="Submit"/>
							</div>
					</form>
				</div>
				<div className="small-4 cell">
				</div>
			</div>
		);
	}
});

export default connect()(CreateRecordForm);