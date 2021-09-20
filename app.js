const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`));

app.get('/login', (req, res) => { 
    res.sendFile(path.join(__dirname, "./views/login.html")) 
});

app.get('/register', (req, res) => { 
    res.sendFile(path.join(__dirname, "./views/register.html")) 
});

app.get('/error', (req, res) => { 
    res.sendFile(path.join(__dirname, "./views/error.html")) 
});

app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, "./views/home.html")) 
});

app.get('*', (req, res) => { 
    res.sendFile(path.join(__dirname, "./views/error.html")) 
});
