const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/addproducts',(req,res,next)=>{
    //console.log("in the middle");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>')
    //next();
})

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    //console.log('in another middleware');
    res.send('<h1>Hello World from Express.Js<h1>')
})

app.listen(3000);
