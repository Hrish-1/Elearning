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
            <Tutorial icons = {logo.Lname} name = "C++" language = "cpp" next="/quiz/cpp" icon2={logo.Lname2}
                theoryContent = {
                    <div className="TutorialPadding">
                        <h4 className="Thead">C++ Type Conversion</h4>
                        In this tutorial, we will learn about the basics of C++ type conversion with the help of examples.<br/><br/>
                        C++ allows us to convert data of one type to that of another. This is known as type conversion.<br/><br/>
                        There are two types of type conversion in C++.<br/><br/>
                        <ol>
                            <li>Implicit Conversion</li>
                            <li>Explicit Conversion (also known as Type Casting</li><br/><hr/>
                        </ol>    

                        <h4 className="Thead">Implicit Type Conversion</h4>  
                        The type conversion that is done automatically done by the compiler is known as implicit type conversion. This type of conversion is also known as automatic conversion.<br/><br/>
                        Let us look at two examples of implicit type conversion.<br/><hr/>
                        <h4 className="Thead">Example 1: Conversion From int to double</h4>
                        <div className="card card-body">
                            <pre>
                            {`// Working of implicit type-conversion

#include <iostream>
using namespace std;

int main() {
   // assigning an int value to num_int
   int num_int = 9;

   // declaring a double type variable
   double num_double;
 
   // implicit conversion
   // assigning int value to a double variable
   num_double = num_int;

   cout << "num_int = " << num_int << endl;
   cout << "num_double = " << num_double << endl;

   return 0;
}  `}
                            </pre>    
                        </div>
                        <h4 className="Thead">Output</h4>
                        <div className="card card-body">
                        num_int = 9<br/>
                        num_double = 9
                        </div>  

                        In the program, we have assigned an <code>int</code> data to a <code>double</code> variable.
                        <div className="card card-body">
                        num_double = num_int;
                        </div>
                        Here, the <code>int</code> value is automatically converted to <code>double</code> by the compiler before it is assigned to the <code>num_double</code> variable. This is an example of implicit type conversion.    
                        <br/><hr/>
                        <h4 className="Thead">Example 2: Automatic Conversion from double to int</h4>
                        <div className="card card-board">
                            <pre>
                            {`//Working of Implicit type-conversion

#include <iostream>
using namespace std;

int main() {

   int num_int;
   double num_double = 9.99;

   // implicit conversion
   // assigning a double value to an int variable
   num_int = num_double;

   cout << "num_int = " << num_int << endl;
   cout << "num_double = " << num_double << endl;

   return 0;
}`}   
                             </pre>   
                        </div> 
                        <h4>Output</h4>
                        <div className="card card-body">
                            <pre>
                            num_int = 9<br/>
                            num_double = 9.99
                             </pre>   
                        </div>    
                        In the program, we have assigned a double data to an int variable<br/><hr/>

                        <div className="card card-body">
                        num_double = num_int;
                        </div>    
                        Here, the <code>double</code> value is automatically converted to <code>int</code> by the compiler before it is assigned to the <code>num_int</code> variable. This is also an example of implicit type conversion.
                    </div>
                }
            
                />
            </div>
        )
    }
    
    export default Cpp1