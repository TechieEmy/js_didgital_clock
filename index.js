const hour = document.getElementById('hours');
const minute = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const ampm = document.getElementById('ampm');


 function updateClock(){
let h = new Date().getHours();
let min = new Date().getMinutes();
let s = new Date().getSeconds();
let ap = 'A.M'

if(h > 12){
                    h = h - 12
                    ap = 'P.M'
}

h = h < 10 ? '0' + h : h;
min = min < 10 ? '0' + min : min;
s = s < 10 ? '0' + s : s;

hour.innerText = h;
minute.innerText = min;
seconds.innerText = s;
ampm.innerText = ap;

setTimeout(()=>{
updateClock()
},1000)

 }
updateClock()
 
 