import QuestionCard from "./question.js";
import BookmarkButton from "../bookmarks/bookmarks.js";

export default function QuestionCardJs() {
  /*  const url =
    "https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple";

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.results))
    .catch((error) => console.error(`Fehler: ${error}`));
*/

  const cardData = [
    {
      id: "1",
      isBookmarked: true,
      question:
        "Mit welcher Geschwingigkeit ploppt ein Sektkorken aus der Flasche?",
      answer: "40 kmh",
      tags: ["Sylvester", "Getränke", "Geschwindigkeit"],
    },
    {
      id: "2",
      isBookmarked: false,
      question: "Wie viele Monde hat der Jupiter?",
      answer: "63",
      tags: ["Weltall", "Planet", "Raumfahrt"],
    },
    {
      id: "3",
      isBookmarked: true,
      question:
        "In welcher deutschen Stadt wird mehr Bier gebraut als in München?",
      answer: "Dortmund",
      tags: ["Bier", "Tradition", "Deutschland"],
    },
  ];

  /* HTML einfügen */

  const questionContainer = document.querySelector(".question__container");

  cardData.forEach((cardDataItem) => {
    const container = document.createElement("section");
    container.classList.add("question");
    container.innerHTML = `
    <div>
    <h2 class="question__headline">Question</h2>
    <div data-js="question__bookmark__button">
      <button
        class="question__bookmark__button"
        data-js="question__bookmark__button__js"
      >
        <img
          src="./images/bookmark.svg"
          alt="bookmark icon"
          class="question__bookmark"
          data-js="question__bookmark__js"
        />
      </button>
    </div>
  </div>
  <article class="question__article">
    <p class="question__question">${cardDataItem.question}</p>
  
    <button
      class="question__button question__button--hide"
      data-js="question__button__show__js"
    >
      Show Answer
    </button>
    <button class="question__button hide" data-js="question__button__hide__js">
      Hide Answer
    </button>
    <p class="question__answer hide" data-js="question__answer__js">
      ${cardDataItem.answer}
    </p>
  </article>
  
    `;
    /* tags */

    const listElement = document.createElement("ul");
    listElement.className = "question__tags";
    container.append(listElement);

    cardDataItem.tags.forEach((tag) => {
      const item = document.createElement("li");
      item.className = "question__onetag";

      item.textContent = tag;
      listElement.append(item);
    });
    questionContainer.append(container);

    /* question.js export*/

    QuestionCard(container);
  });

  const Bookmarks = document.querySelectorAll(
    '[data-js="question__bookmark__button"]'
  );

  Bookmarks.forEach((bookmark) => {
    BookmarkButton(bookmark);
  });
}
