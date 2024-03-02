import './service.css'
import { FaComputer } from "react-icons/fa6";
import Home from './header';
import { Link } from 'react-router-dom';
import Futer from './fouter';
import { CgArrowRightO } from "react-icons/cg";
function Service(){
  return(
    <>
    <Home></Home>
   <div className="img">
   {/* <div><h1 style={{marginLeft:"80px", marginTop:"80px"}}>Services What We Provides</h1></div> */}
   {/* <Link to={"/contect"}> <div><button className='sbut'>Contect US</button></div> </Link> */}
   </div>
   <div>
   <div class="col-md-12 text-center">
      <h1 style={{fontSize:"32px"}}>Raw Media Marketing Partner  - Your Complete 360° SEO And Content Marketing Solution</h1>
      <p class="my-3 mb-5"><span>Raw Media Private Limited</span>we specialize in providing customized marketing solutions that
        meet the unique needs and goals of your business. We pride ourselves on delivering high-quality, innovative
        solutions that help our clients achieve their business objectives.</p>
    </div>
  <div className='row'>
    <div className='col-3'>
<a href="#1st"><div className=' scol'>
<div class="container">
  <img src="../images/socialmediamarketingstrategy-1650293336008.avif" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">Social Media Marketing</div>
  </div>
</div>
</div></a> </div>
<div className='col-3'><a href="#2nd"><div className='scol'>
<div class="container">
  <img src="../images/seo.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">Search Enginl Optimization</div>
  </div>
</div>
</div></a></div>
<div className='col-3'>
  <a href="#3rd"><div className='scol'>
<div class="container">
  <img src="../images/0_M4bxiCIjcTK-2Xr6.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">Web Development</div>
  </div>
</div>
</div></a></div>

<div className='col-3'><a href="#4th"><div className='scol'>
<div class="container">
  <img src="../images/download11.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">Ppc Advertising</div>
  </div>
</div>
</div></a> </div>

<div className='col-3'><a href="#5th"><div className='scol'>
<div class="container">
  <img src="../images/email.webp" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">Email Marketing</div>
  </div>
</div>
</div></a></div>

<div className='col-3'><a href="#6th"><div className='scol'>
<div class="container">
  <img src="../images/design-mini.png" alt="Avatar" class="image"/>
  <div className="overlay">
    <div className="text">Content Marketing</div>
  </div>
</div>
</div></a></div>
<div className='col-3'><a href="#7th"><div className='scol'>
<div class="container">
  <img src="../images/lead.webp" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">Lead Generation</div>
  </div>
</div>
</div></a></div>
 <div className='col-3'><a href="#8th"><div className='scol'>
<div class="container">
  <img src="../images/grapic.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">Graphic Design </div>
  </div>
</div>
</div></a></div>
<div className='col-3'><a href="#9th"><div className='scol'>
<div class="container">
  <img src="../images/social.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">SM Account Handling</div>
  </div>
</div>
</div></a></div>
<div className='col-3'>
<a href="#10th"><div className='scol'>
<div class="container">
  <img src="../images/media menejment[.webp" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">Marketing Handling</div>
  </div>
</div>
</div></a></div>
  </div>
</div>
  <div className='ser-details' id='1st'>
<span><img style={{height:"400px"}} src="images/socialmediamarketingstrategy-1650293336008.avif" alt="web developer" />
</span>
<span>
  <h2 >Social Media Marketing </h2>
  <p> <b style={{color:"red"}}>Raw Media</b>"Welcome to the dynamic realm of Social Media Marketing (SMM), where innovation meets engagement, and brands thrive in the digital spotlight. 									</p>
  <h4>We Provide Social Media Marketing Like -</h4>
  <ul>
    <li >Content Creation Magic: 	</li>
    <li>Strategic Social Media Planning: 	</li>
    <li>Influencer Collaboration: 	</li>
    <li>Community Building: 	</li>
  </ul>
 <Link className='socilbut' to={"/media"}><button>Read More<CgArrowRightO style={{marginLeft:"10px", marginBottom:"2px"}} /></button></Link> 
</span>
  </div>
  <div className='ser-details' id='2nd'>

<span>
  <h2>Search Enginl Optimization</h2>
  <p> <b style={{color:"red"}}>Raw Media</b> "Welcome to the world of Search Engine Optimization (SEO), where visibility transforms into success, and your brand ascends the digital ranks. 				</p>
  <h4>Benefits of SEO Software -</h4>
  <ul>
    <li >Technical SEO Mastery:	</li>
    <li>Link Building Strategies:	</li>
    <li>Local SEO Domination:	</li>
    <li>SEO Analytics Mastery:	</li>
  </ul>
 <Link className='socilbut'  to={"/seo"}><button>Read More<CgArrowRightO style={{marginLeft:"10px", marginBottom:"2px"}} /></button></Link> 
</span>
<span><img style={{height:"400px"}} src="images/seo.jpg" alt="web developer" />
</span>
  </div>
  <div className='ser-details' id='3rd'>
<span><img style={{height:"400px"}} src="images/Web-Developer-mini.jpg" alt="web developer" />
</span>
<span>
  <h2>Website Desgin & Development</h2>
  <p> <b style={{color:"red"}}>Raw Media</b>"Step into the digital spotlight with our cutting-edge Website Development services, where innovation converges with functionality to create an
online experience that captivates, engages, and converts. </p>
 <h4>We Provides Web Degian Like -</h4>
  <ul>
    <li >Custom Website Design Elegance:		</li>
    <li>API Integration Symphony:		</li>
    <li>E-commerce Excellence:	</li>
    <li>Responsive Web Development Mastery:		</li>
  </ul>
  <Link className='socilbut' to={"/web"}><button >Read More<CgArrowRightO style={{marginLeft:"10px", marginBottom:"2px"}} /></button></Link>
</span>
  </div>
  <div className='ser-details' id='4th'>

<span>
  <h2>Pay Per click Advertising</h2>
  <p> <b style={{color:"red"}}>Raw Media</b>"Welcome to the forefront of digital advertising, where every click propels your brand visibility to new heights.
				</p>
         <h4>Benefits Of PPC Software -</h4>
  <ul>
    <li >Keyword Research and Optimization:		</li>
    <li>Ad Extensions for Enhanced Visibility:		</li>
    <li>Budget Optimization Strategies:		</li>
    <li>Strategic Campaign Design:	</li>
  </ul>
 <Link className='socilbut' to={"/ppc"}> <button>Read More<CgArrowRightO style={{marginLeft:"10px", marginBottom:"2px"}} /></button></Link>
</span>
<span><img style={{height:"400px"}} src="images/ppc.jpg" alt="web developer" />
</span>
  </div>
  <div className='ser-details' id='5th'>
<span><img style={{height:"400px"}} src="images/email.webp" alt="web developer" />
</span>
<span>
  <h2>Email Marketing</h2>
  <p> <b style={{color:"red"}}>Raw Media</b>"Welcome to the heartbeat of personalized communication in the digital age—Email Marketing. 				</p>
  <h4>Benefits Of Email Marketing Software -</h4>
  <ul>
    <li >Strategic Campaign Planning:		</li>
    <li>List Segmentation Expertise:		</li>
    <li>Compelling Email Copywriting:		</li>
    <li>Analytics and Reporting Precision:		</li>
  </ul>
<Link className='socilbut' to={"'/email'"}> <button>Read More<CgArrowRightO style={{marginLeft:"10px", marginBottom:"2px"}} /></button></Link> 
</span>
  </div>
  <div className='ser-details' id='6th'>

<span>
  <h2>Content Marketing</h2>
  <p> <b style={{color:"red"}}>Raw Media</b>"Welcome to the heart of digital storytelling—Content Marketing. As your dedicated media partner, we're excited to guide you</p>
 <h4>Benefits Of Education Software -</h4>
  <ul>
    <li >Strategic Content Planning:	</li>
    <li>Visual Storytelling Magic:	</li>
    <li>E-book and Whitepaper Expertise:		</li>
    <li>Influencer Collaboration:	</li>
  </ul>
 <Link className='socilbut' to={"/contectm"}><button>Read More<CgArrowRightO style={{marginLeft:"10px", marginBottom:"2px"}} /></button></Link> 
</span>
<span><img style={{height:"400px"}} src="images/design-mini.png" alt="web developer" />
</span>
  </div>
  <div className='ser-details' id='7th'>
  <span><img style={{height:"400px"}} src="images/lead.webp" alt="web developer" />
</span>
<span>
  <h2>Lead Generation</h2>
  
  <p> <b style={{color:"red"}}>Raw Media</b>"Welcome to the frontier of business expansion—Lead Generation. As your dedicated media partner.</p>
   <h4>Benefits Of Lead Software -</h4>
  <ul>
    <li >Strategic Campaign Planning:		</li>
    <li>Paid Advertising Excellence:		</li>
    <li>Social Media Lead Generation:		</li>
    <li>SEO-Driven Lead Magnets:	</li>
  </ul>
  <Link className='socilbut' to={"/lead"}><button >Read More<CgArrowRightO style={{marginLeft:"10px", marginBottom:"2px"}} /></button></Link>
</span>

  </div>
  <div className='ser-details' id='7th'>
 
<span>
  <h2>Graphic Design & Video Editing</h2>
  
  <p> <b style={{color:"red"}}>Raw Media</b>"Step into the world of visual storytelling and brand aesthetics with our Graphic Design services. As your dedicated media partner.</p>
  <h4>Benefits Of Graphic Software -</h4>
  <ul>
    <li >Logo Design and Branding Mastery:		</li>
    <li>Infographics for Data Brilliance:		</li>
    <li>UI/UX Design for Digital Experiences:		</li>
    <li>Digital Marketing Graphics:		</li>
  </ul>
 <Link className='socilbut' to={"/grapic"}> <button>Read More<CgArrowRightO style={{marginLeft:"10px", marginBottom:"2px"}} /></button></Link>
</span>
<span><img style={{height:"400px"}} src="images/grapic.jpg" alt="web developer" />
</span>
  </div>
  <div className='ser-details' id='8th'>
  <span><img style={{height:"400px"}} src="images/social.jpg" alt="web developer" />
</span>
<span>
  <h2>Social Media Account Handling</h2>
  
  <p> <b style={{color:"red"}}>Raw Media</b>"As your dedicated media partner, we understand that managing the lifecycle of a social media account is a crucial aspect of your digital strategy.</p>
   <h4>Benefits Of SMA Handling Software -</h4>
  <ul>
    <li >Data Security and Privacy Assurance:		</li>
    <li>Communication and Notification Plans:		</li>
    <li>Legal and Compliance Consultation:		</li>
    <li>Content Archiving Strategies:		</li>
    
  </ul>
      
 <Link className='socilbut' to={"/socialm"}> <button>Read More <CgArrowRightO style={{marginLeft:"10px", marginBottom:"2px"}} /></button></Link>
</span>

  </div>
  <div className='ser-details' id='9th'>
 
<span className='bon' >
  <h2>Marketing Handling</h2>
  
  <p> <b style={{color:"red"}}>Raw Media</b>"As your dedicated media partner, we understand the intricacies of managing a comprehensive marketing strategy. 			</p>
  <h4>Benefits Of Handling Software -</h4>
  <ul>
   
    <li >Competitor Analysis and Benchmarking:		</li>
    <li>Data-Driven Insights and Analytics:		</li>
    <li>Strategic Marketing Planning:		</li>
    <li>Multichannel Marketing Mastery:		</li>
  </ul>
 <Link className='socilbut' to={"/mhend"}> <button>Read More<CgArrowRightO style={{marginLeft:"10px", marginBottom:"2px"}} /></button></Link> 
</span>
<span><img style={{height:"400px"}} src="images/media menejment[.webp" alt="web developer" />
</span>
  </div>
   <Futer></Futer>
    </>
  )
}
export default Service