'use strict';
const TZ = 'America/New_York';
// Original short reflections; no quotations attributed to other people.
const QUOTES = [
'Same sky. More possibilities.',
'One small step can open a wider view.',
'Leave room for something good to surprise you.',
'The next right step is enough for today.',
'A quiet pause can change the direction of a day.',
'Notice what is already growing.',
'Progress can be gentle and still be real.',
'You do not need the whole map to begin.',
'Keep what matters close. Let the rest breathe.',
'There is more ahead than you can see from here.',
'Small promises kept build a steadier life.',
'Make a little space for wonder.',
'An ordinary day can hold an extraordinary moment.',
'Begin with what is within reach.',
'The view changes when you give yourself time.',
'Let today have its own shape.',
'Give your attention to what gives something back.',
'A little courage belongs in every new beginning.',
'Rest is part of the journey.',
'Choose a pace you can return to tomorrow.',
'Something worthwhile can start very simply.',
'Look for the good without overlooking the real.',
'You can adjust your course without losing your way.',
'Listen for what keeps asking for your attention.',
'Today can be a fresh page, even in the same story.',
'There is strength in doing one thing with care.',
'Keep a place in your day for people you love.',
'You are allowed to enjoy the life you are building.',
'Some answers arrive after you stop rushing.',
'Let the small wins count.',
'What you notice is part of what you nurture.',
'A good direction matters more than a perfect plan.',
'Make your next choice a kind one.',
'Leave a little energy for yourself.',
'Growth often happens beyond the busy part of the day.',
'An honest reflection is a useful beginning.',
'You can carry the lesson without carrying every burden.',
'Protect a little time for what feels alive.',
'Look back with kindness. Look ahead with curiosity.',
'Not every meaningful thing needs to be measured.',
'A slower moment may offer a clearer view.',
'Build a day that has room to be human.',
'Let a useful lesson become a small change.',
'You can begin again without starting from nothing.',
'Make room for the things you hope to remember.',
'Attention is a way of caring.',
'Steady effort leaves a trail worth following.',
'Sometimes enough is a wise place to stop.',
'Leave tomorrow a little easier to enter.',
'The good in your life deserves a second look.',
'Take the next step with the energy you have.',
'A little patience can reveal a different possibility.',
'Keep your plans flexible and your purpose close.',
'Let curiosity have a seat beside responsibility.',
'You can be proud of progress still in motion.',
'There is value in a day lived with attention.',
'Choose something small that your future self will appreciate.',
'Let the evening hold a moment of gratitude.',
'The journey has room for both effort and joy.',
'There is always another view to discover.'
];
function easternDate(now) {
  const parts = new Intl.DateTimeFormat('en-US', {timeZone: TZ, year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', hourCycle: 'h23'}).formatToParts(now);
  return Object.fromEntries(parts.filter(p => p.type !== 'literal').map(p => [p.type, Number(p.value)]));
}
function updateClosing(now = new Date()) {
  const {year, month, day, hour} = easternDate(now);
  const state = hour < 11 ? 'morning' : hour < 18 ? 'day' : 'evening';
  const closing = document.querySelector('.closing');
  closing.dataset.timeState = state;
  document.querySelector('.landscape').src = `assets/tony/closing-visual-${state}.jpg`;
  const calendarDay = Math.floor(Date.UTC(year, month - 1, day) / 86400000);
  document.querySelector('.quote').textContent = QUOTES[((calendarDay % QUOTES.length) + QUOTES.length) % QUOTES.length];
}
updateClosing();
setInterval(updateClosing, 60000);
document.addEventListener('visibilitychange', () => {if (!document.hidden) updateClosing();});
