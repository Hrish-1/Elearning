import React from 'react'
import {SiCsharp} from 'react-icons/si'
import Tutorial from '../Tutorial'
import icon from './c3.png'
import icon2 from './c2.png'

const Csharp1 = () => {
    const logo={"Lname":icon,
              "Lname2":icon2
            }
    return (
        <div>
            <Tutorial icons = {logo.Lname} name = "C-SHARP" language = "Csharp" next="/Csharp3" icon2={logo.Lname2}
             theoryContent = {
                <p>
                    <h4>C# Variables and (Primitive) Data Types<hr/></h4>
                     <p>A variable is a symbolic name given to a memory location. Variables are used to store data in a computer program.</p>


                    <h5>How to declare variables in C#?<hr/></h5>
                    Here's an example to declare a variable in C#.
                    <div class="card card-body">
                         <pre>
                             {`int age;
`}
                         </pre>
                         </div>

 

                             

                    <h5>However, the variable can also be initialized to some value during declaration. For example,<hr/></h5>
                    
                    <div class="card card-body">
                         <pre>
                             {`int age = 24;

`}
                         </pre>      
                      </div>
<p>Here, a variable age of type int is declared and initialized to 24 at the same time.</p>


<h5>Since, it’s a variable, we can change the value of variables as well. For example,<hr/></h5>
                    
                    <div class="card card-body">
                         <pre>
                             {`int age = 24;
age = 35;
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
