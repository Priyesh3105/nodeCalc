//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    
    var num1 =Number(req.body.num1) ;
    var num2 =Number(req.body.num2);

    var result = num1+num2;
    res.send("result of calculation is " + result);
});

app.get("/bmiCalc", function(req,res){
    res.sendFile(__dirname + "/bmiCalc.html");
});

app.post("/bmiCalc", function(req,res){

    var w = parseFloat(req.body.w);
    var h = parseFloat(req.body.h);
    var bmi = w/(h*h);
    res.send("your bmi is "+ bmi);
});

app.listen(5500, function(){
    console.log("server is running on port 3000.");
});