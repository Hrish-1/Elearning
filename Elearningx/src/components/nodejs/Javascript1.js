import React from 'react'
import {SiNodeDotJs} from 'react-icons/si'
import Tutorial from '../Tutorial'
import icon from './js.png'
import icon2 from './js2.png'

const Nodejs1 = () => {
    const logo={"Lname":icon,
              "Lname2":icon2
            }
    return (
        <div>
            <Tutorial icons = {logo.Lname} name = "Javascript" language = "javascript" next="/Javascript2" icon2={logo.Lname2}
            theoryContent = {   
            <div className="TutorialPadding">
                <h4 className="Thead">Getting Started With JavaScript</h4>
                In this tutorial, you will learn about different ways to run JavaScript on your computer.<br/><br/>
                JavaScript is a popular programming language that has a wide range of applications.<br/><br/>
                JavaScript was previously used mainly for making webpages interactive such as form validation, animation, etc. Nowadays, JavaScript is also used in many other areas such as server-side development, mobile app development and so on.<br/><br/>
                Because of its wide range of applications, you can run JavaScript in several ways:<br/>
                <ul>
                    <li>Using console tab of web browsers</li>
                    <li>Using Node.js</li>
                    <li>By creating web pages</li>
                </ul>
                <hr/>

                <h4 className="Thead">JavaScript Variables and Constants</h4>
                In this tutorial, you will learn about JavaScript variables and constants, and also how to initialize and use them with the help of examples.
                <br/><br/>
                <h4 className="Thead">JavaScript Variables</h4>
                In programming, a variable is a container (storage area) to hold data. For example,<br/><br/>
                <code>let num = 5;</code>
                Here, <code>num</code> is the variabe that holds the number 5.<br/><hr/>
                <h4>JavaScript Declare Variables</h4>
                In JavaScript, we use the following keywords to declare variables: <code>var</code> and <code>let</code>. For example,
                <div className="card card-body">
                    <pre>
                        var x;<br/>
                        let y;
                    </pre>    
                </div> 
                Here, x and y are variables.<br/><hr/>
                <h4 className="Thead">JavaScript var Vs let</h4>
                Both <code>var</code> and <code>let</code> are used to declare variables.<br/><br/> However, there are some differences between them.
                <div class="card card-body">
                            <pre>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                      <th scope="col">var</th>
                                      <th scope="col">let</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td><code>var is used in the older versions of JavaScript</code></td>
                                      <td><code>let is the new way of declaring variables starting ES6 (ES2015)</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>var is function scoped (will be discussed in later tutorials)</code></td>
                                      <td><code>let is block scoped (will be discussed in later tutorials).</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>For example, var x;</code></td>
                                      <td><code>For example, let y;</code></td>
                                    </tr> 
                                  </tbody>
                                </table>
                            </pre>
                           </div>  
                           <hr/>
                           <h4 className="Thead">JavaScript Initialize Variables</h4>
                           We use the assignment operator <code>=</code> to assign a value to a variable.
                            <div className="card card-body">
                                <pre>
                                    let x;<br/>
                                    x=5;
                                </pre>
                            </div>  
                            Here, 5 is assigned to variable <code>x</code>.<br/><br/>
                            You can also initialize variables during its declaration.
                            <div className="card card-body">
                                <pre>
                                let x = 5;<br/>
                                let y = 6;
                                </pre>
                            </div>
                            In JavaScript, it's possible to declare variables in a single statement.
                            <div className="card card-body">
                                <pre>
                                    let x = 5, y = 6, z = 7;  
                                </pre>
                            </div>
                            <hr/>
                            If you use a variable without initializing it, it will have an <code>undefined</code> value.
                            <div className="card card-body">
                                <pre>
                                let x; // x is the name of the variable
                                <br/><br/>    
                                console.log(x); // undefined
                                </pre>
                            </div>
                            Here <code>x</code> is the variable name and since it does not contain any value, it will be undefined.
                            <br/><br/>
                            You will learn about <code>undefined</code> and other data types in the next tutorial in detail.<br/><hr/>
                            <h4 className="Thead">Change the Value of Variables</h4>
                            It's possible to change the value stored in the variable. For example,<br/>
                            <div className="card card-body">
                                <pre>
                                // 5 is assigned to variable x<br/>
                                let x = 5;<br/> 
                                console.log(x); // 5<br/>
                                // vaue of variable x is changed<br/>
                                x = 3; <br/>
                                console.log(x); // 3
                                </pre>
                            </div>
                            The value of a variable may vary. Hence, the name variable.
                            <hr/>

            </div>    
            
        }/>
        </div>
    )
}

export default Nodejs1
