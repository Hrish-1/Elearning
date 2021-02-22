import React from 'react'
import Tutorial from '../Tutorial'
import {SiJava} from 'react-icons/si'
import icon from './java9.png'
import icon2 from './java1.png'

const Java1 = () => {
    const logo={"Lname":icon,
              "Lname2":icon2
            }
    return (
        <div>
          <Tutorial icons = {logo.Lname} name = "JAVA" language = "java" next="/Java2" icon2={logo.Lname2}
          theoryContent = {
                   <p className="TutorialPadding">
                       <h3 className="Thead">Java Class and Objects<hr/></h3>
                       <p>In this tutorial, you will learn about the concept of classes and objects in Java with the help of examples.Java is an object-oriented programming language. The core concept of the object-oriented approach is to break complex problems into smaller objects.</p>
                      

                       <h4 className="Thead">Create a class in Java<hr/></h4>
                       We can create a class in Java using the class keyword. For example,
                       <div class="card card-body">
                            <pre>
                                {`class ClassName {
  // fields
  // methods
}`}
                            </pre>      
                         </div>
                       <p> Here, fields (variables) and methods represent the state and behavior of the object respectively.
                          fields are used to store data
                          methods are used to perform some operations.</p>








                      <h3 className="Thead">Java Objects<hr/></h3>
                      <p> An object is called an instance of a class. For example, suppose Bicycle is a class then MountainBicycle, SportsBicycle, TouringBicycle, etc can be considered as objects of the class</p>

                      <h4 className="Thead">Creating an Object in Java<hr/></h4>
                       <p>Here is how we can create an object of a class.</p>

                       <div class="card card-body">
                            <pre>
                                {`className object = new className();

// for Bicycle class
Bicycle sportsBicycle = new Bicycle();

Bicycle touringBicycle = new Bicycle();
`}
                            </pre>      
                         </div>

                         
                       <p> We have used the new keyword along with the constructor of the class to create an object. Constructors are similar to methods and have the same name as the class. For example, Bicycle() is the constructor of the Bicycle class.</p>
                        
                   </p> 
                }
                />
            
        </div>
    )
}

export default Java1
