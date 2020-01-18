var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./newdb.db3');

// Create Table
db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS Users (ID, Author TEXT, MainCL NTEGER, ShelveCL INTEGER, TestContent TEXT, StartTime INTEGER)");
});

// Insert into Table
db.serialize(function() {
	
	db.run("INSERT into Users(ID,Author, MainCL, ShelveCL, TestContent, StartTime) VALUES (2345, 'Mushtaq',244567, 345678, 'level1', 234510)");
        db.run("INSERT into Users(ID,Author, MainCL, ShelveCL, TestContent, StartTime) VALUES (2346, 'john',244567, 345678, 'level1', 234510)");
        db.run("INSERT into Users(ID,Author, MainCL, ShelveCL, TestContent, StartTime) VALUES (2347, 'Aisa',244567, 345678, 'level1', 234510)");
});

// Select All Data
db.serialize(function() {
	db.all("SELECT * from Users",function(err,rows){
		if(err){
			console.log(err);
		}
		else{
			console.log(rows);
		}
	});
});

//Perform DELETE operation
//db.run("DELETE * from table_name condition");

//Perform UPDATE operation
//db.run("UPDATE table_name where condition");

console.log("http://localhost:8080");