'use strict';
/*------------------------------------------------------------------------------
1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
const catEl = document.querySelector('img');
const catDancing =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
let timer = 0;
let interval;
catEl.style.left = '0px';
const intervalFunc = () => {
  catEl.src = './cat-walk.gif';
  interval = setInterval(catWalk, 50);
};

function catWalk() {
  if (timer <= window.innerWidth - catEl.width) {
    timer += 10;
  } else {
    timer = 0;
  }
  catEl.style.left = `${timer}px`;

  if (
    window.innerWidth / 2 - 190 < timer &&
    timer < window.innerWidth / 2 - 170
  ) {
    timer += 10;
    catEl.src = catDancing;
    clearInterval(interval);
    setTimeout(intervalFunc, 5000);
  }
}

window.addEventListener('load', intervalFunc);
