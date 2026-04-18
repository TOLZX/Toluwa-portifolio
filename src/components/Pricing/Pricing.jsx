import "./Pricing.css"
import { openWhatsApp } from "../../utils/whatsapp"

export default function Pricing(){

return(

<section className="pricing" id="pricing">

<div className="container">

<h2 className="section-title">Pricing</h2>

<div className="pricing-grid">

<div className="price-card">
<h3>Basic</h3>
<p className="price">$100</p>
<ul>
<li>1 Page Website</li>
<li>Responsive Design</li>
<li>Basic SEO</li>
</ul>
<button onClick={()=>openWhatsApp("hire")}>
Get Started
</button>

</div>

<div className="price-card popular">
<h3>Standard</h3>
<p className="price">$300</p>
<ul>
<li>Multi-page Website</li>
<li>Modern UI Design</li>
<li>Performance Optimization</li>
</ul>
<button onClick={()=>openWhatsApp("hire")}>
Get Started
</button>
</div>

<div className="price-card">
<h3>Premium</h3>
<p className="price">$700+</p>
<ul>
<li>Full-stack App</li>
<li>API Integration</li>
<li>Custom Features</li>
</ul>
<button onClick={()=>openWhatsApp("hire")}>
Get Started
</button>
</div>

</div>

</div>

</section>

)

}