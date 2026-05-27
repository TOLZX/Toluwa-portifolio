import "./WhatsApp.css"
import { trackEvent } from "../../utils/analytics"

export default function WhatsApp(){

    return(

        <a
            href="https://wa.me/2349135452576?text=Hello, I saw your portfolio and I'd like to discuss a project."
            className="whatsapp-float"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            onClick={()=>trackEvent("whatsapp_click","float_button")}
        >
            💬
        </a>

    )

}
