
// 😮‍💨 ADVANCED READ FILE

const fs = require("fs");

console.log("Reading JSON file");

// Specify the path to your JSON file
const jsonFilePath =
  "E:\\Project Works\\JSON\\Trying JSON FirstTime\\first.json";

// Read the JSON file asynchronously
fs.readFile(jsonFilePath, "utf-8", (err, data) => {
  const jsonData = JSON.parse(data);

  // Process the JSON data
  console.log(jsonData);
 
  // Process the Subject Array Index 3  data
  const dept = JSON.parse(data).subjects[3];
  console.log("My Department : " + dept);

  // Process the Objects Variable data
  const ma = JSON.parse(data).parent.mother;
  console.log("My Mother Name : " + ma);

});



// 😷 Begginer Read File

// myJson = `{

//     "key": "value",

//     "name": "Sumonta",
//     "roll": 2019831056,
//     "isStudent": true,
//     "university": null,
//     "subjects": ["CSE", "EEE", "BBA"]

// }`;

// const parsedObject = JSON.parse(myJson);
// console.log(parsedObject);
 