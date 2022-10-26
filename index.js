const headerEl = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        headerEl.classList.add("scroll");
        headerEl.classList.remove("header");
    } else {
        headerEl.classList.remove("scroll");
        headerEl.classList.add("header");
    }
})