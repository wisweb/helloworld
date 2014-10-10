var mysql = require('mysql');
var express = require('express');
var app = express();

app.use(function(req,res,next){
	console.log('%s %s', req.method, req.url);
	next();
});



var pool = mysql.createPool({
	host : "localhost",
	port : 3306,
	user : 'root',
	password : 'qwer1234',
	database : 'nodedb'
})


pool.getConnection(function(err, connection){
connection.query(
	'select * from sample1',
	function(err,rows){
	  	if(err)	{
	  		console.log( err );
	  	}else{
	  		console.log( rows );
	  	}
		connection.destroy();
	}
);

});
