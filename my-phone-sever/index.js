const express = require('express');
const phones = require('./phones.json');
const app = express();

const cors = require('cors');

const port =5001;

app.use(cors())


app.get('/',(req,res)=>{
    res.send("loading data");
})

app.get('/phones',(req,res)=>{
    res.send(phones);
})

app.get('/phones/:id',(req,res)=>{
    const id =parseInt(req.params.id);
    console.log(id);
    const phone= phones.find(phone => phone.id ===id) || {};
    res.send(phone);
})

app.listen(port,()=>{
    console.log(`the port is: ${port}`);
})