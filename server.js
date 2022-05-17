const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const routesUrl = require("./routes/routes")
const router = express.Router()
const contact = require("./models/models")
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// const { urlencoded } = require("body-parser");
const cors = require('cors')
dotenv.config()

app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.post("/app/contact", (req, res) => {
     
  res.set({ "Allow-access-Allow-Origin": "*" }
  )
  console.log(req.body)
  
  
  const newContact = new contact({
    number:req.body.registered.number, email:req.body.registered.email, desc:req.body.registered.desc
  })
 newContact.save();
    res.status(200).send(req.body)

})

 mongoose.connect(process.env.DATABASE, console.log('db connected'))
  


app.listen(process.env.PORT || 5000);