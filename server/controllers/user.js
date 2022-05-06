const bycrpyt = require('bcrypt');
const DB = require('../models/user');

const saltRounds = 10;
//functionailty tested and works 
const register = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const hash = await bycrpyt.hash(password, saltRounds);
    const sqlTwo = "INSERT INTO users (username, password) VALUES  (?, ?)";
    const sql = "SELECT * FROM users WHERE username = ?";

    DB.query(sql, username, (err, response) => {
        if(err) throw err;
        console.log(response);
        
        if(response.length > 0){
            res.status(201).json({message: "This username already exists please use our login page"});
            
        } else {
            DB.query(sqlTwo, [username, hash], (error, result) => {
                
                if(error){
                    console.log(error);
                
                } else {
                    res.status(201).json({message: "Created account success, please use our login page"});
                }
            })
            
        }
        
    })
       
}

const login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const sql = "SELECT * FROM users WHERE username = ?";
    
    DB.query(sql, username, (err, response) => {
        if(err) throw err;

        if(response.length > 0){
            bycrpyt.compare(password, response[0].password, (error, result) => {
                if(error) throw error;
                if(result) {
                    res.status(201).json({message: "User had logged in", status: true});
                } else {
                    res.status(401).json({message: "Wrong username/password combination"});
                }
            })
        } else {
            res.status(400).json({message: "no such user exists"});
        }
    })
}


module.exports = {register, login};