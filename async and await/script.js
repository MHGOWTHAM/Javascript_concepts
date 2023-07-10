/* 
    async and await
    static methods in promises
    JSON Api's

*/ 


//                                Async and await

// function getLocation(){
//     return new Promise((resolve,reject)=>{
//         let successCallback=(position)=>{
//             resolve(position);
//         }
//         let errorCallback=(error)=>{
//             reject(error);
//         }
//         navigator.geolocation.getCurrentPosition(successCallback,errorCallback);
//     })
// }

// let locationPromise=getLocation();
// locationPromise.then((position)=>{
//     let lat=position.coords.latitude;
//     let long=position.coords.longitude;
//     return `Longitude:${long} , Latitude:${lat}`;

// }).then((data)=>{
//     let d=document.createElement("div");
//     d.innerText=data;
//     document.body.appendChild(d);
// }).catch((error)=>{
//     console.log(error);
//     document.write("failed to fetch the location");

// })

function some(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("abu");
        },3000)
    })
}


function some1(name){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(name +" "+ "arul");
        },2000)
    })
}

// async function solve(){
//     let name =  await some();

//     console.log(name);  //after 3s it will print ( abu )

//     let fullName = await some1(name);

//     console.log(fullName);  //after 3s+2s it will print  ( abu arul )
// }
// solve();



// some().then((data)=>{
//     let x=some1(data);
//     x.then((data)=>{
//         console.log(data);  //abu arul
//     })
// })

// let obj={
//     name:"abu",
//     age:22
// }

// let parse=JSON.stringify(obj);
// console.log(parse)  //{"name":"abu","age":22}

// let str='{"name":"abu","age":20}';

// let pare1=JSON.parse(str);
// console.log(pare1);   //{name: 'abu', age: 20}
async function get(){
    return await Promise.resolve("i");
}
let x=get();
console.log(x);

let a=new Promise(
    set
)