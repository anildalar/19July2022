//console.log('It\'s work'); // \ Escape character


//const something = require('somelibary');

const express = require('express');
const { mwfn1 } = require('./middlewares/myMiddleware');
const app = express();

require('dotenv').config()


//Lets define the route




app.get('/get_students',mwfn1,(req,res)=>{
    console.log(req.query.fulldetail)
    res.json({
        "msg":`Hello ${req.query.fulldetail}`
    });
});

let port = process.env.PORT;
app.listen(port,()=>{
    console.log(`The server is running on port ${port}`);
});