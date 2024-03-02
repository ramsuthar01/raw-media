import Home from "./header"
import "./about.css"
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Futer from "./fouter";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
function About(){
    return(
<>
<Home></Home>
<div className="ab">
<h1 style={{fontWeight:"700"}}>About Us</h1>
<br></br>
<div style={{display:"flex",paddingRight:"100px"}}><button className="ab-botten"><Link to={"/contect"} style={{textDecoration:"none",color:"white"}}>Contect Us </Link><IoArrowForwardOutline/> </button></div>
</div>
<div className="ab-cont">
<div class="story-company-min">
      <div class="row mx-0 d-flex align-items-center py-4">
         <div class="col-lg-7 col-md-12 col-sm-12 story-cont">
            <div class="story-com-cont">
               <p><span style={{backgroundColor:"#f72f20", borderRadius:"20px", fontWeight:"700"}}>Our Company Story</span></p>
               <h2>Your Complete 360° Marketing and Solutions Partner!</h2>
               <p>we don't just navigate the marketing landscape; we define it. As a dynamic and innovative 360° marketing and solutions agency, we pride ourselves on being your strategic partner in every aspect of your brand journey. Whether you're a startup looking to make a splash or an established business aiming for a refresh, we've got the expertise and creativity to elevate your brand to new heights. In the ever-evolving world of marketing, a comprehensive strategy is key. Our 360° approach ensures that no stone is left unturned. From traditional channels to cutting-edge digital platforms, we leverage the full spectrum of marketing avenues to create a cohesive and impactful brand presence. Whether you're just starting your journey or looking to refresh your brand, rawmedia is here to transform your vision into reality. Let's embark on a journey of innovation, creativity, and success. Your brand deserves nothing less than a 360° approach, and that's exactly what we deliver.</p><br></br>

<p>Ready to redefine your brand experience? Contact us today and let's start a conversation about your brand's limitless potential. Welcome to a new era of marketing excellence with Rawmedia.in - Your Complete 360° Marketing and Solutions Partner!</p><br></br>


            </div>
         </div>
         <div class="col-lg-5 col-md-12 col-sm-12 story-img image-column">
            <div class="image-box">
               <div class="image-pattern" ></div>
               <figure class="image"><img src="../images/about-us.webp" alt="RAW" /></figure>
            </div>
         </div>
      </div>
   </div>
</div>
<div className="profile">
<div class="about-card">
  <img src="../images/nirmal.jpg" alt="John" style={{width:"100%"}}/>
  <h1>Nirmal Suthar</h1>
  <p class="title">CEO & Founder</p>
  <p></p>
  <a href="https://instagram.com/we_raw_is_war?igshid=OGQ5ZDc2ODk2ZA=="></a>
  <a href="#"><i class="fa fa-twitter"></i></a>
  <a href="http://surl.li/obrqy"></a>
  <a href="#"><i class="fa fa-facebook"></i></a>
  <p><button className="abut">Contact</button></p>
</div>
<div class="about-card">
  <img src="" alt="John" style={{width:"100%", height:"400px"}}/>
  <h1>Ram Chadar</h1>
  <p class="title"> Director</p>
  <p></p>
  <a href="#"><i class="fa fa-dribbble"></i></a>
  <a href="#"><i class="fa fa-twitter"></i></a>
  <a href="#"><i class="fa fa-linkedin"></i></a>
  <a href="#"><i class="fa fa-facebook"></i></a>
  <p><button className="abut">Contact</button></p>
</div>
<div class="about-card">
  <img src="../images/ram.jpg" alt="John" style={{width:"100%", height:"400px"}}/>
  <h1>Ram Suthar</h1>
  <p class="title">Managing Director</p>
  <p></p>
  <a href="#"><i class="fa fa-dribbble"></i></a>
  <a href="#"><i class="fa fa-twitter"></i></a>
  <a href="#"><i class="fa fa-linkedin"></i></a>
  <a href="#"><i class="fa fa-facebook"></i></a>
  <p><button className="abut">Contact</button></p>
</div>
</div>
<div className="goal">
    <div className="goal-div1" style={{border:"solid 2px", margin:"15px", marginLeft:"90px" ,borderRadius:"10px"}}>
        <h1 style={{color:"#0a0000",marginLeft:"110px"}}>Our Mission</h1>
        <p> At RawMedia, we are on a mission to democratize success in the dynamic landscape of the business world. We go beyond the traditional role of a marketing agency; we are the pioneers of affordable 360-degree marketing and business solutions. Our passion lies in empowering enterprises of all sizes, from large corporations to small businesses operating on minimal budgets. We believe that every business, regardless of its scale or financial constraints, deserves access to high-impact strategies that propel them toward growth, enhance visibility, and establish a foundation for sustainable success. Join RawMedia in reshaping the narrative of marketing and business solutions. Together, let's transform challenges into opportunities, limitations into strengths, and dreams into reality. Contact us today to embark on a journey where innovation meets affordability, and success knows no boundaries.</p><br></br>
        <p>Welcome to RawMedia – where every business, regardless of size, finds its path to success.</p>
         
    </div>
    <div className="goal-div2"style={{border:"solid 2px", margin:"15px",borderRadius:"10px"}}>
        <h1 style={{color:"#0a0000", marginLeft:"110px"}}>Our Vision</h1>
       <p>Our values ​​form the foundation of our commitment to clients and communities alike. Accessibility is not just a principle for us; it's a promise. We dismantle barriers, ensuring businesses, regardless of size or budget, can harness our expertise for transformative marketing and business solutions. Innovation on a budget is our forte, championing creativity and resourcefulness to deliver cutting-edge solutions without stretching your budget thin. With a client-centric approach, we recognize the uniqueness of your journey, prioritizing individual needs and tailoring our 360-degree marketing and business solutions to seamlessly align with your vision. Transparency is key in our collaborative spirit, as we keep you informed every step of the way, offering clear insights into our strategies, processes, and the tangible value we bring to your business. RawMedia is not just about creating buzz; we are dedicated to delivering measurable results through a data-driven approach, ensuring that every marketing initiative and business solution is crafted for tangible, positive outcomes. Clients aren't just partners; they're integral members of the RawMedia family.</p>
       
    </div>
    
</div>
<div className="row chose">
   <span style={{backgroundColor:"#f72f20",color:"white", border:"solid 2px", borderRadius:"10px 0px", width:"400px",marginLeft:"450px",marginBottom:"30px"}}><h3>Why Choose Raw Media</h3></span> 
    <p>our website 100% A22 At RawMedia, we embrace a collaborative approach to marketing solutions, recognizing the importance of working closely with our clients to understand their unique vision, goals, and requirements. Our team of experts is unwaveringly committed to delivering clean, efficient, and scalable code that adheres to the highest industry standards, ensuring the success and sustainability of your projects.Dedicated to exceptional customer service, our team goes the extra mile to offer ongoing support, ensuring that your project is not only delivered on time but also within budget constraints.</p>
<div className="col-3 col">
    <h2>Proven Expertise</h2>
</div>
<div className="col-3 col">
    <h2>Tailored Solutions</h2>
</div>
<div className="col-3 col">
    <h2>Multidisciplinary Team</h2>
</div>
<div className="col-3 col">
    <h2>Innovative Approach</h2>
</div>
<div className="col-3 col">
    <h2>Wide Range of Services</h2>
</div>
<div className="col-3 col">
    <h2>
    Commitment to Quality
 </h2>
</div>
<div className="col-3 col">
    <h2> Exceptional Customer Service</h2>
</div>
<div className="col-3 col">
    <h2>Industry-Leading Professionals</h2>
</div>
</div>

<Futer></Futer>
</>
    )
}
export default About