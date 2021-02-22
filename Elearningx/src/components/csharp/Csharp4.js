
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
            <Tutorial icons = {logo.Lname} name = "C-SHARP" language = "Csharp" next="/quiz/csharp" icon2={logo.Lname2}
             theoryContent = {
                <p>
                    <h4>C# Basic Input and Output<hr/></h4>
                     <p>In this tutorial, we will learn how to take input from user and and display output in C# using various methods</p>


                    <h5>C# Output<hr/></h5>
                    In order to output something in C#, we can use
                    <div class="card card-body">
                         <pre>
                             {`System.Console.WriteLine() OR
System.Console.Write()`}
                         </pre>
                         </div>

 <p>Here, System is a namespace, Console is a class within namespace System and WriteLine and Write are methods of class Console.

</p>
                             

                    <h5>Example 1: Printing String using WriteLine()<hr/></h5>
                 
                    <div class="card card-body">
                         <pre>
                             {`using System;
 
 namespace Sample
 {
     class Test
     {
         public static void Main(string[] args)
         {
             Console.WriteLine("C# is cool");
         }
     }
 }
 
`}
                         </pre>      
                      </div>


<h5>Difference between WriteLine() and Write() method<hr/></h5>
The main difference between WriteLine() and Write() is that the Write() method only prints the string provided to it, while the WriteLine() method prints the string and moves to the start of next line as well.
                    <h5>Example 2: How to use WriteLine() and Write() method?<hr/></h5>

                    <div class="card card-body">
                         <pre>
                             {`using System;
 
 namespace Sample
 {
     class Test
     {
         public static void Main(string[] args)
         {
             Console.WriteLine("Prints on ");
             Console.WriteLine("New line");
 
             Console.Write("Prints on ");
             Console.Write("Same line");
         }
     }
 }
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
