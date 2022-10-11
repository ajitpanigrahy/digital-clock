console.log("Welcome To Digital clock Project");

console.log(new Date);

let he = document.getElementById("hours");
let me = document.getElementById("mins");
let se = document.getElementById("secs");
let ampme = document.getElementById("ampm");

function updateTime(){
    let ampm="AM";
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();

if(h>12){
    h=h-12;
    ampm="PM";
}

    he.innerText=h;
    me.innerText=m;
    se.innerText=s;
    ampme.innerText=ampm;

    setTimeout(() => {
        updateTime();
    }, 1000);
}
updateTime();

