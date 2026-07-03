const pages=document.querySelectorAll(".page");
const enterBtn=document.getElementById("enterBtn");
const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const loveBtn=document.getElementById("loveBtn");

let current=0;

function showPage(index){
pages.forEach((p,i)=>{
p.classList.toggle("active",i===index);
});
current=index;
}

enterBtn.onclick=()=>{
showPage(1);
};

yesBtn.onclick=()=>{
showPage(2);
};

noBtn.onclick=()=>{
alert("🥹🫶 Pleaseee don't say no...");
};
const slides=document.querySelectorAll(".slide");
let slideIndex=0;

function autoSlide(){
if(slides.length===0)return;

slides.forEach(img=>img.classList.remove("active"));
slides[slideIndex].classList.add("active");

slideIndex++;
if(slideIndex>=slides.length){
slideIndex=0;
}

setTimeout(autoSlide,2500);
}

loveBtn.onclick=()=>{
showPage(3);
autoSlide();
};
window.onload=()=>{
showPage(0);
};

document.addEventListener("contextmenu",e=>{
e.preventDefault();
});

document.addEventListener("dragstart",e=>{
e.preventDefault();
});

document.addEventListener("selectstart",e=>{
e.preventDefault();
});
