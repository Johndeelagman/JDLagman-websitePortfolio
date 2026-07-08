/*=================================================
                PRELOADER
=================================================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if(preloader){

        preloader.style.opacity = "0";

        preloader.style.visibility = "hidden";

        preloader.style.transition = "0.8s";

    }

});

/*=================================================
                MOBILE MENU
=================================================*/

const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbar");

if(menuBtn){

    menuBtn.onclick = () =>{

        navbar.classList.toggle("active");

        menuBtn.classList.toggle("fa-times");

    }

}

/*=================================================
            CLOSE MENU AFTER CLICK
=================================================*/

document.querySelectorAll(".navbar a").forEach(link=>{

    link.onclick=()=>{

        navbar.classList.remove("active");

    }

});

/*=================================================
            STICKY HEADER
=================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.background="rgba(15,23,42,.92)";
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

    }

    else{

        header.style.background="rgba(15,23,42,.55)";
        header.style.boxShadow="none";

    }

});

/*=================================================
            SCROLL PROGRESS BAR
=================================================*/

const progressBar=document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

    const scrollTop=document.documentElement.scrollTop;

    const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    const progress=(scrollTop/height)*100;

    progressBar.style.width=progress+"%";

});

/*=================================================
            ACTIVE NAVIGATION
=================================================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-180;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*=================================================
                TYPING EFFECT
=================================================*/

const typingElement=document.querySelector(".typing");

const words=[

"Frontend Developer",

"Cybersecurity Student",

"UI / UX Designer",

"Software Engineer",

"Web Developer"

];

let wordIndex=0;
let charIndex=0;
let deleting=false;

function typeEffect(){

if(!typingElement) return;

const currentWord=words[wordIndex];

if(!deleting){

typingElement.textContent=currentWord.substring(0,charIndex++);

if(charIndex>currentWord.length){

deleting=true;

setTimeout(typeEffect,1200);

return;

}

}

else{

typingElement.textContent=currentWord.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(typeEffect,deleting?60:120);

}

typeEffect();

/*=================================================
            FADE UP ANIMATION
=================================================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{threshold:.2});

document.querySelectorAll(".fade-up").forEach(el=>{

observer.observe(el);

});

/*=================================================
        SMOOTH SCROLL BUTTONS
=================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*=================================================
            SCROLL TO TOP BUTTON
=================================================*/

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topButton";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#3b82f6";
topBtn.style.color="#fff";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.fontSize="20px";
topBtn.style.boxShadow="0 10px 30px rgba(0,0,0,.3)";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*=================================================
        SIMPLE PARALLAX EFFECT
=================================================*/

const heroImage=document.querySelector(".hero-image img");

window.addEventListener("mousemove",(e)=>{

if(!heroImage) return;

const x=(window.innerWidth/2-e.pageX)/40;
const y=(window.innerHeight/2-e.pageY)/40;

heroImage.style.transform=
`translate(${x}px,${y}px)`;

});

/*=================================================
            CURRENT YEAR FOOTER
=================================================*/

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=`Designed & Developed with ❤️ © ${new Date().getFullYear()}`;

}

/*=================================================
            CONSOLE MESSAGE
=================================================*/

console.log(
"%cWelcome to John Dee Lagman's Portfolio",
"color:#3b82f6;font-size:18px;font-weight:bold;"
);

console.log(
"%cDesigned with HTML, CSS & JavaScript",
"color:#8b5cf6;font-size:14px;"
);

/*=================================================
                END OF SCRIPT
=================================================*/

