// var express = require('express');
// var router = express.Router();
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var fs = require('fs');
// var request = require('request');
// var fetch = require('node-fetch');

// var allProjects=[];

// function fetchProjects(){
//     fetch('http://localhost:3000/api')
//         .then(
//             function(response){
//                 return response.json();
//             }
//         )
//         .then(
//             function(myJson){
//                 allProjects=myJson;
//             }
//         )
//     }

// function data(){
//     fetchProjects();
//     setTimeout(()=>{
//         console.log('calling projects API. -getProjects.js');
//         console.log(allProjects);
//         return allProjects;
//     },4000);
// }
// module.exports = {data}