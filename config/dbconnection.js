var mysql=require('mysql');
var connection=mysql.createPool({
 
 host:CONFIG.db_host,
 user:CONFIG.db_user,
 password:CONFIG.db_password,
 database:CONFIG.db_name
 
});

module.exports=connection;