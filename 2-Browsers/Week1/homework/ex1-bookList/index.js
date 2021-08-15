//cspell: disable
/*
  
 ** Exercise 1: The book list **

  I'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

*/
//cspell: enable

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    isbn: '978-0465050659',
    alreadyRead: false,
    imgSrc: './assets/the_design_of_everyday_things.jpg',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    isbn: '978-1617933431',
    alreadyRead: true,
    imgSrc: './assets/the_most_human_human.jpg',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    isbn: '978-0201616224',
    alreadyRead: true,
    imgSrc: './assets/the_pragmatic_programmer.jpg',
  },
];

function createBookList(books) {
  // your code goes in here, return the ul element

  const ulElement = document.createElement('ul');
  ulElement.style.display = 'flex';
  document.querySelector('#bookList').appendChild(ulElement);
  for (let i = 0; i < books.length; i++) {
    const liElement = document.createElement('li');
    liElement.style.width = 'calc(30% - 20px)';
    liElement.style.display = 'block';
    liElement.style.margin = '10px 20px';
    liElement.style.padding = '10px';
    liElement.style.listStyle = 'none';

    if (books[i].alreadyRead === true) {
      liElement.style.backgroundColor = 'green';
    } else {
      liElement.style.backgroundColor = 'red';
    }

    ulElement.appendChild(liElement);

    const pElement = document.createElement('p');
    pElement.textContent = `${books[i].title}: ${books[i].author}`;
    pElement.style.textAlign = 'center';
    const imgElement = document.createElement('img');

    imgElement.src = books[i].imgSrc;
    imgElement.setAttribute('alt', books[i].title);
    imgElement.style.display = 'block';
    imgElement.style.height = '400px';
    imgElement.style.marginLeft = 'auto';
    imgElement.style.marginRight = 'auto';
    imgElement.style.marginBottom = '20px';
    imgElement.style.width = '70%';

    liElement.appendChild(pElement);
    liElement.appendChild(imgElement);
  }
}

const ulElement = createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);
