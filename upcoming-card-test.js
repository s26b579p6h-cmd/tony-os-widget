'use strict';
const events=[
  ['Tue, Sep 29','GM Meeting KFC','9:00 PM–10:00 PM','https://us02web.zoom.us/j/83415140267?pwd=bLQ2Trkpbrba6FbHHLpIk1diLNO9cn.1'],
  ['Wed, Sep 30','No events','Open day',null],
  ['Thu, Oct 1','Work','10:00 AM–6:00 PM',null]
];
document.querySelector('#event-list').innerHTML=events.map(([date,title,time,url])=>`<article class="event"><div class="date">${date.replace(', ','<br>')}</div><div class="details">${url?`<a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>`:`<div class="details-title">${title}</div>`}<div class="time">${time}</div></div></article>`).join('');
