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


//functions

function enableSubmitButton() {
  if (titleInput.value !== '' || urlInput.value !== '' ) {
    createBookmarkButton.disabled = false;
  } else {
    createBookmarkButton.disabled = true;  
  }
}

function validateInput(event) {
  event.preventDefault()

  if(/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test($("#url-input").val())) {
  } else {
    alert("Oops! 😳 Please enter a valid URL");
    return
  }

  if (titleInput.value === '') {
    alert('You must enter a website title');
  } else if (urlInput.value === '') {
    alert('You must enter a URL');  
  } else {
    addBookmarkCard();
  }
}

function addBookmarkCard() {
  console.log('addBookmarkCard function ran')
  var titleInputValue = titleInput.value;
  var urlInputValue = urlInput.value;

  var newBookmarkCard = '<article class="bookmark-card"><h2 class="card-title article-">' + titleInputValue + '</h2><hr /><a class="card-url" href="' + urlInputValue + '" target="_blank">' + urlInputValue + '</a><hr /><button class="read-button" type="button">Read</button><button class="delete-button" type="button">Delete</button></article>';

  titleInput.value = '';
  urlInput.value = '';

  bookmarkList.insertAdjacentHTML('beforeend', newBookmarkCard); 

  deleteCard();
}

$('.read-button').on('click', markAsRead);

function markAsRead() {
  $(this).closest('.bookmark-card').toggleClass('read');
  console.log('marked as read');
}

function deleteCard() {
  $('.delete-button').on('click', function(){
      $(this).closest('.bookmark-card').remove();
  });
}




});


