import QuestionCard from "./components/question/question.js";

import BookmarkButton from "./components/bookmarks/bookmarks.js";

const Questions = document.querySelectorAll('[data-js="question"]')

Questions.forEach((question) => {
    QuestionCard(question);
});

const Bookmarks = document.querySelectorAll('[data-js="question__bookmark__button"]')

Bookmarks.forEach((bookmark) => {
    QuestionCard(bookmark);
});


/*const bookmark = document.querySelector('[data-js="question__bookmark__js"]');
const bookmarkButton = document.querySelector('[data-js="question__bookmark__button__js"]');

bookmarkButton.addEventListener("click", () => {
    bookmark.classList.toggle("question__bookmark--save");
});

const answer = document.querySelector('[data-js="question__answer__js"]');
const showButton = document.querySelector('[data-js="question__button__show__js"]');
const hideButton = document.querySelector('[data-js="question__button__hide__js"]');



showButton.addEventListener("click", () => {
    answer.classList.toggle("question__answer--hide");
    hideButton.classList.toggle("question__button--hide");
    showButton.classList.toggle("question__button--hide");
  
});

hideButton.addEventListener("click", () => {
    hideButton.classList.toggle("question__button--hide");
    answer.classList.toggle("question__answer--hide"); 
showButton.classList.toggle("question__button--hide");


    
});
*/

