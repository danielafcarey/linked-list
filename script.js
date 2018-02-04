
//create bookmark section
var titleInput = document.querySelector('#title-input');
var urlInput = document.querySelector('#url-input');
var createBookmarkButton = document.querySelector('#create-bookmark-button');

//bookmark list section
var bookmarkList = document.querySelector('#bookmark-list');
var bookmarkCard = document.querySelector('.bookmark-card');
var cardTitle = document.querySelector('.card-title');
var cardUrl = document.querySelector('.card-url');
var readButton;
var deleteButton = document.querySelector('.delete-button');


//event listeners
createBookmarkButton.addEventListener('click', addBookmarkCard);

var submitCount = 0;
var readCount = 0;
var addClass = 0;

function increaseSubmitCount() {
  readButton = document.querySelectorAll('.read-button');
  console.log(readButton);

  for (i = 0; i < readButton.length; i++){
    if (submitCount > 0) {
      readButton[i].addEventListener('click', markAsRead);
    }
  }

}

//functions
function addBookmarkCard() {
  var titleInputValue = titleInput.value;
  var urlInputValue = urlInput.value;

  var newBookmarkCard = '<article class="bookmark-card"><h2 class="card-title article-' + addClass + '">' + titleInputValue + '</h2><hr /><a class="card-url" href="#">' + urlInputValue + '</a><hr /><button class="read-button" type="button">Read</button><button class="delete-button" type="button">Delete</button></article>';

  addClass++;

  console.log(titleInputValue);
  console.log(urlInputValue);
  bookmarkList.insertAdjacentHTML('beforeend', newBookmarkCard); 

  submitCount++;
  increaseSubmitCount(); 
}

function markAsRead() {
  readButton.className = 'read';
}

function markAsUnread() {

}