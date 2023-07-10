

//                             call back fn - fn wh is passed as an argument to the other fn 



function callme(a,b,f1,f2){
    let result=a+b;
    function validate(days){
        if(days>0 && days<=30){
            console.log("valid");
        }
        else{
            console.log("invalid");
        }
    }
    if(result%2===0){
        f1(result,validate);
    } 
    else{
        f2(result);
    }
}

function f1(result,validDays){
    console.log(result,"even");
    result+=4;
    validDays(result);
}
function f2(result){
    console.log(result,"odd");
}

callme(10,12,f1,f2);  //11 odd

//  addEventListener("click",modalBox)   =>  modalBox is the call-back fn, the defn and signature is decided by us .
//  We just pass the control of our fn to the addEvList, tht is what make sure that call the fn whenever we make an event
// but addEventListener is responsible for call the callback that u passed(modalBox)


//amazon want to buy laptop
// search()  => makes an request to the server(fn) => 
// show the fecthed data from database of amazon service on UI 
//  the frontend have written some code and that is what loading the data on UI, after that 
//  user interact with it(user added 2 products in cart)

// fetch() => fn that will make a physical network call to load the data. { call the fetch fn after the search fn }
// show()  => depends on the fetch fn fetch will take care of calling how when the data is loaded

//   example
// function fetch(show){
//     code to make network call
//     after 1s it recieves response
//     show();
// }
// fetch(show);

//                        Asynchronous ->  non-sequential wh is call back fn's, timer
//                                    set time out (or) timers

// function callme(){
//     console.log("inside callme fn");
// }
// console.log("beforetimer");
// setTimeout(callme,6000) //(fn name, millisec timer)
// console.log("aftertimer");

//the task of set timer is to register and the process of registration is done for timer about 5s. once its done 
// it is removed from call stack its done in ( 1 ms or 0.1 ms )
//                    event loop-  to monitoring the call stack queue, microtask queue and call back queue
//         event loop =>  gives the priority more to microtask queue than the callback queue



let x = 20;
console.log("1")
let f1=()=>{
    x++;
    console.log("2")
}
let f2=()=>{
    console.log("7",x);
}
setTimeout(f1,1000);
setTimeout(f2,1200);
console.log("4")     // o/p - 1,4,2,7,21



console.log(1)

setTimeout(() => {
    console.log(3)
    setTimeout(()=>{
        console.log(2)
    },200)
},300)

setTimeout(() => {
    console.log(4)
},520)

console.log(5)    //o/p - 1 5 3 2 4  if u reduce the value 520  the op will change



console.log(1)
setTimeout(()=>{
    console.log(2)
},0);
console.log(3)  //o/p - 1 3 2



function f(){
    console.log(2)
}
console.log(1)
setTimeout(()=>{
    console.log(7)
},0)
queueMicrotask(f)
console.log(4)  //o/p - 1 4 2 7



setTimeout(()=>{
    console.log(3)
    queueMicrotask(()=>{
        console.log(2)
    })
})

queueMicrotask(()=>{
    console.log(7)
    setTimeout(()=>{
        console.log(5)
    })
})                   // o/p - 7 3 2 5



// let u={};

// try{
    
//     console.log(u.a.name);  //can't read prop of undef (reading "name")
//     console.log(u.a);   // now this error wont capture bcz the above line moves to catch block
// }
// catch(e){
//     console.log(e);
// }



                                //promises


let prom=new Promise((resolve,reject)=>{
        resolve("accio");    
})

let x=prom.then((data)=>{
    console.log(data);   //accio
    return "jack";
})
setTimeout(()=>{
    console.log(prom)  //fullfilled, accio
    console.log(x);    //fullfilled, jack
})



let prom=new Promise((resolve,reject)=>{
        resolve();    
})
let x=prom.then((data)=>{
    console.log(data);   //undef
    return "jack";
})
setTimeout(()=>{
    console.log(prom)  //fullfilled, undef
    console.log(x);    //fullfilled, jack
})



let prom=new Promise((resolve,reject)=>{
    setTimeout(()=>{
         reject("accio");    
    })      
})
let x=prom.then((data)=>{
    return "jack";
})
setTimeout(()=>{
    console.log(prom)  //rejected, accio
    console.log(x);    //rejected, accio
})



let prom=new Promise((resolve,reject)=>{
    setTimeout(()=>{
         resolve("accio");    
    })      
})
let x=prom.then((data)=>{
    let a=null;
    console.log(a.b)  //this line won't execute bcz then method is not executed
    return "jack";
})
setTimeout(()=>{
    console.log(prom)  //fullfilled, accio
    console.log(x);    //rejected, can't read prop of null
})



let prom=new Promise((resolve,reject)=>{
    setTimeout(()=>{
         reject("accio");    
    })      
})
let x=prom.then((data)=>{
    let a=null;
    console.log(a.b)  //this line won't execute bcz then method is not executed
    return "jack";
})
setTimeout(()=>{
    console.log(prom)  //rejected, accio
    console.log(x);    //rejected, accio
})


let prom=new Promise((resolve,reject)=>{
    setTimeout(()=>{
         reject("accio");    
    })      
})
let x=prom.catch((data)=>{
    return "jack";
})
setTimeout(()=>{
    console.log(prom)  //rejected, accio
    console.log(x);    //fullfilled, jack
})



let prom=new Promise((resolve,reject)=>{
    setTimeout(()=>{
         resolve("accio");    
    })      
})
let x=prom.catch((data)=>{
    return "jack";
})
setTimeout(()=>{
    console.log(prom)  //fullfilled, accio
    console.log(x);    //fullfilled, accio
})



let prom=new Promise((resolve,reject)=>{
    setTimeout(()=>{
         reject("accio");    
    })      
})
let x=prom.catch((data)=>{
    let a=null;
    console.log(a.b);
    return "jack";
})
setTimeout(()=>{
    console.log(prom)  //rejected, accio
    console.log(x);    //rejected, Error
})



let prom=new Promise((resolve,reject)=>{
    setTimeout(()=>{
         resolve("accio");    
    })      
})
let x=prom.catch((data)=>{
    let a=null;
    console.log(a.b);
    return "jack";
})
setTimeout(()=>{
    console.log(prom)  //fullfilled, accio
    console.log(x);    //fullfilled, accio
})




// let prom=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//          resolve("accio");    
//     })      
// })
// let x=prom.then((data)=>{
//     let a=null;
//     console.log(a.b)  //this line won't execute bcz then method is not executed
//     return "jack";
// })
// setTimeout(()=>{
//     console.log(prom)  //fullfilled, accio
//     console.log(x);    //rejected, can't read prop of null
// })



let prom=new Promise((resolve,reject)=>{
    setTimeout(()=>{
         reject("accio");    
    })      
})
let x=prom.then((data)=>{
    let a=null;
    console.log(a.b)  //this line won't execute bcz then method is not executed
    return "jack";
})
setTimeout(()=>{
    console.log(prom)  //rejected, accio
    console.log(x);    //rejected, accio
})



let prom=new Promise((resolve,reject)=>{
    setTimeout(()=>{
         resolve("accio");    
    })      
})
let x=prom.then((data)=>{
    console.log(data);
    return "jack";
})
.then((data)=>{
    console.log(data);
    return "12" 
})
.then((data)=>{
    return "om";
})
.catch((data)=>{
    console.log("jadjcck");
    console.log(data);
})
.finally(()=>{
    return "siva";
})
setTimeout(()=>{
    console.log(prom)  //fullfilled, accio
    console.log(x);    //fullfilled, accio
       //fullfilled, accio
})
