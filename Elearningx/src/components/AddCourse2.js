import React from 'react'
import 'bootstrap'
import { Link } from "react-router-dom";

const AddCourse2 = (props) => {
    return (
        <div className = "my-2">
            <p>
            <button className="btn btn-outline-info" type="button" data-toggle="collapse" data-target={`#collapse${props.index}`} aria-expanded="false" aria-controls="collapseExample">
                Course #{props.index}
            </button>
            <button onClick = {() => {props.del(props.index)}} className="btn btn-outline-danger" style = {{marginLeft : "43em"}} type="button" data-toggle="collapse" data-target={`#collapse${props.index}`} aria-expanded="false" aria-controls="collapseExample">
                Delete
            </button>
            </p>
            <div className="collapse" id={`collapse${props.index}`}>
            <div className="card card-body">
               <p>Course Name : {props.input}</p>
              <p>Course Image : <img src="" />{props.output}</p>
            </div>
            <div>
               <Link to={`/AddQuiz/${props.input}`}> 
               <button className="btn btn-primary col-md-4">
                   Add Quiz for {props.input}
                </button>
                </Link>
               {/* <Link to = {`/test/${props.input}`}>
               <button className="btn btn-success col-md-4 offset-md-4">Add problem for {props.input}</button>
               </Link> */}
            </div>   
            </div>
        </div>
    )
}
//Testcase.js
export default AddCourse2
