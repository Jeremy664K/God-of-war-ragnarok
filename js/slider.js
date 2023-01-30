import { $, $$ } from "./assets/selectors.js";

const gallery = $(".hero__gallery__list");
const galleryNextLinks = $$(".hero__gallery__next");

const galleryNextArrow = $(".hero__gallery__arrow--right");
const galleryPrevArrow = $(".hero__gallery__arrow--left");

const informationLink = $(".character__information");
const charactersLinks = $$(".characters__link");
const charactersNextLinks = $$(".characters__next");
const charactersTitle = $(".characters__title");

const charactersNextArrow = $(".characters__arrow--right");
const charactersPrevArrow = $(".characters__arrow--left");

let charactersLinkActive = $(".characters__link--active");
let charactersNextLinkActive = $(".characters__next--active");

let galleryNextLinkActive = $(".hero__gallery__next--active");
let position = 0;
let positionCharacter = 0;

function refreshValue(pos) {
    position = pos;
    let value = position * -14;

    gallery.style.transform = `translateX(${value}%)`;
}

function moveSlider(nextLink, pos) {
    refreshValue(pos);

    galleryNextLinkActive.classList.remove("hero__gallery__next--active");

    galleryNextLinkActive = nextLink;
    nextLink.classList.add("hero__gallery__next--active");
}

function arrowSlider(isIncrement) {
    if ((!isIncrement && position <= 0) || (isIncrement && position >= galleryNextLinks.length - 1)) return;
    position = isIncrement ? position + 1 : position - 1;

    const nextLink = galleryNextLinks[position];
    moveSlider(nextLink, position);
}

function characterSlider(nextLink, pos, isCharacterLink) {
    const characterLink = isCharacterLink ? nextLink : charactersLinks[pos];
    const characterNextLink = isCharacterLink ? charactersNextLinks[pos] : nextLink;

    positionCharacter = pos;
    charactersTitle.textContent = characterLink.title;
    informationLink.setAttribute("data-id", pos);

    charactersLinkActive.classList.remove("characters__link--active");
    charactersNextLinkActive.classList.remove("characters__next--active");

    charactersLinkActive = characterLink;
    charactersNextLinkActive = characterNextLink;

    characterLink.classList.add("characters__link--active");
    characterNextLink.classList.add("characters__next--active");
}

function characterArrowSlider(isIncrement) {
    if ((!isIncrement && positionCharacter <= 0) || (isIncrement && positionCharacter >= charactersLinks.length - 1)) return;

    positionCharacter = isIncrement ? positionCharacter + 1 : positionCharacter - 1;

    const nextLink = charactersLinks[positionCharacter];
    characterSlider(nextLink, positionCharacter, true);
}

galleryNextLinks.forEach((nextLink, pos) => nextLink.addEventListener("click", () => moveSlider(nextLink, pos)));
galleryNextArrow.addEventListener("click", () => arrowSlider(true));
galleryPrevArrow.addEventListener("click", () => arrowSlider(false));

charactersLinks.forEach((nextLink, pos) => nextLink.addEventListener("click", () => characterSlider(nextLink, pos, true)));
charactersNextLinks.forEach((nextLink, pos) => nextLink.addEventListener("click", () => characterSlider(nextLink, pos, false)));
charactersNextArrow.addEventListener("click", () => characterArrowSlider(true));
charactersPrevArrow.addEventListener("click", () => characterArrowSlider(false));
