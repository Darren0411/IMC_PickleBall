import express from "express";
 

const app = express();
const Port = 4000;

app.get("/root",(req,res)=>{
    res.send("Hello from server");
});


app.listen(Port,() => {
    console.log(`server is running on port ${Port}`);
  });