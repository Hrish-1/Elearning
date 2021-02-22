import React, { useState } from 'react';
import NavBar from "./Navbar";
import Register1 from './Register1';
import './Form.css';
import Login from './Login';
import FormSuccess from './FormSuccess'

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <nav>
            <NavBar />
        </nav>
      <div className='form-container'>

        <span className='close-btn'>×</span>
        <div className='form-content-left'>
        <img src={process.env.PUBLIC_URL + "/hero-b.png"} />
        </div>
        {!isSubmitted ? (
          <Register1 submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;