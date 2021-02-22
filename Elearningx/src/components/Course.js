import React,{useState} from 'react';
import './Course.css';
import { AiOutlineArrowRight } from "react-icons/ai";
import {Link} from 'react-router-dom'
 import 'bootstrap';

function Course(props) {
    
    return (
            <div className="card shadow-lg rounded mx-4 my-4 card__main" style={{"width" : "14em" , "height" : "12em"}}>
                <div style = {{"backgroundColor" : "#f9f7f7"}}>
                    <img src={props.title} height = "100px" width = "100px" alt="..."/>
                </div>
            <div className="card-body" style = {{"backgroundColor" : "#dbe2ef"}}>
                <p className="card-text lang__name" style={{"color" : "#112d4e"}}>{props.info} <br/> PROGRAMMING</p>
                <p style={{"color" : "#3f72af","fontWeight" : "500","fontSize" : "18px"}}>learn <AiOutlineArrowRight/></p> 
            </div>
            </div>
    )
}

export default Course
