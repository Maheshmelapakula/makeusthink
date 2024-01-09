const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send({msg:"API is working"})
})

const port = 1020

app.listen(port, ()=>{
    console.log(`server connected to http://localhost:${port}`);
})