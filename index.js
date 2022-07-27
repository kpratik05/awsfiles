var express = require("express");

var app = express();

app.get("/",(req,resp)=>{
    resp.send("<h4>Hello again using pull function of git in aws server(instance)</h4>");
})

var server = app.listen(8080);
console.log("Server live on 8080");