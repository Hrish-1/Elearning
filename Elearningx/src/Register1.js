import React,{useState} from "react";
import Nav from "./Navbar";
import validate from './validateInfo';
import {Link} from 'react-router-dom';
import useForm from './useForm';


const Register1 = ({ submitForm }) => {
    const { handleChange , postUser , user , errors } = useForm(
        submitForm,
        validate
    );

    return (
        <div className='form-content-right'>

          <form onSubmit={postUser} className='form' noValidate>
        
            <div className='form-inputs'>
              <label className='form-label'>firstName</label>
              <input
                className='form-input'
                type='text'
                name='firstName'
                placeholder='Enter your firstName'
                value={user.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p>{errors.firstName}</p>}
            </div>

            <div className='form-inputs'>
              <label className='form-label'>lastName</label>
              <input
                className='form-input'
                type='text'
                name='lastName'
                placeholder='Enter your lastName'
                value={user.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p>{errors.lastName}</p>}
            </div>

            <div className='form-inputs'>
              <label className='form-label'>Email</label>
              <input
                className='form-input'
                type='email'
                name='emailId'
                placeholder='Enter your email'
                value={user.emailId}
                onChange={handleChange}
              />
              {errors.emailId && <p>{errors.emailId}</p>}
            </div>


            <div className='form-inputs'>
              <label className='form-label'>Phone Number </label>
              <input
                className='form-input'
                type='text'
                name='mobileNo'
                placeholder='Enter your Phone Number'
                value={user.mobileNo}
                onChange={handleChange}
              />
              {errors.mobileNo && <p>{errors.mobileNo}</p>}
            </div>


            <div className='form-inputs'>
              <label className='form-label'>Password</label>
              <input
                className='form-input'
                type='password'
                name='password'
                placeholder='Ente your password'
                value={user.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>

            <div className='form-inputs'>
              <label className='form-label'>Confirm Password</label>
              <input
                className='form-input'
                type='password'
                name='cfpwd'
                placeholder='Confirm your password'
                value={user.cfpwd}
                onChange={handleChange}
              />
              {errors.cfpwd && <p>{errors.cfpwd}</p>}
            </div>
            {/* <Link to = "/Login"> */}
            <button className='form-input-btn' style = {{width : "120px"}} type='submit'>
              Sign up
            </button>
            {/* </Link> */}
            <span className='form-input-login' style ={{color : "#51c2d5"}}>
              Already have an account? Login <a href='Login'>here</a>
            </span>
          </form>
        </div>
      );
    };
export default Register1;