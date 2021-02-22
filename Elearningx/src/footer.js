import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BsCodeSlash } from "react-icons/bs";

function Footer(){
    return(
        <div className="container-fluid card-footer text-muted">
            
            <BsCodeSlash size="3em"/>
            
            <span>E-Learn</span>
            
        </div>


    );
}
export default Footer;