const express = require("express")

const app = express();


//parse in JSON
app.use(express.json());





const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`Server is running on PORT :- ${PORT}`)
})

///import routes

const jsonRoute = require("../jsonOperation/routes.js");
app.use("/api/v1",jsonRoute);


app.get("/",(req,res)=>{
    res.send(`Server is running on port = ${PORT}`)
})