function createPoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["o pa'ni le'rin jojo"],
    autoStart: true,
    delay: 90,
    cursor: null,
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", createPoem);
