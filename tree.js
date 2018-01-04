var csv = require("fast-csv");
var family = {};
//cols: [ 'Name', 'DOB', 'DOD', 'Mother', 'Father', 'Spouse1', 'Spouse2' ]

csv
 .fromPath("family-data.csv")
 .on("data", function(data){
     // console.log(data);
     var f = family[data[0]];
     if(f) {
     	console.log("ERROR: person already exists");
     } else {
     	family[data[0]] = {"name":data[0], "children":[]};
     	f = family[data[0]];
     }

     //check if f has a mother or father and if they are in the hashtable already
     if(data[3]) { //mother
     	var m = family[data[3]];
     	if(m) {
     		family[data[3]].children.push(f);
     	}
     } 

     if(data[4]) { //father
     	var d = family[data[4]];
     	if(d) {
     		family[data[4]].children.push(f);
     	}
     }

 })
 .on("end", function(){
 	console.log("family:", JSON.stringify(family, null, 4));
     console.log("done");
 });
