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
            <Tutorial icons = {logo.Lname} name = "C++" language = "cpp" next="/Cpp4" icon2={logo.Lname2}
                theoryContent = {
                    <div className="TutorialPadding">
                        <h4 className="Thead">C++ Basic Input/Output</h4>
                        In this tutorial, we will learn to use the cin object to take input from the user, and the cout object to display output to the user with the help of examples.<br/><br/>
                        <h4 className="Thead">C++ Output</h4>
                        In C++, <code>cout</code> sends formatted output to standard output devices, such as the screen. We use the <code>cout</code> object along with the <code>{'<<'}</code> operator for displaying output.<br/><hr/>
                        <h4 className="Thead">Example 1: String Output</h4>
                        <div className="card card-body">
                            <pre>
                                {`#include <iostream>
using namespace std;

int main() {
    // prints the string enclosed in double quotes
    cout << "This is C++ Programming";
    return 0;
}`}
                            </pre>
                        </div>

                        <h4 className="Thead">Output</h4>
                        <div className="card card-body">
                            This is C++ Programming
                        </div>
                        <h4 className="Thead">How does this program work?</h4>
                        <ul>
                            <li>We first include the <code>iostream</code> header file that allows us to display output.</li>
                            <li>The <code>cout</code> object is defined inside the <code>std</code> namespace. To use the <code>std</code> namespace, we used the <code>using namespace std;</code> statement.</li>
                            <li>Every C++ program starts with the <code>main()</code> function. The code execution begins from the start of the <code>main()</code> function.</li>
                            <li><code>cout</code> is an object that prints the string inside quotation marks <code>" "</code>. It is followed by the <code>{`<<`}</code> operator.</li>
                            <li><code>return 0;</code> is the "exit status" of the main() function. The program ends with this statement, however, this statement is not mandatory.</li>
                         </ul> 
                         <br/><hr/>

                         <h4 className="Thead">Example 2: Numbers and Characters Output</h4> 
                         To print the numbers and character variables, we use the same <code>cout</code> object but without using quotation marks.
                        <div className="card card-body">
                            <pre>
                            {`#include <iostream>
using namespace std;

int main() {
    int num1 = 70;
    double num2 = 256.783;
    char ch = 'A';

    cout << num1 << endl;    // print integer
    cout << num2 << endl;    // print double
    cout << "character: " << ch << endl;    // print char
    return 0;
}`}
                            </pre>    
                        </div>
                        <h4 className="Thead">Output</h4>
                        <div className="card card-body">
                            <pre>
                            70<br/>
                            256.783<br />
                            character: A<br />
                            </pre>     
                        </div>
                        <h4 className="Thead">C++ Input</h4>
                        In C++, <code>cin</code> takes formatted input from standard input devices such as the keyboard. We use the <code>cin</code> object along with the {`>>`} operator for taking input.
                        <hr />
                        <h4 className="Thead">Example 3: Integer Input/Output</h4>
                        <div className="card card-body">
                            <pre>
                                {`
                                #include <iostream>
using namespace std;

int main() {
    int num;
    cout << "Enter an integer: ";
    cin >> num;   // Taking input
    cout << "The number is: " << num;
    return 0;
}
                                `}
                             </pre>   
                        </div>
                        <h4 className="Thead">Output</h4>
                        <div className="card card-body">
                            <pre>
                            Enter an integer: 70<br />
                            The number is: 70
                            </pre>    
                        </div> 
                        In the program, we used
                        <div className="card card-body">
                            cin{`>>`}num;
                       </div> 
                       to take input from the user. The input is stored in the variable <code>num</code>. We use the <code>{'>>'}</code> operator with <code>cin</code> to take input.<br/><hr/>
                       <h4 className="Thead">C++ Taking Multiple Inputs</h4>
                       <div className="card card-body"> 
                            <pre>
                           {` #include <iostream>
using namespace std;

int main() {
    char a;
    int num;

    cout << "Enter a character and an integer: ";
    cin >> a >> num;

    cout << "Character: " << a << endl;
    cout << "Number: " << num;

    return 0;
}`}
                            </pre>    
                       </div>    
                        <h4 className="Thead">Output</h4>
                        <div className="card card-body">
                        <pre>
                        Enter a character and an integer: F<br/>
                        23<br/>
                        Character: F<br/>
                        Number: 23              
                        </pre>
                        </div>    

                    </div>
                }
            
                />
            </div>
        )
    }
    
    export default Cpp1