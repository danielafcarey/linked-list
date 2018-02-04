$(document).ready(function() {

//create bookmark section
var titleInput = document.querySelector('#title-input');
var urlInput = document.querySelector('#url-input');
var createBookmarkButton = document.querySelector('#create-bookmark-button');

//bookmark list section
var bookmarkList = document.querySelector('#bookmark-list');
var bookmarkCard = document.querySelector('.bookmark-card');
var cardTitle = document.querySelector('.card-title');
var cardUrl = document.querySelector('.card-url');

//event listeners
titleInput.addEventListener('input', enableSubmitButton);
urlInput.addEventListener('input', enableSubmitButton);
createBookmarkButton.addEventListener('click', validateInput);

function enableSubmitButton() {
  console.log('work?');
  if (titleInput.value !== '' || urlInput.value !== '' ) {
    createBookmarkButton.disabled = false;
  } else {
    createBookmarkButton.disabled = true;  
  }
}

//functions
function validateInput() {
  console.log('hello');

  if (titleInput.value === '') {
    alert('You must enter a website title');
  } else if (urlInput.value === '') {
    alert('You must enter a URL');  
  } else {
  addBookmarkCard();
  }
}


function addBookmarkCard() {
  var titleInputValue = titleInput.value;
  var urlInputValue = urlInput.value;

  var newBookmarkCard = '<article class="bookmark-card"><h2 class="card-title article-">' + titleInputValue + '</h2><hr /><a class="card-url" href="#">' + urlInputValue + '</a><hr /><button class="read-button" type="button">Read</button><button class="delete-button" type="button">Delete</button></article>';

  bookmarkList.insertAdjacentHTML('beforeend', newBookmarkCard); 
  markAsRead();
  deleteCard();
}

function markAsRead() {
  $('.read-button').on('click', function() {
      $(this).closest('.bookmark-card').toggleClass('read');
      console.log('WORK!');
  });
}

function deleteCard() {
  $('.delete-button').on('click', function(){
      $(this).closest('.bookmark-card').remove();
  });
}

});