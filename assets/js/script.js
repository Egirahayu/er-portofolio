const links = document.querySelectorAll(".nav-link");
const logo = document.getElementById("logo");

function resetNav() {
  links.forEach(l => {
    l.removeAttribute("aria-current");
    l.classList.remove("bg-gray-900","text-white");
    l.classList.add("text-gray-300");
  });
}

links.forEach(link => {
  link.addEventListener("click", function () {

    resetNav();

    this.setAttribute("aria-current","page");
    this.classList.add("bg-gray-900","text-white");
    this.classList.remove("text-gray-300");

  });
});

logo.addEventListener("click", () => {

  resetNav();

  const aboutLink = document.querySelector('a[href="#about"]');

  aboutLink.setAttribute("aria-current","page");
  aboutLink.classList.add("bg-gray-900","text-white");
  aboutLink.classList.remove("text-gray-300");

});