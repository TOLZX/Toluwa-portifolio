import "./Contact.css"
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaCalendarAlt } from "react-icons/fa"
import { trackEvent } from "../../utils/analytics"

export default function Contact() {

    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = e.target
        const data = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        }

        try {
            const res = await fetch("http://localhost:5000/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })

            trackEvent("contact_submit", "form")

            if (res.ok) {
                alert("Message sent successfully")
                form.reset()
            } else {
                alert("Failed to send message")
            }

        } catch (err) {
            console.log(err)
            alert("Error connecting to server")
        }
    }

    return (

        <section className="contact" id="contact">

            <div className="container">

                <p className="section-label">Get In Touch</p>
                <h2 className="section-title">Contact Me</h2>
                <p className="section-subtitle">
                    Have a project in mind or want to collaborate?
                    Send me a message and I'll get back to you.
                </p>

                <div className="contact-wrapper">

                    <div className="contact-info">

                        <div className="contact-info-item">
                            <div className="contact-info-icon"><FaEnvelope/></div>
                            <div>
                                <h4>Email</h4>
                                <p>itzToluwa@email.com</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon"><FaMapMarkerAlt/></div>
                            <div>
                                <h4>Location</h4>
                                <p>Lagos, Nigeria</p>
                            </div>
                        </div>

                        <div className="contact-cta-btns">
                            <a
                                href="https://wa.me/2349135452576?text=Hello%20I%20want%20to%20work%20with%20you"
                                target="_blank"
                                rel="noreferrer"
                                className="whatsapp-btn"
                            >
                                <FaWhatsapp size={16}/> Chat on WhatsApp
                            </a>

                            <a
                                href="https://calendly.com/toluwaowolaja/meeting"
                                target="_blank"
                                rel="noreferrer"
                                className="calendly-btn"
                            >
                                <FaCalendarAlt size={14}/> Book a Call
                            </a>
                        </div>

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

                </div>

            </div>

        </section>

    )

}
