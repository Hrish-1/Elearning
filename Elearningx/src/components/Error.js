import React from 'react'
import ErrorImg from "../images/error4.jpg"
import "bootstrap"
import Navbar from '../Navbar'
import { Link } from "react-router-dom";

function Error(){
    const img={
        "Ename":ErrorImg
    
                }
    return(
        <div>
            <Navbar />
            <div className="container">
                <div>   
                    <img src={img.Ename} style={{"width" : "1000px" , "height" : "600px"}} />
                </div> 

                <div className="container">
                    <div className="row">
                    <div className="col-sm"></div>    
                    <div className="col-sm">
                        <Link to = "login"><button className="btn btn-outline-primary">GO BACK</button></Link>
                    </div>
                    <div className="col-sm"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Error