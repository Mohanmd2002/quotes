let quote=document.getElementById("quote")
let author=document.getElementById("author")
let btn=document.getElementById("btn")

const url="http://api.quotable.io/random";

let getquote=()=>{
    fetch(url)
    .then((data)=>data.json())
    .then((item)=>{
        console.log(item.content);
        console.log(item.author)
        quote.innerHTML=item.content;
        author.innerText=item.author;
    });
}

window.addEventListener('load',getquote);
btn.addEventListener("click",getquote);


const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

function bg_change(){
    let hex_color = "#"
    for (i=1;i<=6;i++){
        hex_color += randHexValue()
        console.log(hex_color)
    }
    console.log(hex_color)
    one.style.backgroundColor = hex_color
}
function randHexValue(){
    let randomIndex = Math.floor(Math.random()*16) 
    // console.log(hex[randomIndex])
     return hex[randomIndex]
}
btn.addEventListener('click',bg_change)

function bgchange(){
    let hexcolor="#"
    for(j=1;j<=6;j++){
        hexcolor += randomhexvalue()
    }
    console.log(hexcolor)
    quote.style.backgroundColor=hexcolor
}
function randomhexvalue(){
    let randomcolor=Math.floor(Math.random()*16)
    return hex[randomcolor]
}
btn.addEventListener('click',bgchange)