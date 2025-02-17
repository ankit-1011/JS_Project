let h1=document.querySelector("h1")
let div=document.querySelector(".div")
let btn=document.querySelector("button")

function cl()
    {
        let red=Math.floor(Math.random()*255)
        let blue=Math.floor(Math.random()*255)
        let green=Math.floor(Math.random()*255)

        color=`rgb(${red},${blue},${green})`
         
        h1.innerText=color;

     return color;
    }


btn.addEventListener("click",function()
{
    div.style.backgroundColor=cl();
})