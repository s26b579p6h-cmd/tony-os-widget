'use strict';
const TZ='America/New_York';
function setTimeState(){const hour=Number(new Intl.DateTimeFormat('en-US',{timeZone:TZ,hour:'numeric',hourCycle:'h23'}).format(new Date()));document.querySelector('.closing').dataset.timeState=hour<11?'morning':hour<18?'day':'evening';}
setTimeState();setInterval(setTimeState,60000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)setTimeState();});
