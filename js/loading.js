import { $, body } from "./assets/selectors.js";

const loading = $(".loading");

window.addEventListener("load", () => {
    body.classList.remove("isevent");
    loading.classList.remove("isopen");
});
