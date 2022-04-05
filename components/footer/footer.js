/*export default function QuestionCard(questionButton) {

   


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
    }*/

    export default function Footer() {


        const homeButton = document.querySelector('[data-js="footer__button--home"]');
        const bookmarkButton = document.querySelector('[data-js="footer__button--bookmark"]');
        const noteButton = document.querySelector('[data-js="footer__button--notes"]');
        const profilButton = document.querySelector('[data-js="footer__button--profil"]');
        
        const questionSide = document.querySelector('[data-js="question__side"]');
        const bookmarkSide = document.querySelector('[data-js="bookmark__side"]');
        const noteSide = document.querySelector('[data-js="form__side"]');
        const profilSide = document.querySelector('[data-js="profil__side"]');
        
        
        
        homeButton.addEventListener("click", () => {
            homeButton.classList.add("nav__background--activ");
            bookmarkButton.classList.remove("nav__background--activ");
            noteButton.classList.remove("nav__background--activ");
            profilButton.classList.remove("nav__background--activ");
        
            questionSide.classList.remove("hide");
            bookmarkSide.classList.add("hide");
            noteSide.classList.add("hide");
            profilSide.classList.add("hide");
          
        });
        
        bookmarkButton.addEventListener("click", () => {
            homeButton.classList.remove("nav__background--activ");
            bookmarkButton.classList.add("nav__background--activ");
            noteButton.classList.remove("nav__background--activ");
            profilButton.classList.remove("nav__background--activ");
        
            bookmarkSide.classList.remove("hide");
            questionSide.classList.add("hide");
            noteSide.classList.add("hide");
            profilSide.classList.add("hide");
          
        });
        
        noteButton.addEventListener("click", () => {
            homeButton.classList.remove("nav__background--activ");
            bookmarkButton.classList.remove("nav__background--activ");
            noteButton.classList.add("nav__background--activ");
            profilButton.classList.remove("nav__background--activ");
        
        
            bookmarkSide.classList.add("hide");
            questionSide.classList.add("hide");
            noteSide.classList.remove("hide");
            profilSide.classList.add("hide");
          
        });
        
        profilButton.addEventListener("click", () => {
            homeButton.classList.remove("nav__background--activ");
            bookmarkButton.classList.remove("nav__background--activ");
            noteButton.classList.remove("nav__background--activ");
            profilButton.classList.add("nav__background--activ");
        
            bookmarkSide.classList.add("hide");
            questionSide.classList.add("hide");
            noteSide.classList.add("hide");
            profilSide.classList.remove("hide");
          
        });
        }