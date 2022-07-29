var express = require("express");
// #comment added
var app = express();

app.get("/",(req,resp)=>{
    resp.send("<h4>Hello again using pull function of git in aws server(instance)</h4>"
    +"<h3>List of products : </h3>"
    +"<ol>"
    +"<li>Computer</li>"
    +"<li>Mobile</li>"
    +"<li>Laptop</li>"
    +"<li>Cooking</li>"
    +"</ol>"
    );
})

app.get("/computer",(req,resp)=>{
    resp.send("<h3>Computer</h3>"
    +"<ol>"
    +"<li>Acer</li>"
    +"<li>HP</li>"
    +"<li>Samsung</li>"
    +"<li>Lenovo</li>"
    +"</ol>"
    )
})

app.get("/mobile",(req,resp)=>{
    resp.send("<h3>Mobile</h3>"
    +"<ol>"
    +"<li>Samsung</li>"
    +"<li>Apple</li>"
    +"<li>Nokia</li>"
    +"<li>Xiaomi</li>"
    +"</ol>"
    )
})

app.get("/laptop",(req,resp)=>{
    resp.send("<h3>Laptop</h3>"
    +"<ol>"
    +"<li>Samsung</li>"
    +"<li>Apple</li>"
    +"<li>Lenovo</li>"
    +"<li>Xiaomi</li>"
    +"</ol>"
    )
})

app.get("/cooking",(req,resp)=>{
    resp.send("<h3>Cooking Accessories</h3>"
    +"<ol>"
    +"<li>Samsung</li>"
    +"<li>Apple</li>"
    +"<li>Lenovo</li>"
    +"<li>Xiaomi</li>"
    +"</ol>"
    )
})

var server = app.listen(8080);
console.log("Server live on 8080");
