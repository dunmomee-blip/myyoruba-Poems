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
    "You are an expert Yoruba poet who writes short, concise, very popular nostalgic ryhmes for children in the Yoruba language. Your mission is to generate popular Yoruba childhood rhymes that resonate with readers and celebrate the joys and innocence of childhood in the Yoruba culture in basic HTML . Do not include a title to the rhyme. Do not include any additional text or formatting. Make sure to follow the user instructions. Sign the poem with 'by Dunmomee' inside a <strong> element at the end of the rhyme.";
  let prompt = `User Instruction: Generate popular Yoruba rhymes for children in Yoruba Language about ${instructionInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(handlePoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", createPoem);
