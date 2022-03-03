var config=require('./dbconfig');
//object to use sql 
const sql = require('mysql');
//for creating sql connection
const pool  = sql.createPool(config);
