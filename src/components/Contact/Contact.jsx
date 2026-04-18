import "./Contact.css"

export default function Contact(){

    const handleSubmit = async (e)=>{
e.preventDefault()

const form = e.target

const data = {
name: form.name.value,
email: form.email.value,
message: form.message.value
}

try{

const res = await fetch("http://localhost:5000/send",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
})

if(res.ok){
alert("Message sent successfully")
form.reset()
}else{
alert("Failed to send message")
}

}catch(err){
console.log(err)
alert("Error connecting to server")
}

}

//     const handleSubmit = async (e)=>{
// e.preventDefault()

// const form = e.target
// const data = {
// name:form[0].value,
// email:form[1].value,
// message:form[2].value
// }

// try{
// const response = await fetch("http://localhost:5000/send",{
// method:"POST",
// headers:{
// "Content-Type":"application/json"
// },
// body:JSON.stringify(data)
// })

// const result = await response.json()

// if(response.ok){
// alert("Message sent!")
// form.reset()
// } else {
// alert(result.error || "Failed to send message")
// }
// } catch(error){
// alert("Something went wrong. Please try again.")
// }
// }

return(

<section className="contact" id="contact">

<div className="container">

<h2 className="section-title">
Contact Me
</h2>

<p className="contact-text">
Have a project in mind or want to collaborate? 
Send me a message and I’ll get back to you.
</p>

<div className="contact-wrapper">

<div className="contact-info">

<h3>Email</h3>
<p>itzToluwa@email.com</p>

<h3>Location</h3>
<p>Lagos, Nigeria</p>

</div>

<form className="contact-form" onSubmit={handleSubmit}>

<input
type="text"
name="name"
placeholder="Your Name"
required
/>

<input
type="email"
name="email"
placeholder="Your Email"
required
/>

<textarea
name="message"
placeholder="Your Message"
rows="5"
required
></textarea>

<button type="submit">
Send Message
</button>

</form>

<a
href="https://wa.me/2349135452576?text=Hello%20I%20want%20to%20work%20with%20you"
target="_blank"
className="whatsapp-btn"
>
Chat on WhatsApp
</a>

<a
href="https://calendly.com/toluwaowolaja/meeting"
target="_blank"
className="calendly-btn"
>
Book a Call
</a>

</div>

</div>

</section>

)

}