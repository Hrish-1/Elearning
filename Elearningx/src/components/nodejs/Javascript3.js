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
            <Tutorial icons = {logo.Lname} name = "Javascript" language = "javascript" next="/Javascript4" icon2={logo.Lname2}
            theoryContent = {   
            <div className="TutorialPadding">
                <h4 className="Thead">JavaScript Data Types</h4>
                In this tutorial, you will learn about the various data types available in JavaScript with the help of examples.
                <br/><br/>
                As suggested by the name, data types refers to types of data that you can use in your program. For example,
                <div className="card card-body">
                    <pre>
                    const x = 5;
                    const y = "Hello";                    
                    </pre>
                </div> 
                Here,<br/>
                <ol>
                    <li><code>5</code> is an integer data.</li>
                    <li><code>"Hello"</code> is a string data.</li>
                 </ol>   
                <hr/>

                <h4 className="Thead">JavaScript Data Types</h4>
                There are eight basic data types in JavaScript. They are:<br/>
                <div class="card card-body">
                            <pre>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                      <th scope="col">Data Type</th>
                                      <th scope="col">Description</th>
                                      <th scope="col">Example</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td><code>String</code></td>
                                      <td><code>represents textual data</code></td>
                                      <td><code>'hello', "hello world!" etc</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>Number</code></td>
                                      <td><code>an integer or a floating-point number</code></td>
                                      <td><code>3, 3.234, 3e-2 etc.</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>BigInt</code></td>
                                      <td><code>an integer with arbitrary precision</code></td>
                                      <td><code>900719925124740999n , 1n etc.</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>Boolean</code></td>
                                      <td><code>Any of two values: true or false</code></td>
                                      <td><code>true and false</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>undefined</code></td>
                                      <td><code>a data type whose variable is not initialized</code></td>
                                      <td><code>let a;</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>null</code></td>
                                      <td><code>denotes a null value</code></td>
                                      <td><code>let a = null;</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>Symbol</code></td>
                                      <td><code>data type whose instances are unique and immutable</code></td>
                                      <td><code>let value = Symbol('hello');</code></td>
                                    </tr> 
                                  </tbody>
                                </table>
                            </pre>
                           </div>
                            <hr/>
                            <h4 className="Thead">JavaScript String</h4>
                            <code>String</code> is used to store text. In JavaScript, strings are surrounded by quotes:
                            <ul>
                               <li>Single quotes:<code> 'Hello'</code></li>
                               <li>Double quotes: <code>"Hello"</code></li>
                               <li>Backticks: <code>`Hello`</code></li>     
                            </ul>
                            For example,
                            <div className="card card-body">
                                <pre>
                                {`//strings example`}<br/>
                                const name = 'ram';<br/>
                                const name1 = "hari";
                                </pre>
                            </div>
                            Single quotes and double quotes are practically the same and you can use either of them.<br/><hr/>
                            <h4 className="Thead">JavaScript Number</h4>
                            <code>Number</code> represents integer and floating numbers (decimals and exponentials). For example   
                            <div className="card card-body">
                                <pre>
                                    const number1 = 3;<br/>
                                    const number2 = 3.433;<br/>
                                    const number3 = 3e5 {`// 3 * 10^5`}
                                </pre>
                            </div>
                            A number type can also be +Infinity, -Infinity, and NaN (not a number). For example,
                            <div className="card card-body">
                                <pre>
                                    const number1 = 3/0;<br/>
                                    console.log(number1); {`// returns Infinity`}<br/>

                                    const number2 = -3/0;<br/>
                                    console.log(number2); {`// returns Infinity`}<br/>

                                    {`// strings can't be divided by numbers`}<br/>
                                    const number3 = "abc"/3; <br/>
                                    console.log(number3);  // returns NaN
                                </pre>
                            </div>
                            <hr/>
                            <h4 className="Thead">JavaScript Boolean</h4>
                            This data type represents logical entities. <code>Boolean</code> represents one of two values: <code>true</code> or <code>false</code>. It is easier to think of it as a yes/no switch. For example,<br/>
                            <div className="card card-body">
                                <pre>
                                const dataChecked = true;<br/>
                                const valueCounted = false;  
                                </pre>
                            </div>
                            <hr/>
                            <h4 className="Thead">JavaScript undefined</h4>
                            The <code>undefined</code> data type represents value that is not assigned. If a variable is declared but the value is not assigned, then the value of that variable will be undefined. For example,<br/>
                            <div className="card card-body">
                                <pre>
                                let name;
                                console.log(name); {`// returns undefined`}<br/>
                                </pre>
                            </div>
                            It is also possible to explicitly assign a variable value <code>undefined</code>. For example,
                            <div className="card card-body">
                                <pre>
                                let name = undefined;<br/>
                                console.log(name); {`// returns undefined`}
                                </pre>
                            </div>

            </div>       
            
        }/>
        </div>
    )
}

export default Nodejs1
