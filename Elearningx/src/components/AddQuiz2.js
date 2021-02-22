import React from 'react'
import 'bootstrap'
const AddCourse2 = (props) => {
    return (
        <div className = "my-2">
            <div className = "d-flex justify-content-between">
            <button className="btn btn-outline-info" type="button" data-toggle="collapse" data-target={`#collapse${props.index}`} aria-expanded="false" aria-controls="collapseExample">
                Question #{props.index+1}
            </button>
            <button onClick = {() => {props.del(props.index)}} className="btn btn-outline-danger" type="button" data-toggle="collapse" data-target={`#collapse${props.index}`} aria-expanded="false" aria-controls="collapseExample">
                Delete
            </button>
            </div>
            <div className="collapse" id={`collapse${props.index}`}>
            <div className="card card-body">
               <p>Question : {props.question}</p>
               <p>Topic : {props.topic}</p>
               <p>Option1   : {props.option1}</p>
               <p>Option2  : {props.option2}</p>
               <p>Option3  : {props.option3}</p>
               <p>Option4  : {props.option4}</p>
            </div>
               
            </div>
        </div>
    )
}
//Testcase.js
export default AddCourse2
