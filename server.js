const express = require('express');

const app = express();
app.use((req,res,next)=>{
    console.log("in the middle");
    next();
})

app.use((req,res,next)=>{
    console.log('in anouther middleware');
    res.send('<h1>Hello World from Express.Js<h1>')
})

const server = http.createServer(app);

app.listen(4000);