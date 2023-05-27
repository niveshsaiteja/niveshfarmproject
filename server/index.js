const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json({limit : "10mb"}))

const PORT = process.env.PORT || 8080

//mongodb connection
console.log(process.env.MONGODB_URL)
mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("connect to Database"))
.catch((err)=> console.log(err))

//schema 
const userSchema = mongoose.Schema({
    firstName: String,
    lastName:String,
    email:{
        type : String,
        unique : true,
    },
    password : String,
    confirmPassword:String,
    image : String
})

//model
const userModel =mongoose.model("user",userSchema)


//api
app.get("/",(req,res)=>{
    res.send("server is running")
})

/* app.post("/signup",async(req,res)=>{
    console.log(req.body)
    const {email} = req.body

    userModel.findOne({email : email},(err,result)=>{
        console.log(result)
        console.log(err)

        if(result){
            res.send({message : "Email id is already registered",alert : false})
        }
        else{
            const data = userModel(req.body)
            const save = data.save()
            res.send({message: "successfully sign up", alert : true})
        }  
    })

})*/

//API - User Signup
app.post("/signup", async (req, res) => {

    console.log(req.body);
    const { email } = req.body;
    
    try {
      const result = await userModel.findOne({ email: email });
      if (result) {
        res.send({ message: "Email id is already registered", alert: false });
      } else {
        const data = await userModel.create(req.body);
        res.send({ message: "Successfully signed up", alert: true });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Error signing up", alert: false });
    }
    })



//api login 
/*app.post("/login",async(req,res)=>{
    console.log(req.body)
    const {email} = req.body;
    userModel.findOne({ email: email}, (err,result) =>{
        if(result){
            
            const dataSend = {
            _id:result._id,
            firstName:result.firstName,
            lastName:result.lastName,
            email:result.email,
            image:result.image
            }
            console.log(dataSend);
            res.send({message: "Login successfull", alert: true ,data : dataSend});
        }
        else{
            res.send({message: "", alert: false ,data : dataSend});

        }
    })
})
*/

//API - User Login
app.post("/login", async (req, res) => {

console.log(req.body);
  const { email } = req.body;

  try {
    const result = await userModel.findOne({ email: email });
    if (result) {
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };
      console.log(dataSend);
      res.send({ message: "Login successful", alert: true, data: dataSend });
    } else {
      res.send({ message: "Login failed", alert: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error logging in", alert: false });
  }
});



//product section
const schemaProduct = mongoose.Schema({
    name : String,
    category : String,
    image : String,
    price : String,
    description : String
});

const productModel = mongoose.model("product",schemaProduct)



//save product in data
//api
app.post("/uploadProduct",async(req,res)=>{
    console.log(req.body)   

    const data = await productModel(req.body)
    const dataSaver = await data.save()
    res.send({message : "upload successful"})
})


//
app.get("/product", async(req,res) =>{
    const data = await productModel.find({})
    res.send(JSON.stringify(data))
})

//server is running
app.listen(PORT,()=>console.log("server is running at port :" + PORT))