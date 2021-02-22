import React from "react";
import Nav from "./Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BsCodeSlash } from "react-icons/bs";

function ForgotPass() {
    return (

        <div className="container-fluid">
            <div className="row">
                <Nav />
            </div>
            <div className="row">
                <div className="col-4">
                </div>
                <div className="col-4 border border-primary mt-5 bg-light">
                    <div className="forgotHeading mt-2">
                        <BsCodeSlash size="3em" color="black" />
                        <span className="">ELearn</span>
                        <h3>Reset your password</h3>
                    </div>
                    <div className="mt-5 forgotE">
                        <label>Password</label>
                        <input type="text" className="form-control w-75 ml-5" />
                    </div>
                    <div className="mt-5 forgotE">
                        <label>Confirm Password</label>
                        <input type="text" className="form-control w-75 ml-5" />
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
export default ForgotPass;