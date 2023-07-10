 /*
        block and context scope
        string methods
        destructuring
        higher order functions.
*/


//                   Scope is determined by where a variable is declared.

//   let, const === declared variables are block scoped =>
//   if, else, while, do-while, for (the variable is accessible within the block that is between the curly braces.)
//   var === declared variables are context scoped  => Context is the state of the current execution of code.


if(true){
    let a=10
    const b=20
    var c=30
    console.log(c)  //30
    function x(){
        console.log("inside x")
    }
}
console.log(c)   //30


console.log(a)  //undef
if(true){
    var a=10
    console.log(a)  //10
}
console.log(a)   //10


console.log(c,e)   //undef,undef
if(true){
    let a=10
    const b=20
    var c=30
    if(false){    
       var e=300
       console.log(c)    //
    }
}
console.log(c,e)    //30,undef



function call(){
    console.log(x)   //undef
    let a=20
    if(true){
        var x=200
        let y=100
        console.log(a+b+x)  //245
    }
}
let b=25
call();
console.log(x)  //x is not def

function boy(){
    let a=10;
    let x=2;
    function me(){
        let c=3;
        function you(){
            let d=4;
            console.log(a+x+d+c);
        }
        you();
    }
    me();
}
boy();
//                          STRING - 0-based indexing, strings are immutable in js

//       let str="ab@nn@hgh@ui"
// str[1]="a"   //it won't change the the string
// console.log(str[100])         //undef
// console.log(str.charAt(100))   //returns ( "" )empty string
// console.log(str.charCodeAt(1))   // 98

// console.log(str.split('@'))   // ab nn hgh ui
// str.trim()  // will remove the white spaces @start and @end
//  'c'.charCodeAt(0) => 99 ,   'a'.charCodeAt(0) => 97
//  'c'.charCodeAt(0) - 'a'.charCodeAt(0)  => 2



//         SPREAD OPERTOR

// let [a,b,c]=[1,2,3];
// console.log(a,b,c)

// let a=[1,4,6]
// let b=[2,3,a,45]   
// console.log(b)       //[2,3,[1,4,6],45]

//  [2,3,...a] =>  [2,3,1,4,6]
//  [3,...a]   =>  [3,1,4,6]
//  [...a]     =>  [1,4,6]


// let a=[1,4,6]  //#20
// let b=[...a]   //#38
// console.log(a,b,a===b)  [1,4,6], [1,4,6], false


// let s1="abc"
// let s2=[...s1]
// console.log(s2) //['a','b','c']


// let obj1={ x:10,y:20 }
// let obj2={ a:30,obj1,b:40 }
// console.log(obj2)  // { a:30, obj1:obj1, b:40 }


// let o1={ x:10,y:20 }
// let o2={ a:30,...obj1,b:40 }   //{a:30, ...{t:22}} => {a:30, t:22}
// console.log(o2)  // { a:30, x:10, y:20, b:40 }



//  Higher order func => fun wh returns/takes fn as values
                    // forEach
                    // map 
                    // filter
                    // reduce


function call(){
    return ()=>{
        console.log("open")
    }
}
// call(),callme(x) // => higher order fn 

// function callme(x){
//     x();
// }
// callme(()=>{})

//call-back func => fn wh is passed as an argument to another fn

// parent fn => higher oder fn

function parent(child){
    child();
}
parent(function(){    //callback func
    console.log("inside")
})


function parent(a){
    console.log(a)  //   ƒ child(){ return 20; }
}
function child(){
    return 20; 
}
parent(child)  //callback fn


//  Higher order func => fun wh returns/takes fn as values
                    // forEach - doesn't return any value
                    // map  - return another array of same length
                    // filter - return boolean value
                    // reduce

let arr=[2,3]
function forEach(call){
    for(let i=0;i<arr.length;i++){
        call(arr[i],i,arr)  //no error at this point
    }
}
    function x(ele,ind){
        console.log(ele,ind)   //2,0   3,1   
    }
 forEach(x)



// let result=arr.forEach(function (e,i,arr){
//     console.log(e,i,arr)   //2,0,[2,3]  3,1,[2,3]  
// })
// console.log(result)   //undef => bcz no return type

let arr1=[2,3]

//map => it will be stored the 'return value in the callback fn' into an array =>[2,4]

let res=arr.map(function (e,i,arr1){
        console.log(e,i,arr1) 
        return e+i;  //2+0  3+1
})
console.log(res)   //[2,4] 


// filter => it will return the output in the form of an array when the return value is true

function filter(call){
    aggregatedArray=[]
    for(let i=0;i<arr.length;i++){
        call(arr[i],i,arr)&&aggregatedArray.push(arr[i])
    }
    return aggregatedArray
}
filter((element,index)=>{index%2===0})


// let res=arr.filter(function (e,i,arr){
//     return (e%2==0);
// })
// console.log(res)  //[2] 3 is not printed bcz of return value is false .

// let res=arr.filter(function (e,i,arr){
//     return true;
// })
// console.log(res)    //[2,3]

// let res=arr.reduce(function (prev,ele,ind){  //prev value = value passed as 2nd argument (10 here)
//     console.log(prev,ele,ind)   //10, 5, 0  15, 3, 1
//     return p+e;                 //10+5=15   15+3=18   this "18" will return at the last execution of the fn
// },10)
// console.log(res)    //18

// let res=arr.reduce(function (prev,ele,ind){  //prev value = value passed as 2nd argument (10 here)
//     console.log(prev,ele,ind)   
//     //10, 2, 0 
//     //undefined, 3, 1
                  
// },10)
// console.log(res)  //undefined

let res2=arr.reduce(function (prev,ele,ind){  
        console.log(prev,ele,ind)   //2, 3, 1 starts from the index=1 bcz prev is not passed
                      
    })
    console.log(res2)   //undefined