import React from 'react'
import Tutorial from '../Tutorial'
import {SiCplusplus} from 'react-icons/si'
import icon from './cpp2.png'
import icon2 from './cpp9.png'

const Cpp1 = () => {
  const logo={"Lname":icon,
              "Lname2":icon2
            }
    return (
        <div>
            <Tutorial icons = {logo.Lname} name = "C++" language = "cpp" next="/Cpp2" icon2={logo.Lname2}
                
                theoryContent = {
                   <div className="TutorialPadding">
                       <h3 className="Thead">C++ Variables, Literals and Constants<hr/></h3>
                        In this tutorial, we will learn about variables, literals, and constants in C++ with the help of examples.
                       <h4>C++ Variables</h4>
                       In programming, a variable is a container (storage area) to hold data.To indicate the storage area, each variable should be given a unique name (identifier). For example, 
                       <div class="card card-body">
                            <pre>
                                {`int age = 14;`}
                            </pre>      
                         </div>
                        Here, <code>age</code> is a variable of the <code>int</code> data type, and we have assigned an integer value 14 to it.
                        The value of a variable can be changed, hence the name variable.
                        <div class="card card-body">
                            <pre>
                                {`int age = 14;   // age is 14
age = 17;       // age is 17`}
                            </pre>      
                        </div>

                        <h4 className="Thead">Rules for Naming a variable</h4>
                        <ol>
                            <li>A variable name can only have alphabets, numbers, and the underscore <code>_</code>.</li>
                            <li> A variable name cannot begin with a number.</li>
                            <li> Variable names should not begin with an uppercase character.</li>
                            <li> A variable name cannot be a keyword. For example, <code>int</code> is a keyword that is used to denote integers</li>
                            <li> A variable name can start with an underscore. However, it's not considered a good practice.</li>
                        </ol>
                        
                        <h4 className="Thead">C++ Literals</h4>
                       Literals are data used for representing fixed values. They can be used directly in the code. For example: <code>1</code>,<code> 2.5</code>,<code> 'c'</code> etc.<br /><br/>
                       Here,<code> 1</code>,<code> 2.5</code> and <code>'c'</code> are literals. Why? You cannot assign different values to these terms.<hr/>
                       <h4 className="Thead">1. Integers</h4>
                       An integer is a numeric literal(associated with numbers) without any fractional or exponential part. There are three types of integer literals in C programming:
                       <ul>
                            <li>1. decimal (base 10)</li>
                            <li>2. octal (base 8)</li>
                            <li>3. hexadecimal (base 16)</li>    
                       </ul>
                       For example:
                       <div class="card card-body">
                            <pre>
                                {`Decimal: 0, -9, 22 etc
Octal: 021, 077, 033 etc
Hexadecimal: 0x7f, 0x2a, 0x521 etc`}
                            </pre>      
                         </div>
                         In C++ programming, octal starts with a <code>0</code>, and hexadecimal starts with a <code>0x</code>.
                   <hr />

                        <h4 className="Thead">2. Floating point Literals</h4>
                        A floating-point literal is a numeric literal that has either a fractional form or an exponent form. For example:<br />
                        <code>-2.0</code><br />
                        <code>0.0000234</code><br />
                        <code>-0.22E-5</code>
                        <hr />

                        <h4 className="Thead">3. characters</h4>
                        A character literal is created by enclosing a single character inside single quotation marks. For example: 'a', 'm', 'F', '2' etc.
                        <hr />
                        <h5 className="Thead">4. Escape Sequence</h5>
                        Sometimes, it is necessary to use characters that cannot be typed or has special meaning in C++ programming. For example, newline (enter), tab, question mark, etc.<br /><br/>
                        In order to use these characters, escape sequences are used.
                        <div class="card card-body">
                            <pre>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                      <th scope="col"></th>
                                      <th scope="col"></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td><code>Escape Sequence</code></td>
                                      <td><code>Characters</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>\b</code></td>
                                      <td><code>Backspace</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>\f</code></td>
                                      <td><code>Form feed</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>\n</code></td>
                                      <td><code>Newline</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>\r</code></td>
                                      <td><code>Return</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>\t</code></td>
                                      <td><code>Horizontal tab</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>\v</code></td>
                                      <td><code>Vertical tab</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>\\</code></td>
                                      <td><code>Backslash</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>\'</code></td>
                                      <td><code>Single quotation mark</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>\"</code></td>
                                      <td><code>Double quotation mark</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>\?</code></td>
                                      <td><code>Question mark</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>\0</code></td>
                                      <td><code>Null character</code></td>
                                    </tr> 
                                  </tbody>
                                </table>
                            </pre>      
                         </div>
                         <hr />
                         <h4 className="Thead">5. String Literals</h4>
                          A string literal is a sequence of characters enclosed in double-quote marks. For example:
                          <div class="card card-body">
                            <pre>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                      <th scope="col"></th>
                                      <th scope="col"></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td><code>"Good"</code></td>
                                      <td><code>string constant</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>""</code></td>
                                      <td><code>null string constant</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>" "</code></td>
                                      <td><code>string constant of six white space</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>"x"</code></td>
                                      <td><code>string constant having a single character</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>"Earth is round\n"</code></td>
                                      <td><code>prints string with a new line</code></td>
                                    </tr> 
                                  </tbody>
                                </table>
                            </pre>
                           </div>  
                           <hr /> 

                          <h4 className="Thead">C++ Constants</h4>
                          In C++, we can create variables whose value cannot be changed. For that, we use the const keyword. Here's an example:
                          <div class="card card-body">
                            <pre>
                                {`const int LIGHT_SPEED = 299792458;
LIGHT_SPEED = 2500 // Error! LIGHT_SPEED is a constant.`}
                            </pre>      
                         </div>
                         Here, we have used the keyword <code>const</code> to declare a constant named <code>LIGHT_SPEED</code>. If we try to change the value of <code>LIGHT_SPEED</code>, we will get an error.
                          A constant can also be created using the <code>#define</code> preprocessor directive. We will learn about it in detail in the C++ Macros tutorial.
                   </div> 
                }
            
            />
        </div>
    )
}

export default Cpp1
