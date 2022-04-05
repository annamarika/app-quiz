import QuestionCardJs from "./components/question/questionarray.js";

import Footer from "./components/footer/footer.js";

QuestionCardJs();

Footer();

/*

    const homeButton = document.querySelector('[data-js="footer__button--home"]');
    const bookmarkButton = document.querySelector('[data-js="footer__button--bookmark"]');
    const noteButton = document.querySelector('[data-js="footer__button--notes"]');
    const profilButton = document.querySelector('[data-js="footer__button--profil"]');
    
    const questionSide = document.querySelector('[data-js="question__side"]');
    const bookmarkSide = document.querySelector('[data-js="bookmark__side"]');
    const noteSide = document.querySelector('[data-js="form__side"]');
    const profilSide = document.querySelector('[data-js="profil__side"]');

  
    
    homeButton.addEventListener("click", () => {
        questionSide.classList.remove("hide");
        bookmarkSide.classList.add("hide");
        noteSide.classList.add("hide");
        profilSide.classList.add("hide");
      
    });

    bookmarkButton.addEventListener("click", () => {
        bookmarkSide.classList.remove("hide");
        questionSide.classList.add("hide");
        noteSide.classList.add("hide");
        profilSide.classList.add("hide");
      
    });

    noteButton.addEventListener("click", () => {
        bookmarkSide.classList.add("hide");
        questionSide.classList.add("hide");
        noteSide.classList.remove("hide");
        profilSide.classList.add("hide");
      
    });

    profilButton.addEventListener("click", () => {
        bookmarkSide.classList.add("hide");
        questionSide.classList.add("hide");
        noteSide.classList.add("hide");
        profilSide.classList.remove("hide");
      
    });
    */
