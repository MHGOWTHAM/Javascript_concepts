//   call by value, call by reference, 
//  closures, high order function 

let a=10
function call(){
    let a=20;
    let b= () => {
        console.log(a)
     }
    return b;  //datatype of child function
}
console.log(call()); //return b fn

// 
// variables are divided into two types
//  -> primitive variables - (number, string, undefined, boolean)
//  -> non-primitive variables  - ( user defined variables - arrays, objects, function) wh are built on top of primitive 

  


// example -
// let obj={
//     key:{
//         key:{
//             // atlast it ends with primitive variables
//         }
//     }
// }

// actual value, reference (address)

// 2 types of memory in RAM to store the data - heap and stack (lesser in size compare to heap)

// Memory is a rack of bytes, each byte have 8 bit .Each bit having address of 0-based indexing


let student={
    name:"abu",
    age:23
}
student2=student;    //both refers to the same reference
student2.name="arul"
console.log(student.name,student2.name) //arul arul


// call by value : calling a function by passing a value
// call by reference : calling a function by passing a reference



function call(a,b){
    a=10;
    b[1]="ab"
}
let x=2 , y=[1,23,4];
call(x,y) //x = primitive, y = non-primitive(reference type variable)
console.log(x,y)   //2 , [1, 'ab', 4]
console.log(call(x,y))   //undefined => bcz no return type


function call(a,b,c){ //b=#25, c=#205
    a=10       
    b[1]=20    // it modifies the array -#25
    c.age=23   //it modifies the z obj  - #205
    c={dob:24}   //#301
    console.log(a,b,c)  //10, [14, 20], {dob: 24}
}
var x1=12, y1=[14], z={name:"arul"}
call(x1,y1,z)
console.log(x1,y1,z)    //12, [14, 20], {name: 'arul', age: 23}



let o={
    k:12,
    l:10
}
o=20;
console.log(o)  //20


function x(x,y,z) {
    // x=2, y=#20, z=#34
    x++;
    y[1]=10;
    z.h=21;   //#34 will change
    z={g:3};  //#40 will get store the obj 
    console.log(x,y,z)  //3, [6,10], {g:3}
}
let a=2,b1=[6],c1={k:10}
x(a,b1,c1)   // p ,#20, #34
console.log(a,b1,c1)  //2, [6,10], {k:10,h:21}



function x(x,y,z) {
    // x=12, y=#20, z=#34
    x++;
    y[1]=10;
    z={g:3};  //#40 will get store the obj 
    z.h=21;   //#40 will change
    console.log(x,y,z)  //13, [6,10], {g:3,h:21}
}
let a=12,b=[6],c={k:10}
x(a,b,c)   // p ,#20, #34
console.log(a,b,c)  //12, [6,10], {k:10}


var a=10;
let x=()=>{
    console.log(a)
}
function call(func){
    var a=20;
    func();
}
a=40;
call(x)  //40



//  CLOSURE is a function having access to the parent scope, even after the parent function has closed.
//  A closure is a function that retains access to variables and parameters from its outer scope 
//  even after the outer function has finished executing
// -> Variables created without a declaration keyword (var, let, or const) are always global, 
//   even if they are created inside a function.
//   function myFunction() {
//       a = 4; 
//    }

let bill=10;
function a(){
    let bill=40;
    return function(){
        console.log(bill)
    }
}
let r=a();
r();



let a=10;
let x = () =>{
    console.log(a)
}
function call(func){
    let a=100;  
    func();
}
a=23
call(x);  // 23 bcz g.e.c calls the fn "call"
          // if the a var in line - 152 have been declare as just a=100;
          // the output will be 100



function a(){
    let c=0;
    return function(){
        c+=1;
        console.log(c)
    }
}
let res=a()
res()  // 1
res()  // 2



function parent(){
    let child=(a)=>{
        console.log(a+b)
    }
    let a=20,b=100;
    return child;
}   
let a=32;
let bar=50;    
 let result= parent()   
 result(a+bar)   //182  


function call(a, b=1){
    console.log(a,b) // o/p => 1,1 , if u change undefined to 3 the output will be (1, 3)
}
call(1,undefined)  

// const obj1={
//     key:1
// }
// Object.seal(obj1)  //adding or modifying the prop will not be applicable for sealed objects

// obj1.key="2"
// console.log(obj1)

// hoisted();   //hoisted is not a function
// var hoisted=function() {
//     console.log("JS")
// }



var students = ["Simran", "Sakshi", "Komal", "Ishita", "Manya"];
var selected = students.slice(-5, -2);
console.log(selected);   //  ["Sakshi", "Komal", "Ishita"]  (-4,-1) =>(4th last ele ,eliminate 1 element)



