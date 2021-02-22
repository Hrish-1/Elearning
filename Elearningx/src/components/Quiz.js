import React,{useContext, useState,useEffect} from 'react'
import {QuizContext} from './QuizContext'
import 'bootstrap'
import './Quiz.css'
import Navbar from '../Navbar'
import {NavBar2} from '../NavBar2'
import backg from '../images/quiz-background.jpg'
import Modal from './Modal'

export const Quiz = ({match}) => {
    const {questions,fetchQuestions,correct,index,checkAnswer} = useContext(QuizContext);
    //const [correct,setCorrect] = useState(0);
    //const [index,setIndex] = useState(0);
    const [isLogged,setIsLogged] = useState(sessionStorage.getItem("token"));
    useEffect(() =>{
            fetchQuestions(match.params.id);
    },[]);

    const { question, correct_answer, incorrect_answers } = questions[index];

    let answers = [...incorrect_answers];
    const tempIndex = Math.floor(Math.random() * 4)
    if (tempIndex === 3) {
      answers.push(correct_answer)
    } else {
      answers.push(answers[tempIndex])
      answers[tempIndex] = correct_answer
    }
    
    const backgroundStyle = {
        background : `linear-gradient(rgba(0, 0, 0, 0.69),rgba(0, 0, 0, 0.69)),url(${backg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      };
    
    return (
        <div className="container-fluid p-0">
            {isLogged ? <NavBar2 /> : <Navbar/>}
            <Modal courseName = {match.params.id}/>
            <div style = {backgroundStyle} className = "hero-image">
            <div className = "d-flex align-items-end  justify-content-center" style = {{height : "20vh"}}>
            <p className = "correct-answers" style = {{margin : "0px 0px 0px 45em"}}>correct answers {correct}/{questions.length}</p>
            </div>
            <div className = "d-flex justify-content-center align-items-center" style = {{height : "50vh"}}>
            <div>
                <h4 className = "mb-4 text-light" dangerouslySetInnerHTML = {{__html : question}}/>
                <div className = "d-flex flex-column align-items-center">
                    {answers.map((answer,index) => (
                        <button className = "btn btn-outline-light"
                        style={{width : "25em",margin : "0.5em 0.5em"}}
                        key = {index}
                        onClick = {() => {checkAnswer(answer === correct_answer)}}>
                        {answer}</button>
                    ))}
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}
