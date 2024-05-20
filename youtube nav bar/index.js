
const meinDiv = document.querySelector("#meinDiv");
const navIcon = document.querySelector("#icon");
const navIcon2 = document.querySelector("#bar");
const colorBox = document.querySelector(".test");


navIcon.addEventListener("click",()=>{
   meinDiv.style.display = "block";
   meinDiv.classList.toggle("open");
})

navIcon2.addEventListener("click",()=>{
    meinDiv.style.display = "none";
    meinDiv.classList.toggle("close")
})

