import { $ } from "./assets/selectors.js";

const parallaxContainer = $(".about__images__parallax");

window.addEventListener("scroll", () => {
    const { scrollY } = window;

    parallaxContainer.style.transform = `translate(-${scrollY / 35}%, ${scrollY / 100}%)`;
});