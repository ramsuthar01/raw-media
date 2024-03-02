import Home from "../header"
import Fom from "../fom"
import Futer from "../fouter"
import "../all-service/web.css"
import { TbSquareRoundedChevronsUpFilled } from "react-icons/tb";

function Web(){
    return(
        <>
           <Home/>
<div className="webdiv1" id="webdiv"><h1 style={{marginTop:"70px"}}> </h1></div>
<div className="webdiv2 row">
   <div className="col-6"><img src="../images/Web Development.avif" alt=""/></div> 
   <div className="col-6">
    <p>Having a website is indispensable for businesses in the contemporary digital landscape, and its significance stems from various compelling reasons. Firstly, a website functions as an online storefront, providing a virtual presence that establishes the legitimacy and credibility of a business. The absence of a website may lead potential customers to question the authenticity of the business. Moreover, a website ensures accessibility and convenience, allowing customers to access information about products or services 24/7, without being constrained by traditional business hours.</p>
<p>Furthermore, a website offers global reach, enabling businesses, whether local or international, to extend their potential audience beyond geographical boundaries. It serves as a powerful marketing tool, providing a platform for showcasing products, services, and conveying brand identity, values, and unique selling propositions to a wide audience. The interactive features of websites, such as contact forms, comments, and social media integration, foster customer engagement, creating a sense of community and loyalty.</p>
</div><div className="col-12">
{/* <p>For businesses involved in retail, a website opens up the possibility of online sales through e-commerce platforms. This facilitates a seamless browsing and purchasing experience for customers, with the added convenience of doorstep delivery. Additionally, a website serves as an information hub, efficiently providing essential details such as contact information, product or service details, pricing, testimonials, and frequently asked questions. This empowers customers to make informed decisions.</p>
<p>Staying competitive in the business landscape requires a website as it provides a competitive advantage. A well-designed and user-friendly website can set a business apart from competitors in the industry. Moreover, a website enhances search engine visibility by implementing SEO strategies, making it easier for potential customers to discover the business through online searches.</p> */}
<p></p>Websites offer valuable tools like Google Analytics, providing insights into visitor behavior, website traffic, user demographics, and popular pages. This data-driven approach enables businesses to make informed decisions and refine their strategies. A well-designed website contributes to a business's professional image, conveying a modern and forward-thinking identity in alignment with consumer expectations in the digital era.
{/* <p>Finally, websites serve as a dynamic platform for communication and updates. Businesses can use their websites to convey important news, announcements, and updates in real-time, keeping their audience informed and engaged. In summary, a website is an indispensable component of a business's overall strategy, serving not only as an online presence but also as a dynamic tool for marketing, customer engagement, and sales in today's competitive business landscape.</p> */}
</div> 
<a href="#webdiv" ><TbSquareRoundedChevronsUpFilled className="fixed-bottom" style={{height:"50px", width:"40px", alignItems:"flex-end"}}  /></a>
</div>
<div className="webdiv3">
 <div class="page-wrapper">
    <div class="container">
        <h1>Achieve your business goals with web development solutions </h1>
        <ul class="infographic-cards">
            <li class="color-1">
                <i class="fa-regular fa-lightbulb"></i>
                <h5>Business Website</h5>
                <h6>Lorem ipsum</h6>
                <div class="number-box">
                    01
                   </div>
            </li>
            <li class="color-2">
                <i class="fa-solid fa-wifi"></i>
                <h5>E-commerce Website</h5>
                <h6>Lorem ipsum</h6>

                <div class="number-box">
                    02
                   </div>
            </li>
            <li class="color-3">
                <i class="fa-regular fa-user"></i>
                <h5>Portfolio Website</h5>
                <h6>Lorem ipsum</h6>

                <div class="number-box">
                    03
                   </div>
            </li>
            <li class="color-4">
                <i class="fa-brands fa-codepen"></i>
                <h5>Event Website</h5>
                <h6>Lorem ipsum</h6>
                <div class="number-box">
                    04
                   </div>
            </li>      
        </ul> 
        <ul class="infographic-cards">
            <li class="color-1">
                <i class="fa-regular fa-lightbulb"></i>
                <h5>Blog or Content Marketing Website</h5>
                <h6>Lorem ipsum</h6>
                <div class="number-box">
                    05
                   </div>
            </li>
            <li class="color-2">
                <i class="fa-solid fa-wifi"></i>
                <h5>Local Business Website</h5>
                <h6>Lorem ipsum</h6>

                <div class="number-box">
                    06
                   </div>
            </li>
            <li class="color-3">
                <i class="fa-regular fa-user"></i>
                <h5>Online Learning Website</h5>
                <h6>Lorem ipsum</h6>

                <div class="number-box">
                    07
                   </div>
            </li>
            <li class="color-4">
                <i class="fa-brands fa-codepen"></i>
                <h5>Landing Page or Sales Funnel</h5>
                <h6>Lorem ipsum</h6>
                <div class="number-box">
                    08
                   </div>
            </li>      
        </ul> 
    </div>
   </div>
   
</div>
<div>

</div>

<Futer></Futer>
        
        </>
    )
}
export default Web