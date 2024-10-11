import mysql from "mysql"
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import EmailSender from "./SendEmail.js";


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({origin: "*"}));
const port = process.env.PORT;

// creating database table and insert subscribers to the db
const connection = mysql.createConnection({
    host: process.env.HOSTDB,
    user: process.env.USERDB,
    password: process.env.PASSWORDDB,
    database: process.env.DATABASE
});

// connection.connect((err)=>{
//     if(err) throw new Error(err);
//     console.log("connected")
//     connection.query('CREATE DATABASE IF NOT EXISTS lpdb',(err)=>{
//         if(err) throw new Error(err);
//         console.log("Database created/exist");
//         connection.changeUser({database: 'lpdb'}, (err) => {
//             if(err) throw new Error(err);
//             createTable();
//         })
//     })
// })

// function createTable(){
//     connection.query(`CREATE TABLE IF NOT EXISTS subscribers(
//       id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
//       firstName VARCHAR(100),
//       lastName VARCHAR(100),
//       email VARCHAR(100)
//     )`, (err) => {
//         if(err) throw new Error(err);
//         console.log("Table created/exists")
//     })
// }

app.post("/send", async (req, res) => {
    try{
        const {firstName, lastName, email} = req.body 
        await EmailSender({firstName,lastName,email})
        await connection.query('INSERT INTO subscribers SET ?',{
           firstName: firstName,
           lastName	: lastName,
           email : email			 
        }, (err) => {
            if(err) throw new Error(err);
            console.log('1 subscriber inserted');
            res.end();
        })
    } catch(error){
        res.status(404).json({msg: "Error"})
    }
})


app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})