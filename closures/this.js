// let divNode={
//             tagName:"div",
//             className:"b",
//             id:"parent",
//             style:{
//                 color:"red",
//                 display:"none"
//             },
//             children:[
//                 {
//                     tag:"div",
//                     id:"child",
//                 },
//                 {
//                     tag:"p",
//                     class:"c",
//                     innerText:"some para"
//                 }
//             ]
// }



//  divNode=#20
//  divNode.style=#304
//  divNode.children=#232





// this keyword
//DOM intro

// this keyword can be used anywhere
// every line of code will be one of the possible 
//   global line
//   local line
// this keyword always refers to some address in the heap

// 1. when we use this keyword in global => global object
// 2. when this keyword is used inside fn , refers to obj reference who invoked it


//window => global variable
// console.log(window);

// console.log(this)  //object(some address)

// this.alert("hello")  //window.alert("hi") shows the alert
// console.log(this.a)
// var a=10
// function disc(){
//     console.log("inside disc")
// }
// this.disc() //window.disc()

//  In the global variable wh are declared with var and fn keyword will be part of window object.
//  let,const keyword declared in the global available are not to be a  part of window obj.


// using "this" keyword inside the fn will points to the reference of the object invoked


// let obj={  // #45
//     x:10,
//     y:20,
//     callme :function(){
//         //this = #45
//         console.log(this)
//     }
// }
// obj.callme()  // {x: 10, y: 20, callme: ƒ}



// let obj1={  //#45
//     x:10,
//     y:20,
//     callme :function(){
//         //this=#45
//         console.log(this)
//     },
//     parent:{ //#23
//         a:3,
//         b:4,
//         call:function(){  //#23
//             console.log(this)
//         }
//     }
// }
// obj1.callme()
// let fun=obj1.parent.call;
// fun();




// let obj={
//     a:10,
//     parent:function(){
//         console.log(this)   //{a: 10, parent: ƒ}
//         let o2={
//             call:function(){
//                 console.log(this)   //{call: ƒ}
//             }
//         }
//         o2.call()
//     }
// }
// obj.parent()




// let obj={
//     x:10,
//     a:function(){
//         console.log(this.x)
//     },
//     b:()=>{
//         console.log(this.x)
//     }
// }

// obj.b()  //window
// obj.a()  //obj




// let obj={
//     a:10,
//      b:function(){
//         console.log(this)   //{a: 10, b: ƒ}
//         let fn=()=>{
//             console.log(this)  //{a: 10, b: ƒ}
//         }
//         fn()
//     }
// }
// obj.b()
