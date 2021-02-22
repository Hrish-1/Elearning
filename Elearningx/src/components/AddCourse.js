import React,{useEffect, useState} from 'react'
import Navbar from '../Navbar'
import 'bootstrap'
import {Link} from 'react-router-dom'
import AddCourse2 from './AddCourse2'
import Course from './Course'
import {NavBar2} from '../NavBar2'

const AddCourse = () => {
    const [courseContent,setCourseContent] = useState({
        "courseName" : "",
        "photo" : ""
    });
    const [courses,setCourses] = useState([]);
    const [isLogged,setIsLogged] = useState(sessionStorage.getItem("token"));
    const fetchAllCourses = async () => {
        const response = await fetch('http://localhost:8080/course/get');
        const data = await response.json();
        console.log(data);
        setCourses(data);
    }
    useEffect(() =>{
        fetchAllCourses();
    },[]);
    const [testCase,setTestCases] = useState([]);

    const handleChange = (e) => {
        const {name,value} = e.target;
        setCourseContent(prevValue => {
            return {...prevValue,[name] : value}
        })
    }
    const reqBody = {
        method : 'POST',
        headers : {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin" : "*",
            "Authorization" : `Bearer ${sessionStorage.getItem("token")}`
        },
        body : JSON.stringify(courseContent)
    }
    const addCourse = async () => {
        console.log(sessionStorage.getItem("token"));
        console.log(courseContent);
        setTestCases( prev => [...prev,courseContent]);
        //setTestCases([...testContent,testCase]);
        setCourseContent({
            "courseName" : "",
            "photo" : ""
        });
        //setTestCases([]);
        console.log(testCase);

        const response = await fetch('http://localhost:8080/course/add',reqBody);
        const data = await response;
        console.log(data);
    }

    const deleteCourse = (id) => {
        setTestCases(prev => {
            return prev.filter((testcase,index) => {
                return index !== id;
            })
        })
    }

    


    return(
        <div className="container-fluid p-0">
            {isLogged ? <NavBar2 /> : <Navbar/>}
            <div className =" my-4 d-flex justify-content-center">
            <h3 className="Thead addNew">Add New Course</h3>
            </div>
            <div className="row">
                <div className = "col-2"></div>
                <div className = "col-8">
                    <h5 className="Thead">New Course Name:</h5>
                    <textarea name="courseName" id="" cols="30" rows="2" value = {courseContent.courseName} onChange = {handleChange}/>
                    <br/>
                    <h5>photo:</h5>
                    <input type="text" name = "photo" value = {courseContent.photo} onChange={handleChange}/><br/>
                    <input type = "button" className = "btn btn-primary my-2" onClick = {addCourse} value = "Add"/><br/>
                {/* <ul style = {{listStyle : "none"}}>
                    {
                    testCase.map((testcase,index) => (
                        <li> <AddCourse2 key = {index} index = {index} del = {deleteCourse} input = {testcase.courseName} output = {testcase.photo} /></li>
                    ))
                    }
                </ul>  */}
                <button className = "btn btn-success" onClick = {fetchAllCourses}>Submit</button>
                <div className="courses-offered">
                    <p className = "my-1 mx-4 mt-4">ALL COURSES</p>
                    <div className = "d-flex flex-wrap ml-4">
                        { courses.map( (course,index) => (
                            <Link to = {`/AddQuiz/${course.courseName}`} style = {{textDecoration : "none"}}><Course title = {course.photo} info = {course.courseName}/></Link> 
                        ))}
                    </div>
                </div>

                </div>
                <div className = "col-2"></div>  
            </div>




        </div>
    );
}

export default AddCourse