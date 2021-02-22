import React,{useState} from "react";
import Navbar from "../Navbar";
import Footer from '../footer';
import 'bootstrap';
import './Tutorial.css';
import { BsBook } from "react-icons/bs";
import { FcAddressBook } from "react-icons/fc";
import { FaLaptopCode } from "react-icons/fa";
import Editor from './Editor'
import { VscOutput } from "react-icons/vsc";
import { Link } from "react-router-dom";
import TabNav from './TabNav';
import { AiFillPropertySafety } from "react-icons/ai";
import {NavBar2} from '../NavBar2';

function Tutorial(props){

    const [isLogged,setIsLogged] = useState(sessionStorage.getItem("token"));
    return(
        <div className="container-fluid">
                {isLogged ? <NavBar2 /> : <Navbar /> } 
                <TabNav LanguageIcon={props.icon2} LanguageName={props.language} />
            <div className="row sticky-top">
                <div className="col-4 mt-5">
                    <div>
                    <div class="overflow-auto con_height borderT">
                        
                        <div className="headL sticky-top">
                            <span className = "mx-2" style = {{fontSize : "2.5em"}}><img src={props.icons} height="40px" width="40px"/></span>
                            <span className="ml-2 font-weight-bold">{props.name}</span>
                        </div>
                        <div>
                            {props.theoryContent}
                        </div>
                    </div>
                    </div>
                </div>
                <div className = "col-8 mt-5">
                    <Editor language = {props.language} icon2={props.icon2}/>
                </div>
            </div>

            <div className = "mb-4">
                <Link to={props.next}><button type="button" class="btn btn-outline-info mt-3">NEXT</button></Link>
            </div>
                      
        </div>   
    )

}

export default Tutorial;