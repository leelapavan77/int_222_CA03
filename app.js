const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const path = require("path")
const hbs = require("hbs")

// databases........
require("./db/conn")
const contact = require("./models/details_schema")
const loginrec = require("./models/login_schema")
const verify = require("./models/verify_loginSchema")

const { urlencoded } = require("express")
// const { emitWarning } = require("process")


app.use(express.json())
app.use(urlencoded({extended:false}))




const static_path = path.join(__dirname,"../public")
app.use(express.static(static_path))
// console.log(path.join(__dirname,"../public"))
const partials_path = path.join(__dirname,"../views")
app.set("view engine","hbs")
hbs.registerPartials(partials_path)
app.get("/index",(req,res)=>{
    res.render("index")
})
app.get("/orders",(req,res)=>{
    res.render("orders")
})
app.get("/sign-up",(req,res)=>{
    res.render("sign_up")
})
app.get("/cart",(req,res)=>{
    res.render("cart")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})
app.get("/forgot",(req,res)=>{
    res.render("forgot")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/sign_out",(req,res)=>{
    res.render("login")
})
// app.get("/about",(req,res)=>{
//     res.re('login')
// })

// login form database...................

app.post("/sign_up",async(req,res)=>{
    try {
        const password = req.body.password
        const rpassword = req.body.rpassword
        if(password === rpassword){
            const logDetail = new loginrec({
                email: req.body.email,
                password: req.body.password,
                rpassword: req.body.rpassword
            })
            // now we have to save the above records using await
            const ded = await logDetail.save()
            res.status(201).render("login")
            // res.send("passwords are matching")
        }
        else{
            res.send("passwords are not matching")
            
        }
        
    } catch (error) {
        res.status(400).send(error)
    }
})
// console.log("kk")


// checking email and password are already present in database or not
app.post("/index", async(req,res)=>{
    try {
        const gmail = req.body.email
        const pswd = req.body.password
        const mail =  await loginrec.findOne({email:gmail})
        const pwd = await loginrec.findOne({password: pswd})
        if(mail && pwd){
            res.status(201).render("index")
        }
        else{
            res.status(400).send("invalid credentials")
        }
    } catch (error) {
        res.status(400).send(error)
    }


})





// contact form database...................

app.post("/contact",async(req,res)=>{
    try {
        const reg = new contact({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            country: req.body.country,
            subject: req.body.subject
        })
        const regiestered = await reg.save();
        res.status(201).render("index")
    } catch (error) {
        res.status(400).send(error)
    }
})











app.listen(port,()=>{
    console.log("works at port 3000")
})