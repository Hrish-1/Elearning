import React from "react";
import Nav from "./Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BsCodeSlash } from "react-icons/bs";

function Forgot(){
    return(
        
        <div className="container-fluid p-0">
            <Nav /> 
            <div className="row">
            <div className="col-4">
            </div>
            <div className="col-4 border border-primary mt-5 bg-light">
                <div className="forgotHeading mt-2">
                    <BsCodeSlash size="3em" color="black"/>
                    <span className="">ELearn</span>
                    <h3>Reset your password</h3>
                </div>
                <div className="mt-5 forgotE">
                    <label>Enter your Email account registered with us</label>
                    <input type="text" className="form-control w-75 ml-5"/>
                </div>
                <div className="mt-3 testing mb-5">
                    <input class="btn btn-success" value="Submit" />
                </div>
                    
                
            </div>
            <div className="col-4">
            </div>
            </div>         

        </div>


    );

}
export default Forgot;