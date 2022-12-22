import { $, $$, body } from "./assets/selectors.js";
import { data } from "./assets/modal-data.js" 

const modal = $(".modal");
const buttonsOpenModal = $$(".link__modal");
const buttonCloseModal = $(".modal__close__link");

function openModal(eventButton) {
    const dataId = eventButton.getAttribute("data-id");

    const { img, title, paragraph } = data[dataId];

    body.classList.add("isevent");
    modal.classList.add("isopen");

    const modalHome = document.createElement("div");
    modalHome.classList.add("modal__home", "center", "flex", "gap");

    modalHome.innerHTML = `
        <figure class="modal__images flex">
            <img class="modal__image" src="${img}" alt="${title}" loading="lazy" decoding="async">
        </figure>
        <div class="modal__home__title">
            <h2 class="title salient">${title}</h2>
            <p class="margin--top">${paragraph}</p>
        </div>
    `;

    modal.appendChild(modalHome);
}

function closeModal() {
    modal.classList.remove("isopen");
    body.classList.remove("isevent");

    const lastChild = modal.lastChild;
    modal.removeChild(lastChild);
}

buttonsOpenModal.forEach(button => button.addEventListener("click", () => openModal(button)));
buttonCloseModal.addEventListener("click", closeModal)