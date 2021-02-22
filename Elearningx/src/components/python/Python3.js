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
                    <h4 className="Thead">Python Data Types</h4>
                    In this tutorial, you will learn about different data types you can use in Python.<br/><br/>
                    <h4 className="Thead">Data Types in Python</h4>
                    Every value in Python has a datatype. Since everything is an object in Python programming, data types are actually classes and variables are instance (object) of these classes.<br/><br/>
                    There are various data types in Python. Some of the important types are listed below.<br/>
                    <hr/>
                    <h4 className="Thead">Python Numbers</h4>
                    Integers, floating point numbers and complex numbers fall under Python numbers category. They are defined as <code>int</code>,<code>float</code> and <code>complex</code> classes in Python.<br/><br/>
                    We can use the <code>type()</code> function to know which class a variable or a value belongs to. Similarly, the <code>isinstance()</code> function is used to check if an object belongs to a particular class.
                    <div className="card card-body">
                        <pre>
                        {`a = 5
print(a, "is of type", type(a))

a = 2.0
print(a, "is of type", type(a))

a = 1+2j
print(a, "is complex number?", isinstance(1+2j,complex))`}                
                        </pre>
                    </div> 

                    <h4 className="Thead">Output</h4>
                    <div className="card card-body">
                        <pre>
                        {`5 is of type <class 'int'>
2.0 is of type <class 'float'>
(1+2j) is complex number? True`}                
                        </pre>
                    </div> 
                    Integers can be of any length, it is only limited by the memory available.<br/><br/>
                    A floating-point number is accurate up to 15 decimal places. Integer and floating points are separated by decimal points. <code>1</code> is an integer, <code>1.0</code> is a floating-point number.
                    Complex numbers are written in the form, x + yj, where x is the real part and y is the imaginary part. Here are some examples.
                    <div className="card card-body">
                        <pre>
                        {`>>> a = 1234567890123456789
>>> a
1234567890123456789
>>> b = 0.1234567890123456789
>>> b
0.12345678901234568
>>> c = 1+2j
>>> c
(1+2j)`}                
                        </pre>
                    </div> 
                    Notice that the <code>float</code> variable b got truncated.
                    <hr/>
                    <h4 className="Thead">Python List</h4>
                    List is an ordered sequence of items. It is one of the most used datatype in Python and is very flexible. All the items in a list do not need to be of the same type.<br/><br/><hr/>
                    Declaring a list is pretty straight forward. Items separated by commas are enclosed within brackets <code>[ ]</code>.
                    <div className="card card-body">
                        <pre>
                        a = [1, 2.2, 'python']            
                        </pre>
                    </div> 
                    We can use the slicing operator <code>[ ]</code> to extract an item or a range of items from a list. The index starts from 0 in Python.<br/><br/>
                    <div className="card card-body">
                        <pre>
                        {`a = [5,10,15,20,25,30,35,40]

# a[2] = 15
print("a[2] = ", a[2])

# a[0:3] = [5, 10, 15]
print("a[0:3] = ", a[0:3])

# a[5:] = [30, 35, 40]
print("a[5:] = ", a[5:])`}                
                        </pre>
                    </div>

                    <h4 className="Thead">Output</h4>
                    <div className="card card-body">
                        <pre>
                        a[2] =  15<br/>
                        a[0:3] =  [5, 10, 15]<br/>
                        a[5:] =  [30, 35, 40]              
                        </pre>
                    </div>  
                    Lists are mutable, meaning, the value of elements of a list can be altered.
                    <div className="card card-body">
                        <pre>
                        a = [1, 2, 3]<br/>
                        a[2] = 4<br/>
                        print(a)              
                        </pre>
                    </div>
                    <h4 className="Thead">Output</h4>
                    <div className="card card-body">
                        <pre>
                            [1, 2, 4]
                         </pre>   
                    </div> 
                    <hr/>
                    <h4 className="Thead">Python Tuple</h4>
                    Tuple is an ordered sequence of items same as a list. The only difference is that tuples are immutable. Tuples once created cannot be modified.<br/><br/>
                    Tuples are used to write-protect data and are usually faster than lists as they cannot change dynamically.<br/>
                    It is defined within parentheses <code>()</code> where items are separated by commas.
                    <div className="card card-body">
                        <pre>
                        t = (5,'program', 1+3j)
                         </pre>   
                    </div>

                    We can use the slicing operator <code>[]</code> to extract items but we cannot change its value.
                    <div className="card card-body">
                        <pre>
                        {`t = (5,'program', 1+3j)

# t[1] = 'program'
print("t[1] = ", t[1])

# t[0:3] = (5, 'program', (1+3j))
print("t[0:3] = ", t[0:3])

# Generates error
# Tuples are immutable
t[0] = 10`}
                         </pre>   
                    </div>
                     <h4 className="Thead">Output</h4>
                     <div className="card card-body">
                        <pre>
                        {`t[1] =  program
t[0:3] =  (5, 'program', (1+3j))
Traceback (most recent call last):
File "test.py", line 11, in <module>
t[0] = 10
TypeError: 'tuple' object does not support item assignment `}
                         </pre>   
                    </div>   
                    <hr/>
                    <h4 className="Thead">Python Strings</h4>
                    String is sequence of Unicode characters. We can use single quotes or double quotes to represent strings. Multi-line strings can be denoted using triple quotes, <code>'''</code> or <code>"""</code>.
                    <div className="card card-body">
                        <pre>
                        {`s = "This is a string"
print(s)
s = '''A multiline
string'''
print(s)`}
                        </pre>   
                    </div>
                     <h4 className="Thead">Output</h4>
                     <div className="card card-body">
                        <pre>
                        This is a string<br/>
                        A multiline<br/>
                        string   
                        </pre>   
                    </div>  
                    Just like a list and tuple, the slicing operator <code>[ ]</code> can be used with strings. Strings, however, are immutable.<br/><br/>
                    <div className="card card-body">
                        <pre>
                        {`s = 'Hello world!'

# s[4] = 'o'
print("s[4] = ", s[4])

# s[6:11] = 'world'
print("s[6:11] = ", s[6:11])

# Generates error
# Strings are immutable in Python
s[5] ='d'`}
                        </pre>   
                    </div>
                    <h4 className="Thead">Output</h4>
                    <div className="card card-body">
                        <pre>
                        {`s[4] =  o
s[6:11] =  world
Traceback (most recent call last):
  File "<string>", line 11, in <module>
TypeError: 'str' object does not support item assignment`}
                        </pre>   
                    </div>
                    <hr/>
                    <h4 className="Thead">Python Set</h4>
                    Set is an unordered collection of unique items. Set is defined by values separated by comma inside braces <code>{ }</code>. Items in a set are not ordered.<br/>
                    <div className="card card-body">
                        <pre>
                         {`a = {5,2,3,1,4}

# printing set variable
print("a = ", a)

# data type of variable a
print(type(a))`}  
                        </pre>   
                    </div>
                    <h4 className="Thead">Output</h4>
                    <div className="card card-body">
                        <pre>
                       {` a =  {1, 2, 3, 4, 5}
<class 'set'>`}
                        </pre>   
                    </div>
                    We can perform set operations like union, intersection on two sets. Sets have unique values. They eliminate duplicates.
                    <div className="card card-body">
                        <pre>
                        {`a = {1,2,2,3,3,3}
print(a) `}
                        </pre>   
                    </div>
                    <h4 className="Thead">Output</h4>
                    <div className="card card-body">
                        <pre>
                            {`{1, 2, 3}`}
                        </pre>   
                    </div>
                    Since, set are unordered collection, indexing has no meaning. Hence, the slicing operator <code>[]</code> does not work.<br/> <br/>  
                    <div className="card card-body">
                        <pre>
                       {` >>> a = {1,2,3}
>>> a[1]
Traceback (most recent call last):
  File "<string>", line 301, in runcode
  File "<interactive input>", line 1, in <module>
TypeError: 'set' object does not support indexing `}
                        </pre>   
                    </div>
                    <hr/><hr/>
                    <h4 className="Thead">Python Dictionary</h4>
                    Dictionary is an unordered collection of key-value pairs.<br/>
                    It is generally used when we have a huge amount of data. Dictionaries are optimized for retrieving data. We must know the key to retrieve the value.<br/>
                    In Python, dictionaries are defined within braces <code>{}</code> with each item being a pair in the form <code>key:value</code>. Key and value can be of any type.
                    <div className="card card-body">
                        <pre>
                        {`>>> d = {1:'value','key':2}
>>> type(d)
<class 'dict'>`}
                        </pre>   
                    </div>
                    We use key to retrieve the respective value. But not the other way around.
                    <div className="card card-body">
                        <pre>
                       {`d = {1:'value','key':2}
print(type(d))

print("d[1] = ", d[1]);

print("d['key'] = ", d['key']);

# Generates error
print("d[2] = ", d[2]);`}
                         </pre>   
                    </div>
                    <h4 className="Thead">Output</h4>
                    <div className="card card-body">
                        <pre>
                        {`<class 'dict'>
d[1] =  value
d['key'] =  2
Traceback (most recent call last):
  File "<string>", line 9, in <module>
KeyError: 2`}

                         </pre>   
                    </div>
                    <hr/>
                    <h4 className="Thead">Conversion between data types</h4>
                    We can convert between different data types by using different type conversion functions like <code>int()</code>, <code>float()</code>, <code>str()</code>, etc.<br/>
                    <div className="card card-body">
                        <pre>
                        {`>>>`}float(5)<br/>
                        5.0
                         </pre>   
                    </div>
                    Conversion from float to int will truncate the value (make it closer to zero).
                    <div className="card card-body">
                        <pre>
                       {`>>> int(10.6)
10
>>> int(-10.6)
-10`}
                         </pre>   
                    </div>
                    Conversion to and from string must contain compatible values.
                    <br/>
                    <div className="card card-body">
                        <pre>
                        {`>>> float('2.5')
2.5
>>> str(25)
'25'
>>> int('1p')
Traceback (most recent call last):
  File "<string>", line 301, in runcode
  File "<interactive input>", line 1, in <module>
ValueError: invalid literal for int() with base 10: '1p' `}
                         </pre>   
                    </div>

                    We can even convert one sequence to another.<br/>
                    <div className="card card-body">
                        <pre>
                        {`>>> set([1,2,3])
{1, 2, 3}
>>> tuple({5,6,7})
(5, 6, 7)
>>> list('hello')
['h', 'e', 'l', 'l', 'o'] `} 
                         </pre>   
                    </div>
                    To convert to dictionary, each element must be a pair:<br/>
                    <div className="card card-body">
                        <pre>
                        {`>>> dict([[1,2],[3,4]])
{1: 2, 3: 4}
>>> dict([(3,26),(4,44)])
{3: 26, 4: 44}`}
                         </pre>   
                    </div>
                </div>          
            }
            />
        </div>
    )
}

export default Python1
