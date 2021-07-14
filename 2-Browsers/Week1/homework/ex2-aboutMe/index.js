'use strict';

/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/
document.body.style.fontFamily = 'Arial, sans-serif';
const nickname = document.getElementById('nickname');
const favFood = document.getElementById('fav-food');
const hometown = document.getElementById('hometown');
nickname.textContent = 'Roqaya';
favFood.textContent = 'Pasta';
hometown.textContent = 'NewYork';
const listItems = document.querySelectorAll('li');
listItems.forEach((listItem) => listItem.classList.add('list-item'));
