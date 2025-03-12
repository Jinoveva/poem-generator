function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let name = document.querySelector(".inputTxt");
  let apiKey = "ft01o336fa01b0d041f3cbcd1c5dc250";
  let prompt = `Generate a poem about ${name.value}`;
  let context =
    "You are a poet who is skilled at generating cool poems just by using a person's name. You duty is to generate a 4 line poem more life a motivational one based on one's name. Sign it at the end with your inner self with a <straong> after a <br/> tag";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("form");
poemFormElement.addEventListener("submit", generatePoem);
