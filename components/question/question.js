export default function QuestionCard(questionButton) {
  const answer = questionButton.querySelector(
    '[data-js="question__answer__js"]'
  );
  const showButton = questionButton.querySelector(
    '[data-js="question__button__show__js"]'
  );
  const hideButton = questionButton.querySelector(
    '[data-js="question__button__hide__js"]'
  );

  showButton.addEventListener('click', () => {
    answer.classList.remove('hide');
    hideButton.classList.remove('hide');
    showButton.classList.add('hide');
  });

  hideButton.addEventListener('click', () => {
    hideButton.classList.add('hide');
    answer.classList.add('hide');
    showButton.classList.remove('hide');
  });
}
