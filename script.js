const Home=document.querySelectorAll("a")
console.log(Home)

for(let i=0; i<5; i++){
    Home[i].onmouseover=()=>{
        console.log("Home")
        Home[i].nextElementSibling.style.display="block"
    }
Home[i].onmouseout=()=>{
    Home[i].nextElementSibling.style.display="none"
}
Home[i].onmousemove=(e)=>{
    Home[i].nextElementSibling.style.top=`${e.clientY-Home[i].getBoundingClientRect().Y}px`
    Home[i].nextElementSibling.style.left=`${e.clientX-Home[i].getBoundingClientRect().X}px`
console.log(Home[i].getBoundingClientRect().x)
}
}



