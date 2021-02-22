
import React from 'react'
import {SiCsharp} from 'react-icons/si'
import Tutorial from '../Tutorial'
import icon from './c1.png'
import icon2 from './c2.png'

const Csharp1 = () => {
    const logo={"Lname":icon,
              "Lname2":icon2
            }
    return (
        <div>
            <Tutorial icons = {logo.Lname} name = "C-SHARP" language = "Csharp" next="/Csharp4" icon2={logo.Lname2}
             theoryContent = {
                <p>
                    <h4>C# Operators<hr/></h4>
                     <p>Operators are symbols that are used to perform operations on operands. Operands may be variables and/or constants.</p>


                    <h5>1. Basic Assignment Operator<hr/></h5>
                    Basic assignment operator (=) is used to assign values to variables. For example,
                    <div class="card card-body">
                         <pre>
                             {`double x;
x = 50.05;`}
                         </pre>
                         </div>

 <p>Here, 50.05 is assigned to x.</p>
                             

                    <h5>2. Arithmetic Operators<hr/></h5>
                    Arithmetic operators are used to perform arithmetic operations such as addition, subtraction, multiplication, division, etc.
                    For example, 
                    <div class="card card-body">
                         <pre>
                             {`int x = 5;
int y = 10;
int z = x + y;// z = 15

`}
                         </pre>      
                      </div>


<h5>3. Relational Operators<hr/></h5>
Relational operators are used to check the relationship between two operands. If the relationship is true the result will be true, otherwise it will result in false.      
                    <div class="card card-body">
                         <pre>
                             {`C# Relational Operators
Operator	Operator Name	Example
==	Equal to	6 == 4 evaluates to false
>	Greater than	3 > -1 evaluates to true
<	Less than	5 < 3 evaluates to false
>=	Greater than or equal to	4 >= 4 evaluates to true
<=	Less than or equal to	5 <= 3 evaluates to false
!=	Not equal to	10 != 2 evaluates to true
`}
                         </pre>      
                      </div>

                    

                    
                      
                    
                     
                </p> 
             }
             />


        </div>
    )
}

export default Csharp1
