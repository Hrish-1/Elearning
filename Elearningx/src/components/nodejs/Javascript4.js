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
            <Tutorial icons = {logo.Lname} name = "Javascript" language = "javascript" next="/Javascript4" icon2={logo.Lname2}
            theoryContent = {   
            <div className="TutorialPadding">
                <h4>JavaScript Object</h4>
                An <code>object</code> is a complex data type that allows us to store collections of data. For example,
                <div className="card card-body">
                    <pre>
                   {`const student = {
    firstName: 'ram',
    lastName: null,
    class: 10
};  `}                  
                    </pre>
                </div>
                 <hr/>   
                <h4 className="Thead">JavaScript Symbol</h4>
                This data type was introduced in a newer version of JavaScript (from ES2015).
                A value having the data type Symbol can be referred to as a symbol value. Symbol is an immutable primitive value that is unique. For example,
                <div className="card card-body">
                    <pre>
                   {` // two symbols with the same description`}<br/>

                    const value1 = Symbol('hello');<br/>
                    const value2 = Symbol('hello');                 
                    </pre>
                </div>    
                Though <code>value1</code> and <code>value2</code> both contain <code>'hello'</code>, they are different as they are of the <code>Symbol</code> type.
                <br/><hr/>
                <h4 className="Thead">JavaScript Object</h4>    
                An <code>object</code> is a complex data type that allows us to store collections of data. For example,
                <div className="card card-body">
                    <pre>
                    {`const student = {
    firstName: 'ram',
    lastName: null,
    class: 10
};`}
                    </pre>
                </div>
                <hr/>
                <h4 className="Thead">JavaScript Type</h4>
                JavaScript is a dynamically typed (loosely typed) language. JavaScript automatically determines the variables' data type for you.
                <hr/>    
                It also means that a variable can be of one data type and later it can be changed to another data type. For example,
                <div className="card card-body">
                    <pre>
                    {`// data is of undefined type
let data;

// data is of integer type
data = 5;

// data is of string type
data = "JavaScript Programming";`}                    
                    </pre>
                </div>
                <hr/>
                <h4 className="Thead">JavaScript typeof</h4>
                To find the type of a variable, you can use the typeof operator. For example,<br/>
                <div className="card card-body">
                    <pre>
                   {` const name = 'ram';
typeof(name); // returns "string"

const number = 4;
typeof(number); //returns "number"

const valueChecked = true;
typeof(valueChecked); //returns "boolean"

const a = null;
typeof(a); // returns "object"  `}              
                    </pre>
                </div>
            
            
            
            </div>       
            
        }/>
        </div>
    )
}

export default Nodejs1
