//    DOM
        // Document Object Model  - With the HTML DOM, JavaScript can access and change all the elements of an HTML document.
//         When a web page is loaded, the browser creates a Document Object Model of the page.

            // The HTML DOM model is constructed as a tree of Objects:

            // The HTML DOM Tree of Objects
            //                     root node - html
            //     node-(head)                               node-(body)
            //     node-link                                 node- a
            //     leafNode-title                            


            // With the object model, JavaScript gets all the power it needs to create dynamic HTML:

            // JavaScript can change all the HTML elements in the page
            // JavaScript can change all the HTML attributes in the page
            // JavaScript can change all the CSS styles in the page
            // JavaScript can remove existing HTML elements and attributes
            // JavaScript can add new HTML elements and attributes
            // JavaScript can react to all existing HTML events in the page
            // JavaScript can create new HTML events in the page

            // The DOM is a W3C (World Wide Web Consortium) standard.

            // The DOM defines a standard for accessing documents:

            // "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs 
            // and scripts to dynamically access and update the content, structure, and style of a document.

            // The W3C DOM standard is separated into 3 different parts:

            // Core DOM - standard model for all document types
            // XML DOM - standard model for XML documents
            // HTML DOM - standard model for HTML documents

            // What is the HTML DOM?
            // The HTML DOM is a standard for how to get, change, add, or delete HTML elements.


    

let node=document.getElementById("abu")
console.log(node)   //get the whole p tag   <p id="abu">Some Content </p>
console.log(node.id)  //abu
console.log(node.innerText)  //Some Content
console.log(node.innerText.length)  //12

node.innerText="Arul"    
console.log(node.className)  //danger
node.className="" //change the color to none

node.remove()   //delete the p tag in browser


// Events - just like an incident
// clicking on an Element
// swipe the page, selected, changing the element, mouse hover/ unhover
// dragging, scrolling, pressing - event

const docName=document.getElementById("abu")

function change(){
     docName.innerText = docName.innerText==="Abu"?"Arul":"Abu"
}


// WEB API - documnet Api wh is created by web developers and available in the browser
    // gives the reference of an html element by using "document.getElementById"
    // console.log(document)
    // console.log(window.document===document&&this.document===document)  bcz window and this is global



    <div class="parent" id="parent">  //0
          Parent Element
           <div class="child">       //1
               Child Element
               <div class="test">     //2
                    Test Element
               </div>  
            </div>
            <div class="sibling">     //3
                 Sibling Element
            </div>
       </div>

    const parentId=document.getElementById("parent")  //1 reference
    console.log(parentId.innerText)
    
    const divEle=document.getElementsByTagName("div")  //list of reference
    console.log(divEle[1].innerText="Children")


      const testEle=document.getElementsByClassName("test")
       console.log(testEle.innerText)

function change(){
     const divEle=ele[3]
     let c=0;
     for(let x in divEle.style){
        console.log(x)   //displays all the styles in css
        c++;
     }
    console.log(c)       //606
}

//                                getComputedStyle - get window element 

function change(){
        const divEle=ele[3]
        divEle.style.color="blue"
        // console.log(divEle.style)                        //this style will get effect only if we use style attribute
        // console.log(window.getComputedStyle(divEle))          //get list of styles
        // console.log(window.getComputedStyle(divEle).color)     // get the color of the divEle
}


//                                children

function change(){
        const divEle=ele[0];
        const test=divEle.children[0].children[0];
        const child=divEle.children[0];
        test.style.color="blue"      //change the text color of test element
        child.style.color="orange"   //change the text color of child element
}


//                        querySelector,All,.test,#child

let element=document.querySelector("div:first-child")
console.log(element)  //   <div class="child">  Child Element
                      //   <div class="test">Test Element</div>
                      //   </div>

let elements=document.querySelectorAll("div:first-child")
// console.log(elements)    // 1 - child  , 2 - test 

console.log(elments[0].children[0]===elements[1]) //o/p  - true


const ele1=document.querySelector(".test")
console.log(ele1.parentNode)   // div of child and test
console.log(ele1.parentElement)  //both are same

const ele2=document.querySelector(".test")
console.log(ele2.nextSibling)           //print the line break => #text
console.log(ele2.previousSibling)       //print the line break => #text
console.log(ele2.nextElementSibling)       //null bcz there is no element
console.log(ele2.previousElementSibling)   //null bcz there is no element

const ele=document.querySelector(".parent")
console.log(ele.nextSibling)              //print the line break => #text
console.log(ele.previousSibling)          //print the line break => #text
console.log(ele.nextElementSibling)       //div.sibling
console.log(ele.previousElementSibling)   //b
console.log(ele.children)                 // b, child, sibling
console.log(ele.childNodes)               //7 -[text, b, text, div.child, text, div.sibling, text]


//                                createElement

const boldEle=document.createElement("b")  //attach this reference as a child to body element

boldEle.innerText="Java Script"
const bodyEle=document.body;
bodyEle.append(boldEle)

const rootEle=document.getElementById("root");

function add(){
        const bold=document.createElement("b")
        bold.innerText="inside ";

        const p=document.createElement("p")
        p.innerText="Para inside ";
        rootEle.append(bold);
}

function openModal(){
        const modal=document.getElementById("modal")        
        modal.style.display="flex";
}
function closeModal(){
        const modal=document.getElementById("modal")        
        modal.style.display="none";
}