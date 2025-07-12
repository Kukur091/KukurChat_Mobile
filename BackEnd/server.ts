const express = require('express');
const mysql = require("mysql");
const cors = require('cors');
const session = require('express-session');
const arg2 = require("argon2");
require('dotenv').config();

const app = express();

app.use(express.json())
app.use(cors({origin: true, withCredentials: true}))

const db = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USERNAME,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
});

app.use(session({
  secret: process.env.SESSION,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false, // à reconfig en prod pour la sécu
    maxAge: 1000 * 60 * 60 * 24 * 90
  }
}));

app.post("/register", async (req:any, res:any) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = await arg2.hash(req.body.password);


       const sql = "SELECT * from users WHERE username = ? OR email = ?";
    db.query(sql, [username, email], (err:any, result:any) => {
          if (err) {
    console.error("Erreur SQL :", err);
    return res.status(500).json({ message: "Erreur base de données" });
  }
        if(result.length === 0){
    const sql = "INSERT INTO users (username, email, password) VALUES (?,?,?)";
    db.query(sql, [username, email, password], (err:any, result:any) => {
        if(err){
            return res.status(501).json({message: "erreur register"});
        }
        return res.status(201).json({message: "register avec succès"});
    })
   } else {
    return res.status(409).json({ message: "User déjà existant" });
   }
    });
})

app.post("/login", async (req:any, res:any) => {
    const email = req.body.email;
    const password = req.body.password;
    const sql = "SELECT password AS ps FROM users WHERE email = ?";
    db.query(sql, [email], async (err:any,result:any) => {
        if(err){
            return res.status(500).json({message: "Erreur base de données"});
        }
        if(result.length === 0){
            return res.status(404).json({message: "Utilisateur inexistant"})
        }
        const ps = result[0].ps;
        if(await arg2.verify(ps, password)){
            return res.status(201).json({message: "Utilisateur connecté"})
        } else {
            return res.status(501).json({message: "erreur?"})
        }
    })
})

app.listen(8082,"0.0.0.0",() => {
    console.log("server backend en ligne sur le port 8082")
})