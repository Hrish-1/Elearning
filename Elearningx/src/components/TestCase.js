import React from 'react'
import 'bootstrap'
const TestCase = (props) => {
    return (
        <div className = "my-2">
            <p>
            <button className="btn btn-outline-info" type="button" data-toggle="collapse" data-target={`#collapse${props.index}`} aria-expanded="false" aria-controls="collapseExample">
                TestCase #{props.index}
            </button>
            <button onClick = {() => {props.del(props.index)}} className="btn btn-outline-danger" style = {{marginLeft : "43em"}} type="button" data-toggle="collapse" data-target={`#collapse${props.index}`} aria-expanded="false" aria-controls="collapseExample">
                Delete
            </button>
            </p>
            <div className="collapse" id={`collapse${props.index}`}>
            <div className="card card-body">
               <p>input : {props.input}</p>
               <p>output : {props.output}</p>
            </div>
            </div>
        </div>
    )
}

export default TestCase
