import React from 'react'
import {SiNodeDotJs} from 'react-icons/si'
import Tutorial from '../Tutorial'
import icon from './js.png'
import icon2 from './js2.png'

const Nodejs1 = () => {
    const logo={"Lname":icon,
              "Lname2":icon2
            }
    return (
        <div>
            <Tutorial icons = {logo.Lname} name = "Javascript" language = "javascript" next="/Javascript3" icon2={logo.Lname2}
            theoryContent = {   
            <div className="TutorialPadding">
                <h4 className="Thead">Rules for Naming JavaScript Variables</h4>
                The rules for naming variables are:<br/>
                1. Variable names must start with either a letter, an underscore _, or the dollar sign $. For example,
                <div className="card card-body">
                    <pre>
                        //valid<br/>
                        let a = 'hello';<br/>
                        let _a = 'hello';<br/>
                        let $a = 'hello';           
                    </pre>
                </div>
                2. Variable names cannot start with numbers. For example,
                <div className="card card-body">
                    <pre>
                    //invalid<br/>
                    Let 1a = 'hello'; // this gives an error           
                    </pre>
                </div>
                3. JavaScript is case-sensitive. So <code>y</code> and <code>Y</code> are different variables. For example,
                <div className="card card-body">
                    <pre>
                    let y = "hi";<br/>
                    let Y = 5;<br/><br/>

                    console.log(y); // hi<br/>
                    console.log(Y); // 5
                    </pre>     
                </div>            
                4. Keywords cannot be used as variable names. For example,
                <div className="card card-body">
                    <pre>
                    //invalid<br/>   
                    let new = 5; // Error! new is a keyword.                     
                    </pre>
                </div>
                <hr/>
                <h4 className="Thead">JavaScript Constants</h4>
                The <code>const</code> keyword was also introduced in the ES6(ES2015) version to create constants. For example,
                <div className="card card-body">
                    <pre>
                    const x = 5;              
                    </pre>
                </div>
                <hr/>
                Once a constant is initialized, we cannot change its value.
                <div className="card card-body">
                    <pre>
                    const x = 5;<br/>
                    x = 10;  // Error! constant cannot be changed.<br/>
                    console.log(x)                       
                    </pre>
                </div>
                Simply, a constant is a type of variable whose value cannot be changed.<br/><br/>
                Also, you cannot declare a constant without initializing it. For example,
                <div className="card card-body">
                    <pre>
                    const x;  // Error! Missing initializer in const declaration.<br/><br/>
                    x = 5;
                    console.log(x)
                    </pre>     
                </div> 
                <br/><hr/> 
                <h4 className="Thead">JavaScript Comments</h4>
                In this tutorial, you will learn about JavaScript comments, why you should use them, and how to use them with the help of examples.<br/><br/>
                JavaScript comments are hints that a programmer can add to make their code easier to read and understand. They are completely ignored by JavaScript engines.<br/><br/>
                <hr/>
                There are two ways to add comments to code:
                <ul>
                    <li><code>//</code> - Single Line Comments</li>
                    <li><code>/* */</code> -Multi-line Comments</li>
                </ul>    
                <br/><hr/>
                <h4 className="Thead">Single Line Comments</h4>
                In JavaScript, any line that starts with <code>//</code> is a single line comment. For example,
                <div className="card card-body">
                        <pre>
                        {`name = "Jack";

// printing name on the console
console.log("Hello " + name);`}

                         </pre>   
                    </div> 
                    Here,<code> //</code> printing name on the console is a comment.   
                    You can also use single line comment like this:
                    <div className="card card-body">
                        <pre>
                        {`name = "Jack";

console.log("Hello " + name);  // printing name on the console`}

                         </pre>   
                    </div>
                    <hr/>
                    <h4 className="Thead">Multi-line Comments</h4>
                    In Javascript, any text between /* and */ is a multi-line comment. For example,<br/>
                    <div className="card card-body">
                        <pre>
                        /* The following program contains the source code for a game called Baghchal.<br/>
                        Baghchal is a popular board game in Nepal where two players choose either sheep or tiger. It is played on a 5x5 grid.<br/>
                        For the player controlling the tiger to win, they must capture all the sheep. There are altogether 4 tigers on the board.<br/>
                        For the sheep to win, all tigers must be surrounded and cornered so that they cannot move. The player controlling the sheep has 20 sheep at his disposal.<br/>
                        */
                         </pre>   
                    </div>
                    <h4 className="Thead">Make Code Easier to Understand</h4>
                    As a JavaScript developer, you will not only write code but may also have to modify code written by other developers.<br/><br/>
                    If you write comments on your code, it will be easier for you to understand the code in the future. Also, it will be easier for your fellow developers to understand the code.<br/><br/>
                    As a general rule of thumb, use comments to explain why you did something rather than how you did something, and you are good.<br/><br/>



            </div>    
            
            }/>
        </div>
    )
}

export default Nodejs1
