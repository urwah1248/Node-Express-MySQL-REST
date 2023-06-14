const config = require("../utils/config")
const logger = require("../utils/logger")
const mysql = require("mysql2")

//Creating Database Connection using env variables
const db = mysql.createConnection(config.MYSQL_CONFIG)

//Declaring connectDatabase function to call it in app.js
const connectDatabase = () => {
    db.connect((err) => {
        if(err){
            logger.error("Connection Error.", err)
            return;
        }
        logger.info("Connected to MySQL Database")
    }
)}

module.exports = {db, connectDatabase};