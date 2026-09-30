'use strict';
const events=[
  ['Tue, Sep 29','GM Meeting KFC','9:00 PM–10:00 PM',[['Zoom','https://us02web.zoom.us/j/83415140267?pwd=bLQ2Trkpbrba6FbHHLpIk1diLNO9cn.1'],['Calendar details','https://www.google.com/calendar/event?eid=MWQwMjRhMjdmaWY4bTg3YTdhNjV2Y3NlM3NfMjAyNjA5MzBUMDEwMDAwWiA1M2lvcGxsdGlpaDBtMG5hYzVxYmJzbWo4a0Bn&authuser=ascapone@gmail.com']]],
  ['Wed, Sep 30','No events','Open day',[]],
  ['Thu, Oct 1','Work','10:00 AM–6:00 PM',[]]
];
document.querySelector('#event-list').innerHTML=events.map(([date,title,time,actions])=>`<article class="event"><div class="date">${date.replace(', ','<br>')}</div><div class="details"><div class="title-row"><span class="details-title">${title}</span>${actions.length?`<span class="actions">${actions.map(([label,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">(${label})</a>`).join(' ')}</span>`:''}</div><div class="time">${time}</div></div></article>`).join('');
