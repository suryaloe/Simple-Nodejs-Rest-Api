var TaskModel = require('../models/Task.js');

exports.index = function(req, res) {
	let max = (typeof req.query.max !== 'undefined') ? req.query.max : 5;
	let page = (typeof req.query.page !== 'undefined') ? req.query.page : 1;
	TaskModel.getAll(max, page, function(err, rows) {
		res.setHeader('Content-Type', 'application/json');
		res.json(rows);
   	});
};

exports.getId = function(req, res) {
	TaskModel.getID(req.params.id,function(err, rows) {
	  	res.setHeader('Content-Type', 'application/json');
	  	res.json(rows);
	 });
};


exports.insertData = function(req, res) {
	TaskModel.addUser(req.body,function(err, rows) {
		if (err) res.json(err);
		res.setHeader('Content-Type', 'application/json');
		res.json('User added to database with ID: ' + rows.insertId);
	})
};

exports.updateID = function(req, res) {
	TaskModel.updateUser(req.params.id, req.body, function(err, rows){
		if (err) res.json(err);
		res.json('User Updated');
	})
}

exports.deleteID = function(req, res) {
	TaskModel.deleteUser(req.params.id, function(err, rows){
		if (err) res.json(err);
		res.json('User Deleted');
	})
}
