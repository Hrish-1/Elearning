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
          <Tutorial icons = {logo.Lname} name = "JAVA" language = "java" next="/quiz/java" icon2={logo.Lname2}
          theoryContent = {
                   <p className="TutorialPadding">
                       <h3 className="Thead">Java String<hr/></h3>
                        <p>In Java, a string is a sequence of characters. For example, "hello" is a string containing a sequence of characters 'h', 'e', 'l', 'l', and 'o'.</p>
                       <p>We use double quotes to represent a string in Java. For example,</p>
                       <div class="card card-body">
                            <pre>
                                {`// create a string
String type = "Java programming";
`}
                            </pre>      
                         </div>
    
   
                                
  
                       <h4 className="Thead">Create a String in Java<hr/></h4>
                       
                       <div class="card card-body">
                            <pre>
                                {`class Main {
  public static void main(String[] args) {
    
    // create strings
    String first = "Java";
    String second = "Python";
    String third = "JavaScript";

    // print strings
    System.out.println(first);   // print Java
    System.out.println(second);  // print Python
    System.out.println(third);   // print JavaScript
  }
}
`}
                            </pre>      
                         </div>

                         <h4 className="Thead">Java Parameterized Constructor<hr/></h4>
                         A Java constructor can also accept one or more parameters.
                        Such constructors are known as parameterized constructors (constructor with parameters).


                       <div class="card card-body">

                            <pre>
                                {`class Main {

String languages;

// constructor accepting single value
Main(String lang) {
  languages = lang;
  System.out.println(languages + " Programming Language");
}

public static void main(String[] args) {

  // call constructor by passing a single value
  Main obj1 = new Main("Java");
  Main obj2 = new Main("Python");
  Main obj3 = new Main("C");
}
}
`}
                            </pre>      
                         </div>



                         <h4 className="Thead">Java String Operations<hr/></h4>
                      <h5 className="Thead"> 1. Get Length of a String</h5>
                      To find the length of a string, we use the length() method of the String. For example,
                       <div class="card card-body">
                            <pre>
                                {`class Main {
  public static void main(String[] args) {

    // create a string
    String greet = "Hello! World";
    System.out.println("String: " + greet);

    // get the length of greet
    int length = greet.length();
    System.out.println("Length: " + length);
  }
}
`}
                            </pre>      
                         </div>

                         <h5 className="Thead"> 2. Join two Strings</h5>
                      To find the length of a string, we use the length() method of the String. For example,
                       <div class="card card-body">
                            <pre>
                                {`class Main {
  public static void main(String[] args) {

    // create first string
    String first = "Java ";
    System.out.println("First String: " + first);

    // create second
    String second = "Programming";
    System.out.println("Second String: " + second);

    // join two strings
    String joinedString = first.concat(second);
    System.out.println("Joined String: " + joinedString);
  }
}
`}
                            </pre>      
                         </div>



                          <h5 className="Thead">3. Compare two Strings</h5>
                          In Java, we can make comparisons between two strings using the equals() method. For example,
                       <div class="card card-body">
                            <pre>
                                {`class Main {
  public static void main(String[] args) {

    // create 3 strings
    String first = "java programming";
    String second = "java programming";
    String third = "python programming";

    // compare first and second strings
    boolean result1 = first.equals(second);
    System.out.println("Strings first and second are equal: " + result1);

    // compare first and third strings
    boolean result2 = first.equals(third);
    System.out.println("Strings first and third are equal: " + result2);
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

export default Java1
