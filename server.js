const express = require('express')
const app = express();
app.get('/',(req,res)=>{
res.json({ masage :'hello'})
})
app.listen(3000,()=>{
    console.clear();
    console.log('server is runing on port http://localhost:3000');
})