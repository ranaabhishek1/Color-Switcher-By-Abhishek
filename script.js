let orange= document.querySelector('#orange');

let black= document.querySelector('#black');

let green= document.querySelector('#green');

let yellow= document.querySelector('#yellow');

let blue= document.querySelector('#blue');


let body=document.querySelector('body')

let heading=document.querySelector('.heading')

let endtext=document.querySelector('.endtext')

let normal=document.querySelector('#normalbtn')


// add events

orange.addEventListener("click",function(){

body.style.backgroundColor="orange"

})


black.addEventListener("click",function(){

    body.style.backgroundColor="black"
    heading.style.color="white"
    endtext.style.color="white"
    
    })

    
green.addEventListener("click",function(){

    body.style.backgroundColor="green"
    heading.style.color="white"
    endtext.style.color="white"
    })


    
yellow.addEventListener("click",function(){

    body.style.backgroundColor="yellow"
    heading.style.color="black"
    endtext.style.color="black"
    })


    blue.addEventListener("click",function(){
        body.style.backgroundColor="blue"
        heading.style.color="white"
        endtext.style.color="white"
    })

    normal.addEventListener("click",function(){
        
        body.style.backgroundColor="white"
        heading.style.color="black"
        endtext.style.color="black"

    })