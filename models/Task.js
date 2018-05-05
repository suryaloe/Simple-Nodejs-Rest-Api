var db=require('../config/dbconnection'); //reference of dbconnection.js
 
var Task={
 
	getAll:function(max, page, callback){
		max = parseInt(max);
		page = parseInt(page);
		var offset = (page - 1) * max;
		var query = db.query('SELECT * FROM user ORDER BY id DESC LIMIT ?,?',[offset, max], callback);
		return query;
	},

	getID:function(id,callback){
		return db.query("select * from user where id=?",[id],callback);
	},

	addUser:function(Task,callback){
		return db.query("INSERT INTO user SET ?",[Task],callback);
	},

	deleteUser:function(id,callback){
		return db.query("delete from user where id=?",[id],callback);
	},
	updateUser:function(id, Task,callback){
		return db.query("update user set ? where id=?",[Task,id],callback);
	} 
};
 module.exports=Task;
