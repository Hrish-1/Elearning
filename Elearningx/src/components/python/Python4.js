import React from 'react'
import {SiPython} from 'react-icons/si'
import Tutorial from '../Tutorial'
import icon from './py1.png'
import icon2 from './py3.png'

const Python1 = () => {
    const logo={"Lname":icon,
              "Lname2":icon2
            }
    return (
        <div>
            <Tutorial icons = {logo.Lname} name = "PYTHON" language = "python"  next="/Python4" icon2={logo.Lname2}
            theoryContent={
                <div className="TutorialPadding">
                    <h4 className="Thead">Python if...else Statement</h4>
                    In this article, you will learn to create decisions in a Python program using different forms of if..else statement.<br/><hr/>
                    <h4 className="Thead">What is if...else statement in Python?</h4>
                    Decision making is required when we want to execute a code only if a certain condition is satisfied.<br/>
                    The <code>if…elif…else</code> statement is used in Python for decision making.<br/>
                    <h4 className="Thead">Python if Statement Syntax</h4>
                    <div className="card card-body">
                        <pre>
                        {`if test expression:
    statement(s)`}

                         </pre>   
                    </div>
                    Here, the program evaluates the <code>test expression</code> and will execute statement(s) only if the test expression is <code>True</code>.<br/><br/>
                    If the test expression is <code>False</code>, the statement(s) is not executed.
                    In Python, the body of the <code>if</code> statement is indicated by the indentation. The body starts with an indentation and the first unindented line marks the end.<br/><br/>
                    Python interprets non-zero values as <code>True</code>. <code>None</code> and <code>0</code> are interpreted as False.<br/><br/>
                    <h4 className="Thead">Example: Python if Statement</h4>
                    <div className="card card-body">
                        <pre>
                        {`# If the number is positive, we print an appropriate message

num = 3
if num > 0:
    print(num, "is a positive number.")
print("This is always printed.")

num = -1
if num > 0:
    print(num, "is a positive number.")
print("This is also always printed.")`}
                         </pre>   
                    </div>
                    When you run the program, the output will be:<br/><br/>
                    <div className="card card-body">
                        <pre>
                        3 is a positive number<br/>
                        This is always printed<br/>
                        This is also always printed
                         </pre>   
                    </div>
                    In the above example, <code>num {`>`} 0</code> is the test expression.<br/><br/>
                    The body of <code>if</code> is executed only if this evaluates to <code>True</code>.<br/><br/>
                    When the variable <code>num</code> is equal to 3, test expression is true and statements inside the body of <code>if</code> are executed.<br/><br/>
                    If the variable <code>num</code> is equal to -1, test expression is false and statements inside the body of <code>if</code> are skipped.<br/><br/>
                    The <code>print()</code> statement falls outside of the <code>if</code> block (unindented). Hence, it is executed regardless of the test expression.<br/><br/>
                    <hr/>
                    <h4 className="Thead">Python if...else Statement</h4>
                    <div className="card card-body">
                        <pre>
                        {`if test expression:
    Body of if
else:
    Body of else`}

                         </pre>   
                    </div>
                    The <code>if..else</code> statement evaluates <code>test expression</code> and will execute the body of <code>if</code> only when the test condition is <code>True</code>.<br/>
                    If the condition is <code>False</code>, the body of <code>else</code> is executed. Indentation is used to separate the blocks.
                    <h4 className="Thead">Example of if...else</h4>
                    <div className="card card-body">
                        <pre>
                       {` # Program checks if the number is positive or negative
# And displays an appropriate message

num = 3

# Try these two variations as well. 
# num = -5
# num = 0

if num >= 0:
    print("Positive or Zero")
else:
    print("Negative number")`}

                         </pre>   
                    </div>
                    <h4 className="Thead">Output</h4>
                    <div className="card card-body">
                        <pre>
                            Positive or Zero
                         </pre>   
                    </div>
                    In the above example, when <code>num</code> is equal to 3, the test expression is true and the body of <code>if</code> is executed and the <code>body</code> of else is skipped.<br/><br/>
                    If <code>num</code> is equal to -5, the test expression is false and the body of <code>else</code> is executed and the body of <code>if</code> is skipped.<br/><br/>
                    If <code>num</code> is equal to 0, the test expression is true and body of <code>if</code> is executed and body of else is skipped.<br/><hr/>              
                    <h4 className="Thead">Python if...elif...else Statement</h4>
                    <div className="card card-body">
                        <pre>
                        {`if test expression:
    Body of if
elif test expression:
    Body of elif
else: 
    Body of else`}

                         </pre>   
                    </div>
                    The <code>elif</code> is short for else if. It allows us to check for multiple expressions.<br/><br/>
                    If the condition for <code>if</code> is <code>False</code>, it checks the condition of the next <code>elif</code> block and so on.<br/><br/>
                    If all the conditions are <code>False</code>, the body of else is executed.<br/><br/>
                    Only one block among the several <code>if...elif...else</code> blocks is executed according to the condition.<br/><br/>
                    The <code>if</code> block can have only one <code>else</code> block. But it can have multiple <code>elif</code> blocks.<br/><hr/>
                    <h4 className="Thead">Example of if...elif...else</h4>
                    <div className="card card-body">
                        <pre>
                        {`'''In this program, 
we check if the number is positive or
negative or zero and 
display an appropriate message'''

num = 3.4

# Try these two variations as well:
# num = 0
# num = -4.5

if num > 0:
    print("Positive number")
elif num == 0:
    print("Zero")
else:
    print("Negative number")`}
                         </pre>   
                    </div>
                    When variable <code>num</code> is positive, <code>Positive number</code> is printed.<br/><br/>
                    If <code>num</code> is equal to 0, <code>Zero</code> is printed.<br/><br/>
                    If <code>num</code> is negative, <code>Negative number</code> is printed.<br/><br/><hr/>
                    <h4 className="Thead">Python Nested if statements</h4>
                    We can have a <code>if...elif...else</code> statement inside another <code>if...elif...else</code> statement. This is called nesting in computer programming.<br/><br/>
                    Any number of these statements can be nested inside one another. Indentation is the only way to figure out the level of nesting. They can get confusing, so they must be avoided unless necessary.<br/>
                    <h4 className="Thead">Python Nested if Example</h4>
                    <div className="card card-body">
                        <pre>
                        {`'''In this program, we input a number
check if the number is positive or
negative or zero and display
an appropriate message
This time we use nested if statement'''

num = float(input("Enter a number: "))
if num >= 0:
    if num == 0:
        print("Zero")
    else:
        print("Positive number")
else:
    print("Negative number")`}
                         </pre>   
                    </div>
                    <h4 className="Thead">Output1</h4>
                    <div className="card card-body">
                        <pre>
                        Enter a number: 5<br/>
                        Positive number
                         </pre>   
                    </div>
                    <h4 className="Thead">Output2</h4>
                    <div className="card card-body">
                        <pre>
                        Enter a number: -1<br/>
                        Negative number
                         </pre>   
                    </div>
                    <h4 className="Thead">Output3</h4>
                    <div className="card card-body">
                        <pre>
                        Enter a number: 0<br/>
                        Zero
                         </pre>   
                    </div>





                </div>    
            }
            />
        </div>
    )
}

export default Python1
