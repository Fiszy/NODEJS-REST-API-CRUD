const express = require('express')
const bodyParser = require('body-parser')

const db = require('./app/models')

const app = express()
const PORT = 3001

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}))

db.sequelize.sync();



app.get('/', (req,res)=> {
     res.status(200).json({message: 'successfull'})
})

require("./app/routes/post.routes")(app);

app.listen(PORT, ()=> {
    console.log(`Listening on ${PORT}`)
})

