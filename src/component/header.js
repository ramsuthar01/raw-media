import { Link } from "react-router-dom"
import "../component/home.css"
import Futer from "./fouter"
import { RiMenu3Line } from "react-icons/ri";
function Header(){
return(
    <>
    <div className="head fixed-top">
       <Link to={"/"}style={{textDecoration:"none" ,color:"white"}}> <h1>RAW</h1> </Link>
       <div className='h4'>
        <Link to={"/service"} style={{color:"white",textDecoration:"none"}}> <h4>Service</h4></Link>
      <Link to={"/proudect"} style={{color:"white",textDecoration:"none"}}>  <h4 style={{cursor:"pointer"}}>Product</h4></Link> 
       <h4 style={{cursor:"pointer"}}>Portfolio</h4>
        <Link to={'/about'}style={{color:"white",textDecoration:"none"}}><h4>About Us</h4> </Link>
        <Link to={'/contect'} style={{color:"white",textDecoration:"none"}}><h4>Contact</h4></Link>
       <i> <RiMenu3Line /></i>
        </div>
        
    </div>
    

    {/* <Futer></Futer> */}
    </>
)
}
export default Header