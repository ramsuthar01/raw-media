function Fom(){
    return(
        <>
        <div className="tex">
        <h1>Let’s build something great together!</h1>
        </div>
        <p className="fw">Just take one step forward and we can build history.</p>
        <div className='row'> 
            <div className="col-7 nam" >
                <lable >Full-Name</lable><br></br>
                <input placeholder="Your Full Name" className='form-control inp'></input>
            </div>
            
            <div className="col-7 nam" >
                <lable>Email id</lable><br></br>
                <input placeholder="Your Email" className='form-control inp'></input>
            </div>
            <div className="col-7 nam" >
                <lable>Contect Number</lable><br></br>
           

<input placeholder="Your Contect Number" className='form-control inp' ></input>
            </div>
            <div className="col-7 nam" >
                <lable>Message</lable><br></br>
                <input placeholder="Message" className='form-control inp' style={{height:"100px"}}></input>
            </div>
            
        </div>
        <div className="butten">
        <button className='but'>Submit</button>
        </div>
        </>
    )
}
export default Fom