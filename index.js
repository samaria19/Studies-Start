/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
*DATATYPES :
*
*0.Data type specifies the size and type of values that can be stored in an identifier. The Java language is rich in its data types. Different data types allow you to select the type appropriate to the needs of the application.
*Data types in Java are classified into two types:
*Primitive—which include Integer, Character, Boolean, and Floating Point.
*Non-primitive—which include Classes, Interfaces, and Arrays.

*1.JavaScript has only one type of number. Numbers can be written with or without decimals.

*2.Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.
*/
//1.Declaration //
var x =18; 

/*
*Strings JavaScript strings are used for storing and manipulating text.
*A JavaScript string is zero or more characters written inside quotes.
*/
//2.Declaration //
var y="Smothers"

/*
*Boolean
*A JavaScript Boolean represents one of two values: true or false.

Very often, in programming, you will need a data type that can only have one of two values, like

YES / NO
ON / OFF
TRUE / FALSE
For this, JavaScript has a Boolean data type. It can only take the values true or false.

The Boolean() Function
You can use the Boolean() function to find out if an expression (or a variable) is true:
*/ 
//3.Declaration //
Boolean(100>10)
/*
* Array
*JavaScript arrays are used to store multiple values in a single variable.
*An array is a special variable, which can hold more than one value at a time.
*An array can hold many values under a single name, and you can access the values by referring to an index number.
*/
//4.Declaration //
var nails=["Short","Medium","Long"]

/* 
*Function
*A JavaScript function is a block of code designed to perform a particular task.
*A JavaScript function is executed when "something" invokes it (calls it).

*/
//5.Declaration//
function myfunction (10,10){
  return 10*10
}
/*
*Undefined 
*The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.
*The undefined property indicates that a variable has not been assigned a value, or not declared at all.
*/
//6.Declaration//
function test(t) {
  if (t === undefined) {
    return 'Undefined value!';
  }
  return t;

  /*
  *NaN
  *The global NaN property is a value representing Not-A-Number.
*/
//7.Declaration//
function sanitise(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log(sanitise('1'));
// expected output: "1"

console.log(sanitise('NotANumber'));
// expected output: NaN
/*
*Infinity and -infinity 
*The global property Infinity is a numeric value representing infinity.
*/
//8.Declaration//
const maxNumber = Math.pow(10, 1000); // max positive number

if (maxNumber === Infinity) {
  console.log('Let\'s call it Infinity!');
  // expected output: "Let's call it Infinity!"
}

console.log(1 / maxNumber);
// expected output: 0
/*
*Operations :
0.An operator performs some operation on single or multiple operands (data value) and produces a result. ... For example 1 + 2, where + sign is an operator and 1 is left operand and 2 is right operand. + operator adds two numeric values and produces a result which is 3 in this case.
JavaScript comes with a set of operators you'd expect from any modern language. There are four categories: arithmetic, comparison, assignment, and logical.

1. assignment Operations
The assignment operator (=) assigns a value to a variable.
*/
//1.Declaration//
var x = 10;
/*
2. arithmetic operators
Arithmetic operators perform arithmetic on numbers (literals or variables).
A typical arithmetic operation operates on two numbers.

The two numbers can be literals:
*/
//2.Declaration//
var x = 100 + 50;
or 
var x = a + b;
/*
3. comparison operators
*Comparison operators are used in logical statements to determine equality or difference between variables or values.
*/
//3.Declaration//
if (age < 18) text = "Too young to buy alcohol";
/*
4.logical operators
Logical operators are used to determine the logic between variables or values.
*/
//4.Declaration//
 if (a > b && c == d) 
/*
0.String manipulation:

Strings are objects within the JavaScript language. They are not stored as character arrays, so built-in functions must be used to manipulate their values. The functions provide various ways to access the contents of a string variable. ... The functions provide various ways to access the contents of a string variable.












0.Control flow:
The control flow is the order in which the computer executes statements in a script.
Code is run in order from the first line in the file to the last line, unless the computer runs across the (extremely frequent) structures that change the control flow, such as conditionals and loops. 
uses a conditional structure or if...else, so that different code executes depending on whether the form is complete or not:

1. if statements
Use if to specify a block of code to be executed, if a specified condition is true
*/
//1,Declaration//
if (hour < 18) {
  greeting = "Good day";
}
/*
2. Else-if statments 
Use else if to specify a new condition to test, if the first condition is false
*/
//2.Declaration//
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
/*
3. Else statements
Use else to specify a block of code to be executed, if the same condition is false
*/
//3.Declaration//
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
/*
0. loops:
loops are used to repeatedly run a block of code - until a certain condition is met. When developers talk about iteration or iterating over, say, an array, it is the same as looping. JavaScript offers several options to repeatedly run a block of code, including while, do while, for and for-in.

1. while loops 
The while loop loops through a block of code as long as a specified condition is true.
*/
//1,Declaration//
while (i < 10) {
  text += "The number is " + i;
  i++;
}

/*
2. for loop
Statement 1 is executed (one time) before the execution of the code block.
Statement 2 defines the condition for executing the code block.
Statement 3 is executed (every time) after the code block has been executed.
*/
//2.Declaration//
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

for(n=10; n>=0; n--) { //count BACKWARDS
      System.out.println(n);
    }//loop
    System.out.println("Blast off!");



