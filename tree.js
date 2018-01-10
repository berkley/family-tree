var csv = require("fast-csv");
var family = {};
//cols: [ 'Name', 'DOB', 'DOD', 'Mother', 'Father', 'Spouse1', 'Spouse2' ]

csv
 .fromPath("family-data-test.csv")
 .on("data", function(data){
     // console.log(data);
     var f = family[data[0]];
     if(f) {
     	console.log("ERROR: person already exists");
     } else {
     	family[data[0]] = {"name":data[0], "DOB":data[1], "DOD":data[2], "mother":data[3], "father":data[4], "spouse1":data[5], "spouse2":data[6], "children":[]};
     	f = family[data[0]];
     }
 })
 .on("end", function(){
 	console.log("family:", JSON.stringify(family, null, 4));
     
     Object.keys(family).forEach(function(name) {
       var name = o[key];
       var tree = buildTree(family);
     });

     console.log("tree:", JSON.stringify(tree, null, 4));
 });

 function buildTree(hash) {
     
 };
