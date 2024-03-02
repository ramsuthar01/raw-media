import '../component/contect.css'
import {Link} from 'react-router-dom'
import Futer from './fouter'
import { useState } from "react"
import axios from 'axios'
import {ToastContainer, toast} from "react-toastify"


function Contect(){
let [name,setName]=useState("")
let [email,setEmail]=useState("")
let [num,setNum]=useState()
let [message,setMessage]=useState("")

function done(){
    axios.post("http://localhost:3003/register",{email:email,name:name,number:num,message:message}).then((data,err)=>{
if(data){
    toast.success("succesfull submit")
    console.log(data)
}
else{
    toast.error("please check you fild")
    console.log(err)
}
    })
}
    return(
        <>

        <div className="con">
          <Link to={"/"} style={{color:'black',textDecoration:"none"}}> <h2>Home</h2></Link>
            <h2 style={{color:"#f58634"}}>Contect Us</h2>
        </div>
        <div className="tex">
        <h1>Let’s build something great together!</h1>
        </div>
        <p className="fw">Just take one step forward and we can build history.</p>
        <div className='row'> 
            <div className="col-7 nam" >
                <lable >Full-Name</lable><br></br>
                <input placeholder="Your Full Name" className='form-control inp' onInput={(e)=>{setName(e.target.value)}}></input>
            </div>
            
            <div className="col-7 nam" >
                <lable>Email id</lable><br></br>
                <input placeholder="Your Email" className='form-control inp' onInput={(e)=>{setEmail(e.target.value)}}></input>
            </div>
            <div className="col-7 nam" >
                <lable>Contect Number</lable><br></br>
           

<input placeholder="Your Contect Number" className='form-control inp' onInput={(e)=>{setNum(e.target.value)}}></input>
            </div>
            <div className="col-7 nam" >
                <lable>Message</lable><br></br>
                <input placeholder="Message" className='form-control inp' style={{height:"100px"}} onInput={(e)=>{setMessage(e.target.value)}}></input>
            </div>
            
        </div>
        <div className="butten">
        <button className='but'onClick={()=>{done()}}>Submit</button>
        </div>
        <div className='map-div'>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1336239566904!2d75.73897797450326!3d26.867495362033992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5cd7b34b1ef%3A0xbf05011741b78a9!2sBalaji%20Apartment!5e0!3m2!1sen!2sin!4v1708605982754!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
<ToastContainer></ToastContainer>
        <Futer></Futer>
        </>
    )
}
export default Contect