const express = require('express')
const cors = require('cors')
const https = require('https')
const { json } = require('express')
const app = express()
app.use(cors())
app.use(express.json())

app.listen(4000,()=>{
    console.log('Running at port 4000');
})

app.get('/',(req,res)=>{
    console.log('Got the request');
    const link = 'https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020'
    https.get(link,(response) => {
        let data = ''

        response.on('data',(chunks)=>{
            data+=chunks
        })
        response.on('end',()=>{
            var jsondata = JSON.parse(data)
            res.json(jsondata)
        })
    })
    console.log('Request sent');
})