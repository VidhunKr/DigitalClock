const hours=document.querySelector("#hours")
const mintutes=document.querySelector("#minutes")
const seconds=document.querySelector("#seconds")
const section=document.querySelector("#section")

//clock
const btn=document.querySelector("#btn")
btn,addEventListener("click",()=>{
    if(btn.innerHTML==="Dark"){
        btn.innerHTML="Light"
        document.body.style.backgroundColor="black"
        document.body.style.color="#00ffff"
    }else{
        btn.innerHTML="Dark"
        document.body.style.backgroundColor="white"
        document.body.style.color="#black"

    }
})

const DisplayTime=()=>{
    let hrs=new Date().getHours()
    let min=new Date().getMinutes()
    let sec=new Date().getSeconds()
    if (hrs>=12){
        section.innerHTML="PM"
    }else{
        section.innerHTML="Am"
    }
    if(hrs>12){
        hrs=hrs-12
    }if(min<10){
        min="0"+min
    }if(sec<10){
        sec="0"+sec
    }
    hours.innerHTML=hrs
    mintutes.innerHTML=min
    seconds.innerHTML=sec
}
setInterval(DisplayTime,10)