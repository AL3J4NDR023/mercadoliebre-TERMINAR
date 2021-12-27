const express = require('express');
const path = require('path');

const app = express();

const publicpath = path.resolve(__dirname, './public');
app.use(express.static(publicpath));
app.get('/', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.listen(process.env.PORT || 300, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'));
})

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'));
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/login.html'));
})