alert("Only 2 mins left...hurry Up!!!");

var age = prompt("What's your age?",18)
console.log(name)

// document.write(age)
if(age>=18){
    console.log("User is Eligible");
}
else{
    console.log("User is not eligible");
}


var radius=parseInt(prompt("radius:"))
console.log(typeof (radius))
console.log(radius)

var area=3.14 + radius + radius
console.log(area)

var class1=confirm("There is a class tomorrow")
console.log(class1);

//    If you click on "Ok" Button 

// Empty string if the value is empty inside the string
// NaN- parseint(prompt(Empty-string) string is not a number )

// If you click on "cancel" button

// The value will be "null"
// null + null = 0

// {
//     Empty!=null  //empty we consider it in most case of strings
//     var a; //empty is by default in case of string(undefined)
//     var a=null; //null  
//     undefined, null are datatype
//     datatype of null is object
// }
console.log(String.fromCharCode(98))  // 'b'



//string "hi" 'hi'  `hi`-
// `${}`
var n1="abu";
var n2="bakar";
console.log(`${n1} ${n2}`);
console.log(n1+" "+n2);

//bigint
//  (> 2^53-1)  (< -2^53-1)

//rectangle
var l=5;
var b=3;
console.log(`Area of rectangle: ${2*(l+b)}`);

//undefined- declare a variable not defined any value then variable value
// would be undefined. 
var a;
console.log(a);

var t=null;
if(true){
    t="title";
    document.write(t);
}
else{
    t="page not found";
    document.write(t);
}


