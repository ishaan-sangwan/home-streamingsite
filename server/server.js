const express = require("express")
const app = express()
const cors = require('cors')
app.use(cors())
const router = express.Router()
const PORT = 8000
const con =require('./connection')

app.get("/api/get", (req, res)=>{
    console.log(req.query)
    // res.send("hello world")
    res.json({'hello':'myname is ishaan'})
})


const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

router.post("/api/posts", (req, res)=>{
    con.main().then(result => {
        if (req.body['value'] ==  result['value'] && req.body['password'] == result['password']){
        // console.log(req.body)
        // res.json(req.query)
        res.send('<div><body>hello</body></div>')
        
        console.log('authenticated')
        }
    })
    // console.log(typeof JSON.stringify(req.body))
})
app.use('/',router)

app.listen(PORT, (err) => {
    if (err) {throw err}
    else{console.log("listening on port ", PORT)}
})
