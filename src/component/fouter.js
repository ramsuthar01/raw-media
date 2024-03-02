import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import './fouter.css'
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

 function Futer(){
    return(
<>
{/* <div className="fount">
<span><a href="https://www.facebook.com/Nirmal2700?mibextid=ZbWKwL" ><FaFacebook style={{width:"29px",height:"50px",color:"white"}} className="soc"> </FaFacebook></a></span>
<span><a href="https://instagram.com/we_raw_is_war?igshid=OGQ5ZDc2ODk2ZA==" ><FaInstagramSquare style={{width:"29px",height:"50px",color:"white"}} className="soc"></FaInstagramSquare></a></span>
<span><a href="http://surl.li/obcak"><FaLinkedin style={{width:"29px",height:"50px",color:"white"}} className="soc"></FaLinkedin></a></span>
<span><a href="https://www.youtube.com/@Ramsavlogs93"><FaYoutube style={{width:"29px",height:"50px",color:"white"}} className="soc"></FaYoutube></a></span>
<a href="nirmalsuthar369@gmail.com"><CgMail  style={{width:"29px",height:"50px",color:"white"}} className="soc" ></CgMail></a>
<div className="fount2">
   <Link to={"/about"}style={{textDecoration:"none",color:"white"}}> <h2>About Us</h2></Link>
    <Link to={'/contect'} style={{textDecoration:"none",color:"white"}}><h2>Contect</h2></Link></div>
</div> */}
{/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
<div class=" mt-5 fut">
  {/* <!-- Footer --> */}
  <footer
          class="text-center text-lg-start text-white"
          style={{backgroundColor:"#45526e"}}
          >
    {/* <!-- Grid container --> */}
    <div class="container p-4 pb-0">
      {/* <!-- Section: Links --> */}
      <section class="">
        {/* <!--Grid row--> */}
        <div class="row">
          {/* <!-- Grid column --> */}
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold" style={{fontSize:"25px", fontWeight:"bold"}}>
            RAW MEDIA
            </h6>
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          {/* <!-- Grid column --> */}

          <hr class="w-100 clearfix d-md-none" />

          {/* <!-- Grid column --> */}
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold" >Products</h6>
            <p>
              <a class="text-white">MDBootstrap</a>
            </p>
            <p>
              <a class="text-white">MDWordPress</a>
            </p>
            <p>
              <a class="text-white">BrandFlow</a>
            </p>
            <p>
              <a class="text-white">Bootstrap Angular</a>
            </p>
          </div>
          {/* <!-- Grid column --> */}

          <hr class="w-100 clearfix d-md-none" />

          {/* <!-- Grid column --> */}
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <a class="text-white" href="/">Home</a>
            </p>
            <p>
              <a class="text-white" href="/about">About Us</a>
            </p>
            <p>
              <a class="text-white" >Carrer</a>
            </p>
            <p>
              <a class="text-white" href="/contect">Help</a>
            </p>
          </div>

          {/* <!-- Grid column --> */}
          <hr class="w-100 clearfix d-md-none" />

          {/* <!-- Grid column --> */}
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i class="fas fa-home mr-3"></i> Jaipur, Rajsathan</p>
            <p><i class="fas fa-envelope mr-3"></i> nirmalsuthar@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> +91 7340515675</p>
            <p><i class="fas fa-print mr-3"></i> +91 9358722837</p>
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!--Grid row--> */}
      </section>
      {/* <!-- Section: Links --> */}

      <hr class="my-3"/>

      {/* <!-- Section: Copyright --> */}
      <section class="p-3 pt-0">
        <div class="row d-flex align-items-center">
          {/* <!-- Grid column --> */}
          <div class="col-md-7 col-lg-8 text-center text-md-start">
            {/* <!-- Copyright --> */}
            <div class="p-3">
              © 2024 Copyright:
              <a class="text-white" href="https://mdbootstrap.com/"
                 >RAWMEDIA.com</a
                >
            </div>
            {/* <!-- Copyright --> */}
          </div>
          {/* <!-- Grid column -->

          <!-- Grid column --> */}
          <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            {/* <!-- Facebook --> */}
            <a href="https://www.facebook.com/Nirmal2700?mibextid=ZbWKwL" target="blank"
               class="btn btn-outline-light btn-floating m-1"
              
               role="button"
               ><FaFacebook /></a>
{/* 
            <!-- Twitter --> */}
            <a href="https://instagram.com/we_raw_is_war?igshid=OGQ5ZDc2ODk2ZA=="target="blank"
               class="btn btn-outline-light btn-floating m-1"
              
               role="button"
               ><AiFillInstagram />
              </a>

          
            <a
               class="btn btn-outline-light btn-floating m-1"
              
               role="button"
               ><FaTwitter />
              </a>

           
            <a href="http://surl.li/obcak" target="blank"
               class="btn btn-outline-light btn-floating m-1"
              
               role="button"
               ><FaLinkedin /></a>
          </div>
         
        </div>
      </section>
    
    </div>
 
  </footer>
 
</div>

</>
    )
 }
 export default Futer