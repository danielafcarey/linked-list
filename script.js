$(document).ready(function() {

//create bookmark section
var titleInput = document.querySelector('#title-input');
var urlInput = document.querySelector('#url-input');
var totalBookmarkCounter = document.querySelector('#total-bookmark-counter');
var totalReadCounter = document.querySelector('#total-read-counter');
var totalUnreadCounter = document.querySelector('#total-unread-counter');


//bookmark list section
var bookmarkList = document.querySelector('#bookmark-list');
var bookmarkCard = document.querySelector('.bookmark-card');
var cardTitle = document.querySelector('.card-title');
var cardUrl = document.querySelector('.card-url');


//event listeners
$(document).on('click', '.read-button', readButton);
$(document).on('click', '.delete-button', deleteButton);
$(document).on('click', '#create-bookmark-button', validateInput);
$(document).on('input', '#title-input', toggleBookmarkButton);
$(document).on('input', '#url-input', toggleBookmarkButton);
$(document).on('click', '#clear-read-bookmarks-button', clearReadBookmarks);


//functions
$('#create-bookmark-button').prop('disabled',true);

function toggleBookmarkButton() {
  $('#create-bookmark-button').prop('disabled', titleInput.value === '' && urlInput.value === '' ? true : false);
}

function validateInput(event) {
  event.preventDefault()

  if (/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test($("#url-input").val())) {
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
  var titleInputValue = titleInput.value;
  var urlInputValue = urlInput.value;

  var newBookmarkCard = '<article class="bookmark-card"><h2 class="card-title">' + titleInputValue + '</h2><hr /><a class="card-url" href="' + urlInputValue + '" target="_blank">' + urlInputValue + '</a><hr /><button class="read-button" type="button">Read</button><button class="delete-button" type="button">Delete</button></article>';

  titleInput.value = '';
  urlInput.value = '';

  bookmarkList.insertAdjacentHTML('beforeend', newBookmarkCard); 

  getBookmarkCount();
  toggleBookmarkButton();
  getUnreadCount();

}

function getBookmarkCount() {
  var totalBookmarks = $('.bookmark-card').length;
  totalBookmarkCounter.innerHTML = totalBookmarks;
}

function getReadCount() {
  var totalReadBookmarks = $('.read').length;
  totalReadCounter.innerHTML = totalReadBookmarks;
}

function getUnreadCount() {
  var totalBookmarks = $('.bookmark-card').length;
  var totalReadBookmarks = $('.read').length;
  var totalUnreadBookmarks = totalBookmarks - totalReadBookmarks;
  totalUnreadCounter.innerHTML = totalUnreadBookmarks;
}

function clearReadBookmarks() {
  $('article.bookmark-card.read').remove();
  totalReadCounter.innerHTML = 0;
  getBookmarkCount();
}

function readButton() {
  $(this).closest('.bookmark-card').toggleClass('read');
  getReadCount();
  getUnreadCount();
}   

function deleteButton() {
  $(this).closest('.bookmark-card').remove();
  getBookmarkCount();
  getReadCount();
  getUnreadCount();
}


});


