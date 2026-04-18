export const openWhatsApp = (type) => {

let message = ""

if(type === "hire"){
message = "Hello, I want to hire you for a project."
}

if(type === "collab"){
message = "Hello, I’d like to collaborate with you."
}

if(type === "question"){
message = "Hello, I have a question about your services."
}

const encoded = encodeURIComponent(message)

window.open(`https://wa.me/2349135452576?text=${encoded}`, "_blank")

}