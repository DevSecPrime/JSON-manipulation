const fs = require("fs")
const data = {
    name:"Aryan Rana",
    age:22,
    description:"Frontend Developer"
}

// console.log(data);

//1. convert data in json

const jsonData = JSON.stringify(data);

console.log(jsonData);

// 2. create a new JSON file

fs.writeFile("newJson.json", jsonData,(error)=>{
if(error){
    console.log("Error in writing data...");
}
else{
    console.log("File is written successfully....")
}
});
//3. read that file
//4. CRUD Operation


