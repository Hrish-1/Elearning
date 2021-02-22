import React,{useState} from "react";
import Nav from "./Navbar";
import {Link} from 'react-router-dom'

function Register(){
    const [user,setUser] = useState({
            "firstName" : "",
            "lastName" : "",
            "emailId" : "",
            "mobileNo" : "",
            "password" : "",
    });
    const reqBody = {
        method : 'POST',
        headers : { 'Content-type': 'application/json',
        'Access-Control-Allow-Origin' : '*'},
        // body : JSON.stringify({
        //     "firstName" : user.firstName,
        //     "lastName" : user.lastName,
        //     "emailId" : user.emailId,
        //     "mobileNo" : user.mobileNo,
        //     "password" : user.password
        // })
        body : JSON.stringify(user)
    };
    const postUser = async () => {
        const response = await fetch('http://localhost:8080/register',reqBody);
        const data = await response;
        console.log(data);
    }
    const handleChange = (e) => {
        const {name,value} = e.target;

        setUser( prevValue => {
            return {
                ...prevValue,
                [name] : value
            }
        })
    }
   return(
    <div>
        <nav>
            <Nav />
        </nav>
       <div className="container">
            <div className="row">
                <div className = "col-sm-6">
                <img src={process.env.PUBLIC_URL + "/hero-b.png"} alt = "" />
                </div>

                <div className = "col-sm-6">
                    <div className="mt-3">
                        <h3>Get Started for Free</h3>
                        <div className="mt-3">
                            <label>First Name</label>
                            <input name = "firstName" type="text" onChange = {handleChange} className="form-control w-75"/>
                        </div>
                        <div className="mt-3">
                            <label>Last Name</label>
                            <input name = "lastName" onChange = {handleChange} type="text" className="form-control w-75"/>
                        </div>
                        <div className="mt-3">
                            <label>Email</label>
                            <input name = "emailId" onChange = {handleChange} type="text" className="form-control w-75"/>
                        </div>
                        {/* <div className="mt-3">
                            <label>Username</label>
                            <input name = "" type="text" className="form-control w-75"/>
                        </div> */}
                        <div className="mt-3">
                            <label>Mobile Number</label>
                            <input name = "mobileNo" onChange = {handleChange} type="text" className="form-control w-75"/>
                        </div>
                        <div className="mt-3">
                            <label>Password</label>
                            <input name = "password" onChange = {handleChange} type="password" class="form-control w-75" />
                        </div>
                        <div className="mt-3">
                            <label>Confirm Password</label>
                            <input name = "cfpwd" type="password" class="form-control w-75" />
                        </div>
                        <Link to = "/Login" style = {{textDecoration : "none"}}>
                        <div className="mt-3" onClick = {() => {postUser()}}>
                                <input class="btn text-light" type = "button" value="Sign Up" style={{"backgroundColor" : "#3f72af"}}/>
                        </div>
                        </Link>
                    </div>        
                </div>    
            </div>    
       </div>       
    </div>
   )    

}

export default Register;