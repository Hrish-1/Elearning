import React,{useState,useEffect} from 'react'
import { EditorState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Test.css'
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import 'bootstrap'
import NavBar from '../Navbar'
import {NavBar2} from '../NavBar2'
import Test2 from './Test2'
import Immutable from 'immutable'
import TestCase from './TestCase'
import {Link} from 'react-router-dom'

const Test = ({match}) => {

    const [isLogged,setIsLogged] = useState(sessionStorage.getItem("token"));

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    
    const  [convertedContent, setConvertedContent] = useState(null);

    const [problemData,setProblemData] = useState({
        "problemName" : "",
        "difficulty" : "Easy",
        "tags" : match.params.id
    });
    
    const [problem,setProblem] = useState({
        "problemName" : "",
        "difficulty" : "",
        "tags" : "",
        "description" : "",
        "testCases" : ""
    });
    const [testObject,setTestObject] = useState({});
    const [counter,setCounter] = useState(0);

    const handleEditorChange = (state) => {
      setEditorState(state);
      convertContentToHTML();
    }
    const convertContentToHTML = () => {
      let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
      setConvertedContent(currentContentAsHTML);
      console.log(convertedContent);
    }
    const createMarkup = (html) => {
        return  {
          __html: DOMPurify.sanitize(html)
        }
    }
    const [testContent,setTestContent] = useState({
        "input" : "",
        "output" : ""
    });
    const [testCases,setTestCases] = useState([]);




    const handleProbDetails = (e) => {
        const {name,value} = e.target;
        setProblemData(prev => {
                return {...prev,[name] : value}
        })
    }

    const handleChange = (e) => {
        const {name,value} = e.target;
        setTestContent(prevValue => {
            return {...prevValue,[name] : value}
        })
    }

    const addTestCase = () => {
        console.log(testContent);

        setTestCases( prev =>{
                return [...prev,testContent]
        });
        // const {input,output} = testContent;

        // setTestObject(prev => {
        //         return {
        //             ...prev,
        //             [input] : output
        //         }  
        // })

        const {problemName,difficulty,tags} = problemData;
        setProblem( prev =>{

                return {
                        ...prev,
                        problemName,
                        difficulty,
                        tags,
                        "description" : convertedContent,
                        testCases
                }
        })
        

        //setCounter(prev => prev + 1);

        setTestContent({
            "input" : "",
            "output" : ""
        });

        console.log(testCases);
    }

    const reqBody = {
        method : 'POST',
        headers : {
            'Content-Type' : 'Application/json',
            "Authorization" : `Bearer ${sessionStorage.getItem("token")}`
        },
        body : JSON.stringify(problem)
    }

    const submitProblem = async () => {
        
        const reponse = await fetch(`http://localhost:8080/problem/add/${match.params.id}`,reqBody);
        const data = await reponse;
        console.log(data);
         console.log(problem);
    }

    const deleteTest = (id) => {
        setTestCases(prev => {
            return prev.filter((testcase,index) => {
                return index !== id;
            })
        })
    }

    return (
        <div className = "container-fluid p-0">
              {isLogged ? <NavBar2 /> : <NavBar /> } 
            <div className = "row">
                <div className = "col-2"></div>
                <div className = "col-8">
                    <h4 className = "mx-3 my-3 text-center">Create a new problem</h4>
                    <div>
                        <p className = "mt-3">problem name</p>
                        <input type="text" name = "problemName" onChange = {handleProbDetails} className = "form-control" style = {{height : "35px",width : "400px"}} />
                        <p className = "mt-3">select difficulty</p>
                        <select name="difficulty" id="difficulty" onChange = {handleProbDetails}
                        style = {{width : "150px",height : "30px",outline : "none"}}
                        >
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    <p className = "mt-3">tags</p>
                    <input type="text" name = "tags" defaultValue = {problemData.tags} className = "form-control" style = {{height : "35px",width : "400px"}} />
                    </div>
                </div>
                <div className = "col-2"></div>
            </div>
            <div className = "row">
            <div className = "col-2"></div>
                <div className = "col-8">
                <p className = "mt-3">Description</p>
                    <Editor 
                        editorState={editorState}
                        onEditorStateChange={handleEditorChange}
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                   />
                    <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>

                    <p className = "mt-3">Test Cases</p>
                    <div>
                        <p>input</p>
                        <textarea name="input" id="" cols="30" rows="2" value = {testContent.input} onChange = {handleChange}/>
                        <p>output</p>
                        <textarea name="output" id="" cols="30" rows="2" value = {testContent.output} onChange = {handleChange}/><br/>
                        <input type = "button" className = "btn btn-outline-secondary mb-3" onClick = {addTestCase} value = "Add"/>
                        <ul style = {{listStyle : "none"}}>
                         {
                            testCases.map((testcase,index) => (
                                <li> <TestCase key = {index} index = {index} del = {deleteTest} input = {testcase.input} output = {testcase.output} /></li>
                            ))
                         }
                        </ul>  
                    </div>
                        <Link to = "/AddCourse">
                        <input
                        type = "button" 
                        className = "btn btn-outline-success" 
                        value = "Submit" onClick = {() => {
                            submitProblem()
                        }} />
                        </Link>
                </div>
                <div className = "col-2"></div>
            </div>
            
        </div>
    )
}

export default Test
