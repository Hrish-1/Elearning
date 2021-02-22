import React,{useContext,useState,useEffect} from 'react'
import {QuizContext} from './QuizContext'
import './Quiz.css'
const Modal = (props) => {
  const { isModalOpen, closeModal, correct, questions} = useContext(QuizContext) 
  
  const score = {
    "problemScore" : "",
    "quizScore" : (correct/questions.length)*100
  }
  const reqBody = {
      method : 'POST',
      headers : {
          "Content-Type" : "Application/json",
          "Authorization" : `Bearer ${sessionStorage.getItem("token")}`
      },
      body : JSON.stringify(score)
  }
  const addScore = async () => {
    //console.log(score); 
    const response = await fetch(`http://localhost:8080/quiz/score/${sessionStorage.getItem("emailId")}/${props.courseName}`,reqBody);
    const data = await response;
    console.log(data);
  }
  return (
    <div
      className={`${
        isModalOpen ? 'modal-container isOpen' : 'modal-container'
      }`}
    >
      <div className='modal-content'>
        <h2>congrats!</h2>
        <p>
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
          questions correctly
           
        </p>
        <button className='close-btn btn btn-dark'
         onClick={() => {
                         addScore()
                         closeModal()
                  }}>
          play again
        </button>
      </div>
    </div>
  )
}

export default Modal