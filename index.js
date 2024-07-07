const express = require('express');
const app = express()
const port = 3030;

app.get('/',(req,res)=>{
    res.send('jayesh')
})

app.get( ' /twt ' ,  ( req , res ) =>{
    res.send('jayesh pingale')
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
}
)
