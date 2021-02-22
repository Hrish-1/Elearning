import React from 'react'
import {SiPython} from 'react-icons/si'
import Tutorial from '../Tutorial'
import icon from './py1.png'
import icon2 from './py3.png'

const Python1 = () => {
  const logo={"Lname":icon,
              "Lname2":icon2
            }
    return (
        <div>
            <Tutorial icons = {logo.Lname} name = "PYTHON" language = "python"  next="/Python2" icon2={logo.Lname2}
            theoryContent={
                <div className="TutorialPadding">
                    <h4 className="Thead">Python Keywords and Identifiers</h4>
                    In this tutorial, you will learn about keywords (reserved words in Python) and identifiers (names given to variables, functions, etc.)
                    <br/><br/>
                    <h4 className="Thead">Python Keywords</h4>
                    Keywords are the reserved words in Python.<br/>
                    We cannot use a keyword as a variable name, function name or any other identifier. They are used to define the syntax and structure of the Python language.<br/>
                    In Python, keywords are case sensitive.<br/>
                    There are 33 keywords in Python 3.7. This number can vary slightly over the course of time.<br/>
                    All the keywords except <code>True</code>,<code> False</code> and <code>None</code> are in lowercase and they must be written as they are. The list of all the keywords is given below.<br/>
                    <div class="card card-body">
                            <pre>
                            <table class="table table-striped">
                                  <tbody>
                                    <tr>
                                      <td><code>False</code></td>
                                      <td><code>None</code></td>
                                      <td><code>True</code></td>
                                      <td><code>and</code></td>
                                      <td><code>as</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>assert</code></td>
                                      <td><code>async</code></td>
                                      <td><code>await</code></td>
                                      <td><code>break</code></td>
                                      <td><code>class</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>continue</code></td>
                                      <td><code>def</code></td>
                                      <td><code>del</code></td>
                                      <td><code>elif</code></td>
                                      <td><code>else</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>except</code></td>
                                      <td><code>finally</code></td>
                                      <td><code>for</code></td>
                                      <td><code>from</code></td>
                                      <td><code>global</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>if</code></td>
                                      <td><code>import</code></td>
                                      <td><code>in</code></td>
                                      <td><code>is</code></td>
                                      <td><code>lambda</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>nonlocal</code></td>
                                      <td><code>not</code></td>
                                      <td><code>or</code></td>
                                      <td><code>pass</code></td>
                                      <td><code>raise</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>return</code></td>
                                      <td><code>try</code></td>
                                      <td><code>while</code></td>
                                      <td><code>with</code></td>
                                      <td><code>yield</code></td>
                                    </tr> 
                                  </tbody>
                                </table>
                            </pre>
                           </div>
                            <hr/>
                            <h4 className="Thead">Python Identifiers</h4>
                            An identifier is a name given to entities like class, functions, variables, etc. It helps to differentiate one entity from another.<br/>
                            <h4 className="Thead">Rules for writing identifiers</h4>
                            <ol>
                                <li>Identifiers can be a combination of letters in lowercase (a to z) or uppercase (A to Z) or digits (0 to 9) or an underscore _. Names like myClass, var_1 and print_this_to_screen, all are valid example.</li>
                                <li>An identifier cannot start with a digit. 1variable is invalid, but variable1 is a valid name.</li>
                                <li>Keywords cannot be used as identifiers</li>
                             </ol> 
                             <div className="card card-body">
                                <pre>
                                global = 1
                                </pre>
                            </div>
                            <h4>Output</h4>
                            <div className="card card-body">
                                <pre>
                               {` File "<interactive input>", line 1
    global = 1
           ^
SyntaxError: invalid syntax`}
                                </pre>
                            </div>
                            4.We cannot use special symbols like !, @, #, $, % etc. in our identifier.
                            <div className="card card-body">
                                <pre>
                                    a@ = 0
                                </pre>
                            </div> 
                            <h4>Output</h4>
                            <div className="card card-body">
                                <pre>
                               {`File "<interactive input>", line 1
    a@ = 0
     ^
SyntaxError: invalid syntax`}
                                </pre>
                            </div>
                            5.An identifier can be of any length.
                            <hr/>
                            <h4 className="Thead">Things to Remember</h4>
                            Python is a case-sensitive language. This means, <code>Variable</code> and <code>variable</code> are not the same.<br/><br/>
                            Always give the identifiers a name that makes sense. While <code>c = 10</code> is a valid name, writing <code>count = 10</code> would make more sense, and it would be easier to figure out what it represents when you look at your code after a long gap.<br/><br/>
                            Multiple words can be separated using an underscore, like <code>this_is_a_long_variable</code>.

                </div>    
            }
            />
        </div>
    )
}

export default Python1
