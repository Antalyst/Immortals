const express = require('express');
const mysql = require('mysql2');
const bodyparser = require('body-parser');
const {createRenderer} = require ('vue-server-renderer');
const path = require('path')

const port = 3000;
const app = express();
const renderer = createRenderer;

app.set('view engine', 'html');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cswapp_db'
})

app.get('/login', (req,res)=>
  res.render('Login'));

app.get('/home', (req,res) =>
  res.render('AboutView'));

  app.post('/login', (req,res)=> {
    const {username, password} = req.body;
    db.query('SELECT * FROM users WHERE username =? AND password =?', [username, password], (err, result)=> {
      if(err) throw err;
      if(result.length > 0) {
        res.redirect('/home');
      } else {
        res.send('Invalid username or password');
      }
    });
  });

app.listen(port, () =>{
  console.log(`Server running on port http://localhost:${port}`)
});