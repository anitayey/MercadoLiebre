const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, './public')
const port = process.env.PORT || 3000;

app.use (express.static(publicPath));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log("listen on 3000"))


/* HOME */
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

/* REGISTER */
app.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

/* LOGIN*/
app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"))
});
