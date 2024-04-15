const express = require('express')
const app = express();
const logerMidelver= require('./midelver/loger')
app.use(express.json())
app.use(express.urlencoded())
app.use(logerMidelver)


app.get('/',(req,res)=>{
console.log(req);
res.json({ masage :'hello welcome to api'})
})

app.use('*',(req,res)=>{
    res.status.json({erore:true ,masage :'not found 404'})
})

app.listen(3000,()=>{
    console.clear();
    console.log('server is runing on port http://localhost:3000');
})