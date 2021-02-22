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
            <Tutorial icons = {logo.Lname} name = "C++" language = "cpp" next="/Cpp3" icon2={logo.Lname2}
                theoryContent = {
                   <div className="TutorialPadding">
                       <h4 className="Thead">C++ Data Types</h4>
                       In this tutorial, we will learn about basic data types such as int, float, char, etc. in C++ programming with the help of examples.<br/><br/>
                       In C++, data types are declarations for variables. This determines the type and size of data associated with variables. For example,
                       <div className="card card-box">
                          int age = 13;
                       </div>
                       Here,<code>age</code> is a variable of type <code>int</code>. Meaning, the variable can only store integers of either 2 or 4 bytes.<hr/>
                       <h4 className="Thead">
                         C++ Fundamental Data Types  
                       </h4>
                       The table below shows the fundamental data types, their meaning, and their sizes (in bytes):
                       <div class="card card-body">
                            <pre>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                      <th scope="col">Data Type</th>
                                      <th scope="col">Meaning</th>
                                      <th scope="col">Size (in bytes)</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td><code>int</code></td>
                                      <td><code>Integer</code></td>
                                      <td><code>2 or 4</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>float</code></td>
                                      <td><code>Floating-point</code></td>
                                      <td><code>4</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>double</code></td>
                                      <td><code>DOuble Floating-point</code></td>
                                      <td><code>8</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>char</code></td>
                                      <td><code>Character</code></td>
                                      <td><code>1</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>wchar_t</code></td>
                                      <td><code>Wide Character</code></td>
                                      <td><code>2</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>bool</code></td>
                                      <td><code>Boolean</code></td>
                                      <td><code>1</code></td>
                                    </tr>
                                    <tr>
                                      <td><code>void</code></td>
                                      <td><code>Empty</code></td>
                                      <td><code>0</code></td>
                                    </tr> 
                                  </tbody>
                                </table>
                            </pre>
                           </div>
                           Now, let us discuss these fundamental data types in more detail.<hr/>
                           <h4 className="Thead">1. C++ int</h4>
                           <ul>
                              <li>1. The <code>int</code> keyword is used to indicate integers.</li>
                              <li>2. Its size is usually 4 bytes. Meaning, it can store values from -2147483648 to 2147483647.</li>
                              <li>3. For example,</li>
                              <div className="card card-body">
                                <pre>
                                  int salary = 85000;
                                </pre>
                              </div>
                            </ul>
                            <hr />
                            <h4 className="Thead">2.C++ float and double</h4>
                            <ul>
                              <li><code>float</code> and <code>double</code> are used to store floating-point numbers (decimals and exponentials).</li>
                              <li>The size of <code>float</code> is 4 bytes and the size of <code>double</code> is 8 bytes. Hence, <code>double</code> has two times the precision of <code>float</code>. To learn more, visit C++ float and double.</li>
                              <li>For example,</li>
                              <div className="card card-body">
                              <pre>
                              float area = 64.74;<br/>
                              double volume = 134.64534;
                              </pre>
                              </div>  
                            </ul>
                            As mentioned above, these two data types are also used for exponentials. For example,
                            <div className="card card-body">
                            double distance = 45E12    // 45E12 is equal to 45*10^12
                            </div>  
                            <hr/>
                            <h4 className="Thead">3.C++ char</h4>
                              <ul>
                                  <li>Keyword char is used for characters.</li>
                                  <li>Its size is 1 byte.</li>
                                  <li>Characters in C++ are enclosed inside single quotes<code> ' '</code>.</li>
                                  <li>For example,</li>
                                  <div className="card card-body">
                                      char test = 'h';
                                  </div>
                             </ul> 
                                <hr />
                                <h4 className="Thead">4. C++ wchar_t</h4>
                                <ul>
                                  <li>Wide character wchar_t is similar to the char data type, except its size is 2 bytes instead of 1.</li>
                                  <li>It is used to represent characters that require more memory to represent them than a single char.</li>
                                  <li>For example,</li>
                                  <div class="card card-body">
                                    wchar_t test = L'ם'  // storing Hebrew character
                                  </div>
                                  Notice the letter L before the quotation marks
                                 </ul> 

                                <h4 className="Thead">5. C++ bool</h4>
                                <ul>
                                    <li>The <code>bool</code> data type has one of two possible values: <code>true</code> or <code>false</code>.</li>
                                    <li>Booleans are used in conditional statements and loops (which we will learn in later chapters).</li>
                                    <li>For example,</li>
                                    <div className="card card-body">
                                        bool cond = false;
                                    </div>  
                                </ul> 
                                <hr/>
                                <h4 className="Thead">6. C++ void</h4> 
                                <ul>
                                    <li>The <code>void</code> keyword indicates an absence of data. It means "nothing" or "no value</li>
                                    <li>We will use void when we learn about functions and pointers.</li>
                                  </ul>  
                                Note: We cannot declare variables of the <code>void</code> type.<br/><hr/>  
                              

                   </div> 
                }
            
            />
        </div>
    )
}

export default Cpp1
