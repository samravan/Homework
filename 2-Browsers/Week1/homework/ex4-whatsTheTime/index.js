'use strict';
/*------------------------------------------------------------------------------
1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
const headingEl = document.createElement('h1');
headingEl.textContent = 'current time';
document.body.appendChild(headingEl);
function addCurrentTime() {
  const time = new Date();
  headingEl.textContent = `${time.toLocaleTimeString('en-ir')}`;
}
setInterval(addCurrentTime, 1000);

window.addEventListener('DOMContentLoaded', addCurrentTime);
