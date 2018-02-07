$(document).ready(function() {

//create bookmark section variables
var titleInput = $('#title-input');
var urlInput = $('#url-input');
var createBookmarkButton = $('#create-bookmark-button');;
var totalBookmarkCounter = $('#total-bookmark-counter');
var totalReadCounter = $('#total-read-counter');
var totalUnreadCounter = $('#total-unread-counter');

//bookmark list section variables 
var bookmarkList = $('#bookmark-list');
var bookmarkCard = $('.bookmark-card');
var cardTitle = $('.card-title');
var cardUrl = $('.card-url');

//event listeners
$(document).on('click', '.read-button', readButton);
$(document).on('click', '.delete-button', deleteButton);
$(document).on('click', '#create-bookmark-button', validateInput);
$(document).on('input', '#title-input', toggleBookmarkButton);
$(document).on('input', '#url-input', toggleBookmarkButton);
$(document).on('click', '#clear-read-bookmarks-button', clearReadBookmarks);

//defaults
$(createBookmarkButton).prop('disabled',true);

//functions
//toggle disable & enable of create bookmark button 
function toggleBookmarkButton() {
  $(createBookmarkButton).prop('disabled', titleInput.val() === '' && urlInput.val() === '' ? true : false);
};

//validate inout fields aren't empty and valid
function validateInput(event) {
  event.preventDefault()

  if (/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(urlInput.val())) {
  } else {
    alert("Oops! 😳 Please enter a valid URL");
    return
  }

  if (titleInput.val() === '') {
    alert('You must enter a website title');
  } else if (urlInput.val() === '') {
    alert('You must enter a URL');  
  } else {
    addBookmarkCard();
  }
};

//add a new bookmark
function addBookmarkCard() {
  var titleInputValue = titleInput.val();
  var urlInputValue = urlInput.val();
  var newBookmarkCard = '<article class="bookmark-card"><h2 class="card-title">' + titleInputValue + '</h2><hr /><a class="card-url" href="' + urlInputValue + '" target="_blank">' + urlInputValue + '</a><hr /><button class="read-button" type="button">Read</button><button class="delete-button" type="button">Delete</button></article>';

  bookmarkList.append(newBookmarkCard); 
  clearInputs();
  getBookmarkCount();
  toggleBookmarkButton();
  getUnreadCount();
};

//counters
function getBookmarkCount() {
  var totalBookmarks = $('.bookmark-card').length;

  $(totalBookmarkCounter).text(totalBookmarks);
};

function getReadCount() {
  var totalReadBookmarks = $('.read').length;

  $(totalReadCounter).text(totalReadBookmarks);
};

function getUnreadCount() {
  var totalBookmarks = $('.bookmark-card').length;
  var totalReadBookmarks = $('.read').length;
  var totalUnreadBookmarks = totalBookmarks - totalReadBookmarks;

  $(totalUnreadCounter).text(totalUnreadBookmarks);
};

//clear buttons
function clearReadBookmarks() {
  totalReadCounter.innerHTML = 0;

  $('article.bookmark-card.read').remove();
  getBookmarkCount();
  getReadCount();
};

function clearInputs() {
  titleInput.val("");
  urlInput.val("");
}

//read & delete buttons
function readButton() {
  $(this).closest('.bookmark-card').toggleClass('read');
  getReadCount();
  getUnreadCount();
};  

function deleteButton() {
  $(this).closest('.bookmark-card').remove();
  getBookmarkCount();
  getReadCount();
  getUnreadCount();
};

// function toggleClearReadBookmarksButton() {
//   if ($('.read').length > 0) {
//     $('#clear-read-bookmarks-button').toggleClass('show');
//   }
// }

});


