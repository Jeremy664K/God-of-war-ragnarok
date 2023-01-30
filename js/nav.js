import { $, $$, body } from "./assets/selectors.js";

const urlPageSearch = "https://www.playstation.com/es-cl/search/";
const formSearch = $(".search__page__form");

const containerForm = $(".search__page");
const buttonOpenForm = $(".nav__search__button");
const buttonCloseForm = $(".search__page__close");

const menu = $(".nav__shared");
const buttonsMenu = $$(".nav__shared__button");
const buttonOpenMenu = $(".responsive__button");

const menuRectTop = $(".responsive__rect--top");
const menuRectBottom = $(".responsive__rect--bottom");

function handleSubmit(event) {
    event.preventDefault();
    const valueSearch = new FormData(formSearch).get("search");

    if (valueSearch) location.href = `${urlPageSearch}?q=${valueSearch}`;
}

function toggleForm() {
    containerForm.classList.toggle("fade__in");
    containerForm.classList.toggle("isopen");
    body.classList.toggle("isevent");
}

function toggleMenu() {
    menu.classList.toggle("isopennav");
    body.classList.toggle("iseventresponsive");

    menuRectTop.classList.toggle("responsive__rect--topchange");
    menuRectBottom.classList.toggle("responsive__rect--bottomchange");
}

buttonOpenForm.addEventListener("click", toggleForm);
buttonCloseForm.addEventListener("click", toggleForm);
formSearch.addEventListener("submit", handleSubmit);

buttonOpenMenu.addEventListener("click", toggleMenu);
buttonsMenu.forEach((button) => button.addEventListener("click", toggleMenu));
