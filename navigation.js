'use strict';
// Destinations come only from the private embed fragment, never from public hosting.
const menu = document.querySelector('.menu');
const trigger = document.querySelector('.picture');
const nav = document.querySelector('nav');
const icons = ['⌂','✎','🧭','📅','🎯','📁','🌱','🔄','📚'];
function readConfiguration() {
  const value = JSON.parse(decodeURIComponent(location.hash.slice(1)));
  if (!Array.isArray(value.links) || value.links.length !== 9) throw new Error('Invalid destinations');
  return value.links.map((link, index) => {
    const url = new URL(link.url);
    if (url.protocol !== 'https:' || !['app.notion.com','www.notion.so','notion.so'].includes(url.hostname) || url.username || url.password) throw new Error('Invalid destination');
    const id = url.pathname.match(/[a-f0-9]{32}/i)?.[0];
    if (!id || typeof link.label !== 'string' || link.label.length > 30) throw new Error('Invalid destination');
    return {label:link.label, url:url.href, native:`notion://www.notion.so/${id}${url.hash}`, icon:icons[index]};
  });
}
function setOpen(open) {
  menu.classList.toggle('open', open);
  nav.hidden = !open;
  trigger.setAttribute('aria-expanded', String(open));
  trigger.setAttribute('aria-label', `${open ? 'Close' : 'Open'} Tony OS navigation`);
}
try {
  for (const link of readConfiguration()) {
    const anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.title = link.label;
    const icon = document.createElement('span');
    icon.className = 'icon'; icon.setAttribute('aria-hidden','true'); icon.textContent = link.icon;
    anchor.append(icon, document.createTextNode(link.label));
    nav.append(anchor);
  }
  trigger.addEventListener('click', () => setOpen(nav.hidden));
  document.addEventListener('keydown', event => {if (event.key === 'Escape') {setOpen(false);trigger.focus();}});
} catch (_) {
  trigger.disabled = true;
  document.querySelector('.notice').hidden = false;
}
function updatePicture() {
  const hour = Number(new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',hour:'numeric',hourCycle:'h23'}).format(new Date()));
  const state = hour < 11 ? 'morning' : hour < 18 ? 'day' : 'evening';
  trigger.querySelector('img').src = `assets/tony/living-banner-${state}.jpg`;
}
updatePicture(); setInterval(updatePicture,60000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)updatePicture();});
