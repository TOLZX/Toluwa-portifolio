// server.js

require("dotenv").config()

const express = require("express")
const nodemailer = require("nodemailer")
const cors = require("cors")

const app = express()

app.use(cors({
origin:"http://localhost:5173"
}))

app.use(express.json())

app.post("/send", async (req,res)=>{

try{

const { name,email,message } = req.body

if(!name || !email || !message){
return res.status(400).send("All fields required")
}

const transporter = nodemailer.createTransport({
service:"gmail",
auth:{
user:process.env.EMAIL_USER,
pass:process.env.EMAIL_PASS
}
})

await transporter.sendMail({
from: `"Portfolio" <${process.env.EMAIL_USER}>`,
to: process.env.EMAIL_USER,
subject:`New Message from ${name}`,
html:`
<h3>New Contact Message</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong> ${message}</p>
`
})

res.status(200).send("Message sent successfully")

}catch(err){

console.log(err)
res.status(500).send("Failed to send message")

}

})

app.listen(5000,()=>{
console.log("Server running on http://localhost:5000")
})

// require("dotenv").config()
// const express = require("express")
// const nodemailer = require("nodemailer")
// const cors = require("cors")

// const app = express()

// app.use(cors())
// app.use(express.json())

// app.post("/send", async (req,res)=>{

// try{

// const { name,email,message } = req.body

// const transporter = nodemailer.createTransport({
// service:"gmail",
// auth:{
// user:"yourgmail@gmail.com",
// pass:"your_app_password"
// }
// })

// await transporter.sendMail({
// from: email,
// to:"yourgmail@gmail.com",
// subject:`Portfolio Message from ${name}`,
// text: message
// })

// res.status(200).send("Message sent")

// }catch(err){

// console.log(err)
// res.status(500).send("Error sending message")

// }

// })

// app.post("/send", async (req,res)=>{

// const { name,email,message } = req.body

// if(!name || !email || !message){
// return res.status(400).json({error:"All fields are required"})
// }

// const transporter = nodemailer.createTransport({
// service:"gmail",
// auth:{
// user: process.env.EMAIL_USER || "samjoe@gmail.com",
// pass: process.env.EMAIL_PASS || "mail"
// }
// })

// try{
// await transporter.sendMail({
// from: email,
// to: process.env.EMAIL_USER || "samjoe@gmail.com",
// subject:`Portfolio Message from ${name}`,
// text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
// })

// res.json({success:true, message:"Message sent!"})
// } catch(error){
// console.error("Email error:", error)
// res.status(500).json({error:"Failed to send message"})
// }

// })

// app.listen(5000,()=>console.log("Server running"))