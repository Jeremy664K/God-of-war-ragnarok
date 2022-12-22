import { $$ } from "./assets/selectors.js";

const buttonsQuestions = $$(".questions__link");
const responsesQuestions = $$(".questions__response");

function handleQuestion(id) {
    const response = responsesQuestions[id];

    response.classList.toggle("fade__in")
    response.classList.toggle("isopenresponse");
}

buttonsQuestions.forEach((buttonQuestion, id) => buttonQuestion.addEventListener("click", () => handleQuestion(id)));