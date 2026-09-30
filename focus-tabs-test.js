'use strict';
const tasks={
  today:[['Clean for 5 minutes a Day','https://app.todoist.com/app/task/63r3pXmrrfp699f2'],['Clean towels','https://app.todoist.com/app/task/63r4Mwr7V2hcpv4R'],['Do Landry and put it away','https://app.todoist.com/app/task/63r43xX9CHjQ3HGR']],
  upcoming:[['text Kelly about Rayne · Wed, Sep 30','https://app.todoist.com/app/task/6hfVp9QJR78WmmQ5'],['Wash bed sheets · Wed, Sep 30','https://app.todoist.com/app/task/63r3q7Xw7hhFHmX2'],['Rent · Thu, Oct 1','https://app.todoist.com/app/task/63r3gg8xqf4jRqwR']],
  nodate:[['Clean out trunk out','https://app.todoist.com/app/task/64WMFvmPCXP7c4hP'],['Clean the bottom of my closet','https://app.todoist.com/app/task/64WJFMQH97r638Cw'],['Clean the rug and bed','https://app.todoist.com/app/task/63r3xm9PqRjPc6X2']]
};
const list=document.querySelector('#task-list');
function render(view){list.innerHTML=tasks[view].slice(0,5).map((task,index)=>`<div class="task"><span class="number">${index+1}</span><a target="_blank" rel="noopener noreferrer" href="${task[1]}">${task[0]}</a></div>`).join('')||'<div class="task">No open items</div>'}
document.querySelectorAll('.tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(item=>{item.classList.remove('active');item.setAttribute('aria-selected','false')});tab.classList.add('active');tab.setAttribute('aria-selected','true');render(tab.dataset.view)}));
render('today');
