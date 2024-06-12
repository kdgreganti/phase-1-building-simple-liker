// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const emptyHeart = document.getElementById('empty-heart');
const fullHeart = document.getElementById('full-heart');
const errorModal = document.getElementById('error-modal');

emptyHeart.addEventListener('click', () => {
  mimicServerCall()
  .then(() => {
    fullHeart.innerText = FULL_HEART;
    fullHeart.classList.add('activated-heart');
  })
  .catch (() => {
    errorModal.classList.remove('hidden');
    displayErrorMessage('Server error  message');
    setTimeout(() => {
      errorModal.add('hidden');
    }, 3000);
  });
});

fullHeart.addEventListener('click', () => {
    fullHeart.innerText = EMPTY_HEART;
    fullHeart.classList.add('activated-heart');
  });
  
  






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
