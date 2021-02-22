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
            <Tutorial icons = {logo.Lname} name = "PYTHON" language = "python"  next="/Python3" icon2={logo.Lname2}
            theoryContent={
                <div className="TutorialPadding">
                    <h4 className="Thead">Python Statement, Indentation and Comments</h4>
                    In this tutorial, you will learn about Python statements, why indentation is important and use of comments in programming.<br/><br/>
                    <h4 className="Thead">Python Statement</h4>
                    Instructions that a Python interpreter can execute are called statements. For example, <code>a = 1</code> is an assignment statement. <code>if</code> statement, <code>for</code> statement, <code>while</code> statement, etc. are other kinds of statements which will be discussed later.
                    <h4 className="Thead">Multi-line statement</h4>
                    In Python, the end of a statement is marked by a newline character. But we can make a statement extend over multiple lines with the line continuation character (\). For example:
                    <div className="card card-body">
                        <pre>
                        a = 1 + 2 + 3 + \<br/>
                            4 + 5 + 6 + \<br/>
                            7 + 8 + 9            
                        </pre>
                    </div>
                    This is an explicit line continuation. In Python, line continuation is implied inside parentheses <code>( )</code>, brackets <code>[ ]</code>, and braces <code>{ }</code>. For instance, we can implement the above multi-line statement as:
                    <div className="card card-body">
                                <pre>
                                a = (1 + 2 + 3 +<br/>
                                    4 + 5 + 6 +<br/>
                                    7 + 8 + 9)
                                </pre>
                            </div>
                            Here, the surrounding parentheses <code>( )</code> do the line continuation implicitly. Same is the case with<code> [ ]</code> and <code>{ }</code>. For example:    
                            <div className="card card-body">
                                <pre>
                                {`colors = ['red',
          'blue',
          'green']`}
                                </pre>
                            </div>                
                            We can also put multiple statements in a single line using semicolons, as follows:
                            <div className="card card-body">
                                <pre>
                                a = 1; b = 2; c = 3
                                </pre>
                            </div>
                            <hr/>
                            <h4 className="Thead">Python Indentation</h4>
                            Most of the programming languages like C, C++, and Java use braces <code>{ }</code> to define a block of code. Python, however, uses indentation.<br/><br/>
                            A code block (body of a function, loop, etc.) starts with indentation and ends with the first unindented line. The amount of indentation is up to you, but it must be consistent throughout that block.<br/><br/>
                            Generally, four whitespaces are used for indentation and are preferred over tabs. Here is an example.               
                            <div className="card card-body">
                                <pre>
                               {` for i in range(1,11):
    print(i)
    if i == 5:
        break`}
                                </pre>
                            </div>
                            The enforcement of indentation in Python makes the code look neat and clean. This results in Python programs that look similar and consistent.<br/><br/>
                            Indentation can be ignored in line continuation, but it's always a good idea to indent. It makes the code more readable. For example:<br/>
                            <div className="card card-body">
                                <pre>
                                {`if True:
    print('Hello')
    a = 5`}
                                </pre>
                            </div>
                             and<br/>
                             <div className="card card-body">
                                <pre>
                                if True: print('Hello'); a = 5
                                </pre>
                            </div>           
                            both are valid and do the same thing, but the former style is clearer.
                            Incorrect indentation will result in <code>IndentationError</code>.          
                            <br/><hr/>
                            <h4 className="Thead">Python Comments</h4> 
                            Comments are very important while writing a program. They describe what is going on inside a program, so that a person looking at the source code does not have a hard time figuring it out.<br/><br/>
                            You might forget the key details of the program you just wrote in a month's time. So taking the time to explain these concepts in the form of comments is always fruitful.<br/><br/>
                            In Python, we use the hash (#) symbol to start writing a comment.<br/><br/>
                            It extends up to the newline character. Comments are for programmers to better understand a program. Python Interpreter ignores comments.<br/>
                            <div className="card card-body">
                                <pre>
                                {`#This is a comment
#print out Hello
print('Hello')`}
                                </pre>
                            </div>        
                            <hr/>
                            <h4 className="Thead">Multi-line comments</h4>
                            We can have comments that extend up to multiple lines. One way is to use the hash(#) symbol at the beginning of each line. For example:<br/>
                            <div className="card card-body">
                                <pre>
                                {`#This is a long comment
#and it extends
#to multiple lines`}
                                </pre>
                            </div>
                            Another way of doing this is to use triple quotes, either <code>'''</code> or <code>"""</code>.<br/>
                            These triple quotes are generally used for multi-line strings. But they can be used as a multi-line comment as well. Unless they are not docstrings, they do not generate any extra code.<br/>           
                            <div className="card card-body">
                                <pre>
                                {`"""This is also a
perfect example of
multi-line comments"""`}
                                </pre>
                            </div>  
                            <hr/>
                                      
                
                
                
                
                
                </div>    
            }
            />
        </div>
    )
}

export default Python1
