var models = require('../models');
models.sequelize.sync();

var modelController = {
	userCreate: function(name, username, password, cb){
	  	models.User.create({
	  	  name: name,
	      username: username,
	      password: password,
	    }).then(function(success) {
	      	cb(success);
		}).catch(function(err){
			 cb(err);
		});
	},
	userHome: function(id, cb){
		models.User.findOne({ where: {id: id}}).then(function(user){
	        	cb(user);
			}).catch(function(err){
				cb(err);
			});
  	},
  	recordCreate: function(companyName, position, dateApplied, replied, nextEvent, notes, resumeSubmitted, cb){
  		var ifReplied = false;
  		var ifResumeSubmitted = false;
  		if(replied === "Yes"){
  			ifReplied = true;
  		}
  		if(resumeSubmitted === "Yes"){
  			ifResumeSubmitted = true 
  		}
  		models.Application.create({
  			companyName: companyName,
  			position: position,
  			dateApplied: dateApplied,
  			replied: ifReplied,
  			nextEvent: nextEvent,
  			notes: notes,
  			resumeSubmitted: ifResumeSubmitted
  		}).then(function(success) {
	      	cb(success);
		}).catch(function(err){
			 cb(err);
		});
  	}
}

module.exports = modelController;