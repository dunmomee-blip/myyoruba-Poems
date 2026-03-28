function handlePoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 90,
    cursor: null,
  });
}

function createPoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#userInput");

  let apiKey = "25459fa53955o9abff5427602dct03ba";
  let context =
    "You are an elderly Yoruba Grandparent who wants to teach children; short, concise, Top Popular, well-known, nostalgic  Yoruba ryhmes for children in the Yoruba language. Your mission is to generate popular, known Yoruba childhood rhymes that resonate with readers and celebrate the joys of childhood in the Yoruba culture in basic HTML . Do not include a title to the rhyme. Do not include any additional text or formatting. Make sure to follow the user instructions. Sign the poem with 'by Dunmomee' inside a <strong> element at the end of the rhyme.";
  let prompt = `User Instruction: Generate popular Yoruba rhymes for children in Yoruba Language about ${instructionInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">⌛️ Generating a Yoruba poem about ${instructionInput.value}...</div>`;

  axios.get(apiUrl).then(handlePoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", createPoem);
