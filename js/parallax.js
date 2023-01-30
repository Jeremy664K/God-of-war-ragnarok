import { $ } from "./assets/selectors.js";

const nav = $(".header__game");
const parallaxContainer = $(".about__images__parallax");

window.addEventListener("scroll", () => {
    const { scrollY } = window;

    if (scrollY > 30) nav.classList.add("header__game__fixed", "fade__in");
    else nav.classList.remove("header__game__fixed", "fade__in");

    parallaxContainer.style.transform = `translate(-${scrollY / 35}%, ${scrollY / 100}%)`;
});
