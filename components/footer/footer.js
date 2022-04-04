export default function QuestionCard(questionButton) {

   


    const answer = questionButton.querySelector('[data-js="question__answer__js"]');
    const showButton = questionButton.querySelector('[data-js="question__button__show__js"]');
    const hideButton = questionButton.querySelector('[data-js="question__button__hide__js"]');
    
    
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
    }