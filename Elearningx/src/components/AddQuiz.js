import React,{useState} from "react"
import Navbar from '../Navbar'
import 'bootstrap'
import AddQuiz2 from './AddQuiz2'
import {Link} from 'react-router-dom'

const AddQuiz = ({match}) => {
    const [quizContent,setQuizContent] = useState({
        "question" : "",
        "topic" : "",
        "correct_answer" : "",
        "incorrect_answer1" : "",
        "incorrect_answer2" : "",
        "incorrect_answer3" : ""
    });
    const [quizData,setQuizData] = useState([]);
    
    const handleChange = (e) => {
        const {name,value} = e.target;
        setQuizContent(prevValue => {
            return {...prevValue,[name] : value}
        })
    }
    const addTestCase = () => {
        console.log(quizContent);
        const {question,correct_answer,incorrect_answer1,incorrect_answer2,incorrect_answer3,topic} = quizContent;
        setQuizData( prev => [...prev,{question,correct_answer,topic,"incorrect_answers" : [incorrect_answer1,incorrect_answer2,incorrect_answer3]}]);
        //setTestCases([...testContent,testCase]);
        setQuizContent({
            "question" : "",
            "topic" : "",
            "correct_answer" : "",
            "incorrect_answer1" : "",
            "incorrect_answer2" : "",
            "incorrect_answer3" : ""
        });
        //setTestCases([]);
       
        console.log(quizData);
    }
    const reqBody = {
        method : 'POST',
        headers : {
            "Content-Type" : "Application/json",
            "Authorization" : `Bearer ${sessionStorage.getItem("token")}`
        },
        body : JSON.stringify(quizData)
    }
    const addQuiz = async () => {

        const response = await fetch(`http://localhost:8080/quiz/add/${match.params.id}`,reqBody);
        const data = await response;
        console.log(data);

    }
    const deleteCourse = (id) => {
        setQuizData(prev => {
            return prev.filter((testcase,index) => {
                return index !== id;
            })
        })
    }
return(
    <div className="container-fluid p-0">
        <Navbar />
        <div className = "d-flex justify-content-center ">
        <h3 className="Thead addNew p-3">Add Quiz</h3>
        </div>
        <div className="row">
            <div className = "col-2"></div>
            <div className = "col-8">
                <div className="input-group">
                <h5 className="Thead">Question:</h5>
                <textarea type="text" name="question" cols="130" rows="2" value = {quizContent.question} onChange = {handleChange}/>
                <div>
                <h5 className="Thead mt-3">Topic:</h5>
                <input type="text" name = "topic" value = {quizContent.topic} onChange = {handleChange} placeholder = "Enter quiz topic"/>
                </div>
                </div>
                <div>
                <h5 className="Thead mt-4">Options:</h5>
                <input className="my-1" type = "text"  name="correct_answer" cols="30" rows="2" value = {quizContent.correct_answer} onChange = {handleChange} placeholder="CORRECT ANSWER"/><br/>
                <input className="my-1" type = "text"  name="incorrect_answer1" cols="30" rows="2" value = {quizContent.incorrect_answer1} onChange = {handleChange} placeholder="INCORRECT ANSWER" /><br/>
                <input className="my-1" type = "text"  name="incorrect_answer2" cols="30" rows="2" value = {quizContent.incorrect_answer2} onChange = {handleChange} placeholder="INCORRECT ANSWER" /><br/>
                <input className="my-1" type = "text"  name="incorrect_answer3" cols="30" rows="2" value = {quizContent.incorrect_answer3} onChange = {handleChange} placeholder="INCORRECT ANSWER" /><br/>
                </div>
            <input type = "button" className = "btn btn-primary mb-3 mt-3" onClick = {addTestCase} value = "Add"/>
            <ul style = {{listStyle : "none"}}>
                {
                quizData.map((quiz,index) => (
                    <li> 
                        <AddQuiz2
                             key = {index}
                             index = {index}
                             del = {deleteCourse}
                             question = {quiz.question}
                             topic = {quiz.topic} 
                             option1 = {quiz.correct_answer} 
                             option2 = {quiz.incorrect_answers[0]} 
                             option3 = {quiz.incorrect_answers[1]} 
                             option4 = {quiz.incorrect_answers[2]} 
                        />
                    </li>
                ))
                }
            </ul>
            <Link to = {`/test/${match.params.id}`}> 
            <button className = "btn btn-outline-success" onClick = {addQuiz}>Submit</button>
            </Link>
            </div>
             <div className = "col-2"></div> 
        </div>
        

    </div>
);
}

export default AddQuiz